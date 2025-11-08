function canPost(message) {
  return message.length <= 40 ? "short post" : (
    message.length <= 80 ? "long post" : "invalid post");
}

console.log(canPost("Hello world"))

//prepare char length equals to 40
let message1 = "This message is exactly forty chars!!!@!"; // 40 characters
console.log(canPost(message1)); // should return "long post"

//prepare char length equals to 80
let message2 = "Message is exactly eighty characters long, which is quite a bit more than forty!"; // 80 characters
console.log(canPost(message2)); // should return "invalid post"

console.log(canPost("This message is too long to fit into either of the character limits for a social media post.")) // should return "invalid post"