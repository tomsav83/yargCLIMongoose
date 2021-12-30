// contains CRUD (and any other) fuctions that affect said movie
// first of all pull in Movie from movieModel.js

const Movie = require('./movieModel'); // will only affect Movie collection
const mongoose = require('mongoose'); // to close connection

// exports syntax as creating and exporting all fuctions associated with Movie collection
// movieObj has to be referenced in params so when addMovie is called in app.js some sort of object which contains a movie

exports.addMovie = async (movieObj) => {
  try {
    // this is where code for addMovie goes to add it to db, providing it conforms to the Movie model. create newMovie const and assign it to new Movie(movieObj) using "new" keyword
    const newMovie = new Movie(movieObj);
    console.log(`Successfully added ${movieObj.title}`);
    await newMovie.save(); // to save in db
    mongoose.disconnect(); // disconnect method, connection closes, application finishes running
  } catch (error) {
    console.log(error);
    mongoose.disconnect();
  }
};

exports.listMovies = async () => {
  try {
    const listOfMovies = await Movie.find();
    console.log(`This is the list of movies in the database: ${listOfMovies}`);
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
    mongoose.disconnect();
  }
};

exports.updateMovie = async (updateObj, filterObj) => {
  try {
    const updateRecord = await Movie.updateMany(filterObj, updateObj);
    console.log(`Successfully updated object`);
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
    mongoose.disconnect();
  }
};

exports.deleteMovie = async (movieObj) => {
  try {
    await Movie.deleteOne(movieObj);
    console.log(`${movieObj.title} has been deleted from the Movie database`);
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
    mongoose.disconnect();
  }
};
