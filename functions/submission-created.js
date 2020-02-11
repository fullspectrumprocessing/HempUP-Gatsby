require("dotenv").config()
const fetch = require("node-fetch")
const { GATSBY_BUTTONWOOD_KEY } = process.env
exports.handler = async event => {
  const email = JSON.parse(event.body).payload.email
  const formName = JSON.parse(event.body).payload.form_name
  console.log(`Recieved a submission: ${email}`)
  console.log(`FORM NAME IS: ${formName}`)
  if (formName == "subscribe") {
    return fetch("https://api.buttondown.email/v1/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Token ${GATSBY_BUTTONWOOD_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    })
      .then(response => {
        response.json()
        console.log(response, "response")
      })
      .then(data => {
        const datar = JSON.stringify(data)
        console.log(`Submitted to Buttondown:\n ${datar}`)
      })
      .catch(error => ({ statusCode: 422, body: String(error) }))
  } else {
    console.log("IF STATEMENT NOT WOKRING")
    console.log("PAYLOAD", payload)
  }
}
