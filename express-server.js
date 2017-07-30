const express = require('express');
const graphql = require('graphql');
const bodyParser = require('body-parser');
const schema = require('./schema');

const app = express();
const PORT = 3001;

app.use(bodyParser.text({ type: 'application/graphql' }));

app.post('/graphql', (req, res) => {
	graphql.graphql(schema, req.body).then((result) => {
		res.send(JSON.stringify(result, null, 2));
	})
});

const server = app.listen(PORT, () => {
	const host = server.address().address;
	const port = server.address().port;
	console.log(`GraphQL listening at http://${host}:${port}`);
});
