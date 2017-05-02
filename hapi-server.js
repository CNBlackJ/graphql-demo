const Hapi = require('hapi');
const GraphQL = require('hapi-graphql');
const graphql = require('graphql');
const schema = require('./schema');

const server = new Hapi.Server();
server.connection({
	port: 3000
});

server.route([
  {
    method: 'GET',
    path: '/graphql',
    handler: (request, reply) => {
      graphql.graphql(schema, request.query.query).then((result) => {
        reply(result);
      })
    }
  },
  {
    method: 'POST',
    path: '/post-graphql',
    handler: (request, reply) => {
      graphql.graphql(schema, request.payload).then((result) => {
        reply(result);
      })
    }
  }])

// using hapi-graphql package
server.register({
  register: GraphQL,
  options: {
    query: {
      schema: schema
    }, 
    route: {
      path: '/hapi-graphql',
      config: {}
    }
  }
}, () =>
  server.start(() =>
    console.log('Server running at:', server.info.uri)
  )
);