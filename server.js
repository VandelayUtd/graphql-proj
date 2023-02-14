const express = require('express');
const { buildSchema } = require('graphql');

const { createHandler } = require('graphql-http/lib/use/express') 

const schema = buildSchema(`
    type Query {
        description: String
        price: Float
    }
`)

const root = {
    description: 'red shoe',
    price: 42.12,
}

const app = express();

app.use('/graphql', createHandler({
    schema: schema,
    rootValue: root,
}))

app.listen(3000, ()=> {
    console.log('runnin graphql server...')
} );