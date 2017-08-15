import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';

import Db from './db';
import sequelize from 'sequelize';

const Hashtag = new GraphQLObjectType({
  name: 'Hashtag',
  description: 'This represents a Hashtag',
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

const TopCount = new GraphQLObjectType({
  name: 'TopCount',
  description: 'This represents a TopCount.',
  fields: () => {
    return {
      name: {
        type: GraphQLString,
        resolve (topcount) {
          return topcount.name;
        }
      },
      count: {
        type: GraphQLInt,
        resolve (topcount) {
          return topcount.count;
        }
      }
    };
  }
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query object',
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
                return Db.models.hashtag.findAll({ where: args });
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
                return Db.models.hashtag.findOne({ where: args });
            }
        },        
        topCount: {
            type: TopCount,
            args: {
                bump: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                topCountType: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve (root, args) {
                let topCountQueryString = `select "name", "${args.bump}Count" as "count" from hashtags order by "${args.bump}Count" desc LIMIT 1;`;

                if (args.topCountType == "today") {
                    topCountQueryString = `select "name", "${args.bump}Count" as "count" from hashtags where "updatedAt" >= now() - '1 day'::interval order by "${args.bump}Count" desc LIMIT 1;`;
                }
                return Db.query(
                    topCountQueryString,
                    {type: sequelize.QueryTypes.SELECT}
                ).spread((results) => {
                    return results;
                });
            }
        },
        suggestions: {
            type: new GraphQLList(GraphQLString),
            args: {
                partialHashtag: {
                    type: GraphQLString
                }
            },
            resolve (root, args) {
                const suggestionsUrl = `http://localhost:8983/solr/hashbump/suggest?suggest=true&suggest.dictionary=analyzedSuggestion&wt=json&suggest.q=${args.partialHashtag}`;
                const suggestions = fetch(suggestionsUrl).then(res => res.text());

                return [suggestions];
            }
        }
    };
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Functions to set stuff',
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
          return Db.models.hashtag.create({
            name: args.name
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
            return Db.models.hashtag.findOne({ where: {name: args.name} }).then( hashtag => {
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
