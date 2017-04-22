module.exports = (function() {
  "use strict";

  const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/test');

  const Cat = mongoose.model(
    'Cat',
    {
      name: String,
      remove: String,   // <-- using 'remove' as a schema property name causes the error.
    }
  );

  const kitty = new Cat({ name: 'Zildjian' });
  kitty.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('meow');
    }
  });
}());
