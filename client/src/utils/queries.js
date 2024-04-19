import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
    query getProducts($category: ID) {
        products(category: $category) {
            _id
            name
            description
            price
            quantity
            category {
                name
            }
        }
    }
`;

export const QUERY_CHECKOUT = gql`
    query getCheckout($products: [ProductInput]!) {
        checkout(products: $products) {
            session
        }
    }
`;


export const QUERY_ALL_PRODUCTS = gql`
    query {
        products {
            _id
            name
            description
            price
            quantity
            category {
                name
            }
        }
    }
`;

export const QUERY_CATEGORIES = gql`
    query {
        categories {
            _id
            name
        }
    }
`;

export const QUERY_USER = gql`
    {
        user {
            username
            orders {
                _id
                purchaseDate
                products {
                    _id
                    name
                    description
                    price
                    quantity
                    image
                }
            }
        }
    }
`;

