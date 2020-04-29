const { gql } = require("apollo-server-express");

const schema = gql`
    
    type User{
        firstName: String!
        lastName: String!
    }

    type Query{
        getUserData: User!
    }
`

module.exports = schema