# GraphQL Demo

* [Start](start)
* [Express server](express-server)
* [Hapi server](hapi-server)

## Start
```
npm install
// express demo
npm run express-server
// hapi demo
npm run hapi-server
```

## Express server
- [see here](http://taobaofed.org/blog/2015/11/26/graphql-basics-server-implementation/)

## Hapi server

mutation { updateCount }
- [GET]`/graphql?query={count,rows{id,name}}`
- [GET]`/graphql?query=mutation { updateCount }`

- [POST]`/post-graphql`
```
// body
{count,rows{id,name}}
```
- [POST]`/post-graphql`
```
//body
mutation { updateCount }
```

- [GET]`/hapi-graphql?query={count,rows{id,name}}`
	- note: using `[hapi-grapqhl](https://github.com/SimonDegraeve/hapi-graphql)` package