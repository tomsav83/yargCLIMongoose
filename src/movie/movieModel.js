// contains model for movie
// build structure for what will be added

const mongoose = require('mongoose');

// next create new model using a schema. A schema is an object that gives you the requirements of a model - convention for schema is model name in lowercase, then Schema in capital S (movieSchema)

// mongoose schema's are class objects so the "new" keyword has to be used, then Schema with capital S because it is a class object. mongoose.Schema accepts a definition which is typically an object so ({}). Within ({}) is where to define the structure of the model

const movieSchema = new mongoose.Schema({
  title: {
    // can define multiple requirements here
    type: String, // has to be string
    unique: true, // limits the data to only be added once (ie can't add same movie twice)
    required: true, // title has to be included to add to the movie db, so it is then searchable
  },
  actor: {
    type: String,
    default: 'Not Specified',
  },
  genre: {
    type: String,
    default: 'Not Specified',
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    default: 5,
  },
});

// because mongoose models are class objects the naming convention needs to have a capital first letter

// within the (), needs to have the collection name which will automatically be pluralised in db, then pass the schema name

const Movie = mongoose.model('Movie', movieSchema);

// then export the Movie model

module.exports = Movie;

// thats everything required for movieModel.js file
