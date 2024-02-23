const typeDefs = `
type Mutation {
  # Define your mutations here
  addUser(username: String!, email: String!, password: String!): Auth
  addOrder(products: [ID]!): Order
  updateUser(username: String, email: String, password: String): User
  updateProduct(_id: ID!, quantity: Int!): Product
  login(username: String!, password: String!): Auth 
}

type Query {
    # Define your queries here
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ProductInput]): Checkout
  }


  type User {
    # Define the fields for the User type here
    _id: ID
    username: String
    email: String
    orders: [Order]
  }

  type Checkout {
    # Define the fields for the checkout type here
    session: ID
  }
  
  type Auth {
    # Define the fields for the Auth type here
    token: ID
    user: User
  }

  input ProductInput {
    _id: ID
    purchaseQuantity: Int
    name: String
    price: Float
    image: String
    quantity: Int
  }


  type Order {
    # Define the fields for the Order type here
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Category {
    # Define the fields for the Category type here
    _id: ID
    name: String
  }

  type Product {
    # Define the fields for the Product type here
    _id: ID
    name: String
    description: String
    image: String
    category: Category
    price: Float
    quantity: Int
  }
`;

module.exports = typeDefs;
