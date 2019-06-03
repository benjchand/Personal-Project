// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: `${process.env.TEST_MSG}` + `s are the goal`,
    from: "+17034205466",
    to: "+17033384145"
  })
  .then(message => console.log(message.sid));
