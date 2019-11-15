const { gql } = require("apollo-server");

const typeDefs = gql`
  type ImagePost {
    id: ID!
    url: String!
    poster_name: String!
    description: String
    user_posted: Boolean!
    binned: Boolean!
  }

  type Query {
    unsplashImages(pageNum: Int): [ImagePost]
    likedImages: [ImagePost]
    userPostedImages: [ImagePost]
  }

  type Mutation {
    uploadImage(url: String!, description: String, author: String): ImagePost
    updateImage(url: String, description: String, binned: Boolean): ImagePost
    deleteImage(id: ID!): ImagePost
  }
`;

module.exports = { typeDefs };