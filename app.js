const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https")

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address : email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }

    const request = JSON.stringify(data);

    const url = ""

    https.request(url, options, function(response) {
        response.on()
    })
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});

//API Key MailChimp
//9f55264263813729f91a9c629d7c6d89-us12
//Audience Id - d099a2f2ca