const graphql = require('graphql');

let count = 0;

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