// app.js will contain fundimental logic but first need to import dependencies (all dependencies will be run before any further code)
// connection.js will establish and maintain connection and run in background as it is an async function (it will not close connection)

require('./db/connection');
const mongoose = require('mongoose');
const yargs = require('yargs');
const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
} = require('./movie/movieFunctions'); // addMovie needs to be in {}'s
const Movie = require('./movie/movieModel');

// args function will determine logic for application

const app = async (args) => {
  try {
    // if/else statement to check if add condition is met
    if (args.add) {
      const movieObj = {
        title: args.title,
        actor: args.actor,
        genre: args.genre,
        rating: args.rating,
        // run add movie functionality, passing a movieObj
      };
      await addMovie(movieObj); // to await addMovie before disconnecting from db
      mongoose.disconnect();
    } else if (args.listMovies) {
      await listMovies();
      // listMovies function, not passing any information
      mongoose.disconnect();
    } else if (args.update) {
      await updateMovie(args.update, args.filter);
      // run update function, filtering by the data in the update object
      mongoose.disconnect();
    } else if (args.deleteMovie) {
      const movieObj = {
        title: args.title,
      };
      await deleteMovie(movieObj);
    } else {
      console.log('You have typed incorrect command.');
      mongoose.disconnect();
    }
  } catch (error) {
    console.log(error);
    mongoose.disconnect();
  }
};
app(yargs.argv);
