const Twit = require("twit");
const imessage = require("osa-imessage");

const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,

  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,

  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

const users = ["141341662"];

const stream = T.stream("statuses/filter", { follow: users });

stream.on("tweet", function(tweet) {
  if (users.indexOf(tweet.user.id_str) > -1) {
    console.log("this is working");
    // First, we check and see if it's a 'top level tweet' by the user. We don't want replies. Replies will be support replies to customers, and not tweets containing codes.
    if (
      tweet.in_reply_to_status_id === null &&
      tweet.in_reply_to_status_id_str === null
    ) {
      //
      const entireTweet = tweet.text;

      console.log(
        "ENTIRE TWEET IGNORE ENTIRE TWEET IGNORE ENTIRE TWEET IGNORE",
        entireTweet
      );

      const tweetWords = entireTweet.split(" ");

      tweetWords.forEach(word => {
        if (word === word.toUpperCase()) {
          //
          const capsWord = word;
          // imessage.send("888222", capsWord);
          console.log("=====>", capsWord, "<====");

          if (capsWord.includes("FREE")) {
            const megaWord = capsWord;
            console.log("mega word", megaWord);

            imessage.send("+18014728873", megaWord);
            // imessage.send("+17033384145", megaWord); // my personal phone number used for testing and debugging.
          }
        } else {
          console.log("NOT CAPITAL NOT CAPITAL NOT CAPITAL ", word);
        }

        // imessage.send("888222", word);
      });
    } else {
      console.log(" NOT WANTED NOT WANTED NOT WANTED", tweet.text);
    }
  }
});

// Things to do: Parse tweets. Make every word(phrase) it's own individual string in an array
// Map over array with different combinations
// If in all caps, save as test1
// if alphanumeric, save as test2
// etc. if it seems like a promo code to text, checks for
// if so, map over array and send each one via text individually
// want to reduce texts as much as possible
// if the word is "cancel" or "stop", don't send
