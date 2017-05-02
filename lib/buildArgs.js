const graphql = require('graphql')

module.exports = (args) => {
  let defaultArgs = {
    id: {
      type: graphql.GraphQLInt
    },
    limit: {
      type: graphql.GraphQLInt
    },
    offset: {
      type: graphql.GraphQLInt
    }
  }

  return Object.assign(defaultArgs, args)
}
