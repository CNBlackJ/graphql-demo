const koa = require('koa'); // koa@2 
const koaRouter = require('koa-router'); // koa-router@next 
const koaBody = require('koa-bodyparser'); // koa-bodyparser@next 
const graphqlKoa = require('graphql-server-koa').graphqlKoa;
 
const app = new koa();
const router = new koaRouter();
const PORT = 3000;

const myGraphQLSchema = require('./sche')
 
// koaBody is needed just for POST. 
app.use(koaBody());
 
router.post('/graphql', graphqlKoa({ schema: myGraphQLSchema }));
router.get('/graphql', graphqlKoa({ schema: myGraphQLSchema }));
 
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);