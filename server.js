const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const randomstring = require('randomstring');

const app = express();
const port = process.env.PORT || 9000;
const data = require('./databes_data.js');
const db = require('./mongodb.js');

app.use(bodyParser.json());
app.use(express.static('./dist'));

app.post('/authentication', (req, res) => {
  console.log('/auth');
  db.Users.findOne({ email: req.body.email, password: req.body.password }, (err, user) => {
    if (user) res.json(200, user);
    else res.send(403);
  });
});

app.post('/events', (req, res) => {
  console.log('/events');
  db.Events.find({}, (err, events) => {
    if (events) res.json(200, events);
    else res.send(403);
  });
});

app.post('/events/:id', (req, res) => {
  console.log('/events/id');
  db.Events.findOne({ id: req.body.eventId }, (err, event) => {
    if (event) res.json(200, event);
    else res.send(403);
  });
});

app.post('/add', (req, res) => {
  console.log('/add');
  const currentdate = new Date();
  const datenow = `${currentdate.getFullYear()}-${(`0${currentdate.getMonth()}`).slice(-2)
    }-${(`0${currentdate.getDate()}`).slice(-2)}T${(`0${currentdate.getHours()}`).slice(-2)
    }:${(`0${currentdate.getMinutes()}`).slice(-2)}:${(`0${currentdate.getSeconds()}`).slice(-2)}Z`;
  const id = randomstring.generate(24);

  const temp = new db.Events({
    updatedAt: datenow,
    createdAt: datenow,
    title: req.body.title,
    description: req.body.description,
    startsAt: req.body.startsAt,
    capacity: req.body.capacity,
    owner: req.body.owner,
    attendees: [],
    id,
  });
  temp.save((err, event) => {
    if (err) res.send(403);
    else res.json(200, event);
  });
});

app.post('/edit/:id', (req, res) => {
  console.log('/edit');
  db.Events.findOneAndUpdate({ id: req.body.id }, {
    $set: {
      title: req.body.title,
      description: req.body.description,
      startsAt: req.body.startsAt,
      capacity: req.body.capacity,
    },
  }, (err) => {
    if (err) {
      console.log('nista'); res.send(403);
    } else { console.log(('proslo', event)); res.send(200); }
  });
});

app.post('/attendevent', (req, res) => {
  console.log('/attend+event+action');
  db.Events.findOneAndUpdate({ id: req.body.eventId }, {
    $push: {
      attendees: req.body.user,
    },
  }, (err) => {
    if (err) res.send(403);
    else res.send(200);
  });
});

app.post('/unattendevent', (req, res) => {
  console.log('/unattendevent');
  db.Events.findOneAndUpdate({ id: req.body.eventId }, {
    $pull: {
      attendees: {
        id: req.body.userId,
      },
    },
  }, (err) => {
    if (err) res.send(403);
    else res.send(200);
  });
});

app.post('/deletevent', (req, res) => {
  console.log('/deletevent');
  db.Events.findOneAndRemove({ id: req.body.eventId }, (err) => {
    if (err) { res.send(403); console.log('nis'); } else { res.send(200); console.log('proslo'); }
  });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

app.listen(port, () => {
  console.log('Server is on port', port);
});

