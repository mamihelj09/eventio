const data = require('./private_data');
const mongoose = require('mongoose');

const userSchema = {
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  id: String,
  autorization: String,
};

const eventsSchema = {
  updatedAt: String,
  createdAt: String,
  title: String,
  description: String,
  startsAt: String,
  capacity: String,
  owner: {
    firstName: String,
    lastName: String,
    email: String,
    id: String,
  },
  attendees: [],
  id: String,
};

const Users = mongoose.model('users', userSchema);
const Events = mongoose.model('events', eventsSchema);

mongoose.Promise = global.Promise;
mongoose.connect(data.MONGO_URL, (err) => {
  if (err) console.log(err);
  else console.log('Mongodb connected successfully!\n');
});

module.exports = { Users, Events };
