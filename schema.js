const graphql = require('graphql');
const buildArgs = require('./utils/buildArgs');
const data = [
	{id: 1, name: 'cat'},
	{id: 2, name: 'dog'},
	{id: 3, name: 'pig'}
]

let count = 10;

const schema = new graphql.GraphQLSchema({
	query: new graphql.GraphQLObjectType({
		name: 'RootQueryTyep',
		fields: {
			count: {
				type: graphql.GraphQLInt,
				description: 'I am counter.',
				resolve: () => {
					return count;
				}
			},
			rows: {
				type: new graphql.GraphQLList(new graphql.GraphQLObjectType({
					name: 'data',
					description: 'data information',
					fields: {
						id: {
							type: graphql.GraphQLInt
						},
						name: {
							type: graphql.GraphQLString
						}
					}
				})),
				args: buildArgs(),
				resolve: (_, args) => {
					const id = args.id;
					const limit = args.limit || 10;
					const offset = args.offset || 0;
					const filteredData = id ? data.filter((el) => {return el.id === id;}) : data;

					return filteredData.slice(offset, limit + offset);
				}
			}
		}
	}),
	mutation: new graphql.GraphQLObjectType({
		name: 'RootMutationType',
		fields: {
			updateCount: {
				type: graphql.GraphQLInt,
				description: 'I am a update info.',
				resolve: () => {
					count += 1;
					return count;
				}
			}
		}
	})
});

module.exports = schema;