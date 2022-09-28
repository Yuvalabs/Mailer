const express = require('express');
const app = express();

var nodemailer = require('nodemailer');
const puppeteer = require('puppeteer');


const port = process.env.PORT || 8080;

// routes will go here  -   api/users?id=4&token=sdfa3&geo=us




app.get('/api/users', function(req, res) {


    const user_id = req.query.id;
    const token = req.query.token;
    const geo = req.query.geo;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'campadvisor2022@gmail.com',
          pass: 'sicrfaoypesmrsck'
        }
      });
      
      var mailOptions = {
        from: 'campadvisor2022@gmail.com',
        to: 'yuvalabs@gmail.com',
        subject: 'New Camp Site',
        text: user_id
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          
        }
      });
/*
    res.send({
      'user_id': user_id,
      'token': token,
      'geo': geo
    });
*/
    res.redirect("https://www.yuvalabs.in/")

   

  });

 


app.listen(port);
console.log('Server started at http://localhost:' + port);