const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    # Define your queries here
  }

  type Mutation {
    # Define your mutations here
  }

  type User {
    # Define the fields for the User type here
  }

  type Post {
    # Define the fields for the Post type here
  }
  
  # Define any other custom types here

  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = typeDefs;
