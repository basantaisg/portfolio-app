const express = require('express');
const app = express();

// basic portfolio app....

app.get('/', (req, res) => {
  res.json({
    message: 'This is home page | Welcome I am basanta Parajuli a web dev.',
  });
});

app.get('/about', (req, res) => {
  res.json(
    {
      about: 'I am Basanta Parajuli... A website developer from Nepal',
    },
    {
      skill:
        'I have expertise in Javascript, Node/Express JS, MongoDB and ReactJS',
    },
    {
      experience: 'I am developer since 2021',
    }
  );
});

app.get('/contact', (req, res) => {
  res.json({
    contact: '+977 9766889672 | basantaparajuli.11@gmail.com | IG: @basantaisg',
  });
});

app.get('/services', (req, res) => {
  res.json(
    {
      websitedesign: 'I can design your website as per your need.',
    },
    {
      job: 'Hire me today and make me your best company asset',
    }
  );
});

app.listen(3000);
