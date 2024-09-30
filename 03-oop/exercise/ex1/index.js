const Post = require("./Post");
const Author = require("./Author");
const Comment = require("./Comment");

const dudu = new Author('Eduardo Marques');

const post = dudu.createPost('JavaScript', 'Linguagem utilizada para desenvolvimento web');

post.addComment('hater', 'Eu gosto de JS');

console.log(dudu);
console.log(post);