const express = require('express');
const { buildSchema } = require('graphql');

const { createHandler } = require('graphql-http/lib/use/express') 

const schema = buildSchema(`
    type Query {
        products: [Product]
        orders: [Order]

    }
    type Product {
        id: ID!
        description: String!
        reviews: [Review]
        price: Float!
    }
    type Review {
        rating: Int!
        comment: String
    }
    tye Order {
        date: String!
        subtotal: Float!
        items: [OrderItem]
    }

    type OrderItem {
        product: Product!
        quantity: Int!
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
    graphiql: true,
}))

app.listen(3000, ()=> {
    console.log('runnin graphql server...')
} );