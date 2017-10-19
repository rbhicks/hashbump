import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLBoolean,
  GraphQLNonNull
} from 'graphql';

import Sequelize from 'sequelize';
import password from './password.js';
import escape from 'pg-escape';

const dbConnection = new Sequelize(
    'hashbump',
    'hashbumpglenn',
    password,
    {
        dialect: 'postgres',
        host: 'localhost'
    }
);

const operator = dbConnection.Op;

const sequelize = dbConnection.define('hashtag', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  yayCount: {
    type: Sequelize.BIGINT,
    allowNull: false,
    defaultValue: 0
  },
  grrrCount: {
    type: Sequelize.BIGINT,
    allowNull: false,
    defaultValue: 0
  },
  dunnoCount: {
    type: Sequelize.BIGINT,
    allowNull: false,
    defaultValue: 0
  },
  mehCount: {
    type: Sequelize.BIGINT,
    allowNull: false,
    defaultValue: 0
  }
});

const Hashtag = new GraphQLObjectType({
  name: 'Hashtag',
  description: 'Hashtag information. The primary construct for hashbump.',
  fields: () => {
    return {
      name: {
        type: GraphQLString,
        resolve (hashtag) {
          return hashtag.name;
        }
      },
      yayCount: {
        type: GraphQLInt,
        resolve (hashtag) {
          return hashtag.yayCount;
        }
      },
      grrrCount: {
        type: GraphQLInt,
        resolve (hashtag) {
          return hashtag.grrrCount;
        }
      },
      dunnoCount: {
        type: GraphQLInt,
        resolve (hashtag) {
          return hashtag.dunnoCount;
        }
      },
      mehCount: {
        type: GraphQLInt,
        resolve (hashtag) {
          return hashtag.mehCount;
        }
      }
    };
  }
});


const TopBumpCount = new GraphQLObjectType({
    name: 'TopBumpCount',
    description: 'Top Bump Count information. This is the highest bump counts for a bump count type.',
    fields: () => {
        return {
            name: {
                type: GraphQLString,
            },
            count: {
                type: GraphQLInt,
            },
            type: {
                type: GraphQLString,
            },
        };
    }
});


const TopBumpCounts = new GraphQLObjectType({
    name: 'TopBumpCounts',
    description: 'Top Bump Count information for all four types. Currently, this is used by two queries: of-all-time and today.',
    fields: () => {
        return {
            results: {
                type: new GraphQLList(TopBumpCount),
            }
        };
    }
});


const SuggestionsResult = new GraphQLObjectType({
    name: 'SuggestionsResult',
    description: 'Suggestion Result information. This is the base object for handling the appearance of suggestions and their selection.',
    fields: () => {
        return {
            name: {
                type: GraphQLString,
            },
        };
    }
});
    
const Suggestions = new GraphQLObjectType({
    name: 'Suggestions',
    description: "Suggestions information. This is an object that wraps a list of objects and a string. The objects in the list are modified in the resolver from the list returned by the db and the string is the string that the suggestions are based on. This is returned so that it doesn't need to be stored as state.",
    fields: () => {
        return {
            results: {
                type: new GraphQLList(SuggestionsResult),
            }
        };
    }
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Standard graphql root query object.',
  fields () {
    return {
        hashtags: {
            type: new GraphQLList(Hashtag),
            args: {
                name: {
                    type: GraphQLString
                },
                yayCount: {
                    type: GraphQLInt
                },
                grrrCount: {
                    type: GraphQLInt
                },
                dunnoCount: {
                    type: GraphQLInt
                },
                mehCount: {
                    type: GraphQLInt
                }
            },
            resolve (root, args) {
                return dbConnection.models.hashtag.findAll({ where: args });
            }
        },
        hashtag: {
            type: Hashtag,
            args: {
                name: {
                    type: GraphQLString
                }
            },
            resolve (root, args) {
                return dbConnection.models.hashtag.findOne({ where: args });
            }
        },        
        topCountsOfAllTime: {
            type: TopBumpCounts,
            resolve (root, args) {

                // use backticks here -- ever though we're not interpolating -- so we don't have to escape the quotes
                // also, in this case, it's easier to use a raw query
                let topCountsOfAllTimeQueryString = `(select "name", "yayCount" as "count", 'yay' as "type" from hashtags order by "yayCount" desc limit 1) union \
                                                     (select "name", "grrrCount" as "count", 'grrr' as "type" from hashtags order by "grrrCount" desc limit 1)  union \
                                                     (select "name", "dunnoCount" as "count", 'dunno' as "type" from hashtags order by "dunnoCount" desc limit 1) union \
                                                     (select "name", "mehCount" as "count", 'meh' as "type" from hashtags order by "mehCount" desc limit 1);`;

                return dbConnection.query(
                    topCountsOfAllTimeQueryString,
                    {type: Sequelize.QueryTypes.SELECT}
                ).then((results) => {
                    const returnResults = {results: results};                    

                    return returnResults;
                });
            }
        },
        topCountsOfTheLastWeek: {
            type: TopBumpCounts,
            resolve (root, args) {

                // use backticks here -- ever though we're not interpolating -- so we don't have to escape the quotes
                // also, in this case, it's easier to use a raw query
                let topCountsOfTheLastWeekQueryString = `(select "name", "yayCount" as "count", 'yay' as "type" from hashtags where "updatedAt" >= now() - '1 day'::interval order by "yayCount" desc limit 1) union \
                                                         (select "name", "grrrCount" as "count", 'grrr' as "type" from hashtags where "updatedAt" >= now() - '1 day'::interval order by "grrrCount" desc limit 1) union \
                                                         (select "name", "dunnoCount" as "count", 'dunno' as "type" from hashtags where "updatedAt" >= now() - '1 day'::interval order by "dunnoCount" desc limit 1) union \
                                                         (select "name", "mehCount" as "count", 'meh' as "type" from hashtags where "updatedAt" >= now() - '1 day'::interval order by "mehCount" desc limit 1);`;

                return dbConnection.query(
                    topCountsOfTheLastWeekQueryString,
                    {type: Sequelize.QueryTypes.SELECT}
                ).then((results) => {
                    const returnResults = {results: results};                    

                    return returnResults;
                });
            }
        },
        suggestions: {
            type: Suggestions,
            args: {
                currentHashtag: {
                    type: GraphQLString
                },
                finalizedSelection: {
                    type: GraphQLBoolean
                }
            },
            resolve (root, args) {

                if(args.finalizedSelection) return [];

                const sanititizedSuggestionString = args.currentHashtag ? escape(args.currentHashtag) : "";

                if (sanititizedSuggestionString !== "") {

                    return dbConnection.models.hashtag.findAll(
                        {
                            attributes: ['name'],
                            order: ['name'],
                            limit: 10,
                            where: {
                                name: {[operator.iLike]: `${sanititizedSuggestionString}%`, }
                            },
                        }, ).then((rawResults) => {
                            
                            const results = {results: []};
                            
                            rawResults.map((result, i) => {
                                results.results[i] = {name:     result.dataValues.name};

                            });

                            return results;
                        });
                }
                else {
                    return [];
                }
            }
        }
    };
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Mutations to add and bump hashtags.',
  fields () {
    return {
      addHashtag: {
        type: Hashtag,
        args: {
          name: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve (source, args) {
          const sanitizedName = args.name ? escape(args.name) : "";
            
          return dbConnection.models.hashtag.create({
            name: sanitizedName
          });
        }
      },
      bumpHashtag: {
        type: Hashtag,
        args: {
          name: {
            type: new GraphQLNonNull(GraphQLString)
          },
          bump: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
          resolve (source, args) {
            const sanitizedName = args.name ? escape(args.name) : "";
              
            return dbConnection.models.hashtag.findOne({ where: {name: sanitizedName} }).then( hashtag => {
                    return hashtag.increment([`${args.bump}Count`], { by: 1 });
          });
        }
      }
    };
  }
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});


export default Schema;
