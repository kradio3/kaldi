/* eslint-disable */

// // optionally configure local env vars
// require('dotenv').config()

// // details in https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget
const fetch = require('node-fetch')
//var { EMAIL_TOKEN } = process.env

const url ="https://api.netlify.com/build_hooks/5e510f7e3832e007a08c6563";

exports.handler = async (event, context) => {
  try{
    await fetch(url, {method: 'POST'});
    return {statusCode: 200, body: JSON.stringify(context)};
  }catch(err){
    console.log(err);
    return {statusCode: 500, body: JSON.stringify({msg: err.message})};
  }
}
