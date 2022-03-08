const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Why MVC is so important",
    "postContent": "MVC allows developers to maintain a true separation of concerns, devising their code between many layers.",
    "userId": 1
  },
  {
    "postTitle": "ORM",
    "postContent": "It really simplifies the queries in SQL.",
    "userId": 2
  },
  {
    "postTitle": "Song",
    "postContent": "This is very musical, pleasant!",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;