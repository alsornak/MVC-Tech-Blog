const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Beautiful Picnic",
    "postContent": "There are many beautiful places",
    "userId": 1
  },
  {
    "postTitle": "Mountain",
    "postContent": "There are mountaineous area",
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