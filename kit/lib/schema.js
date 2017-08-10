import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';

import Db from './db';
//import fetch from 'node-fetch';


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
        suggestions: {
            type: new GraphQLList(GraphQLString),
            args: {
                partialHashtag: {
                    type: GraphQLString
                }
            },
            resolve (root, args) {
                // !!!!!!
                // ugly kludge: fix this so it has a proper type defined
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

                if (!hashtag) {
                    Db.models.hashtag.create({name: args.name})
                        .then(hashtag => {
                            return hashtag.increment([`${args.bump}Count`], { by: 1 })
                        });
                }
                else {
                    return hashtag.increment([`${args.bump}Count`], { by: 1 });
                }
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
