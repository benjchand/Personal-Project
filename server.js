const http = require("http");
const express = require("express");
const twitter = require("./twitter/twitter");
const server = express();

server.post("/sms", (req, res) => {});

module.exports = server;
