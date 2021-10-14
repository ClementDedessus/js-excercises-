"use strict";
const { parse, serialize } = require("../utils/json");

const jsonDbPath = __dirname + "/../data/films.json";

class Films {
  constructor(dbPath = jsonDbPath, defaultItems = this.defaultFilms) {
    this.jsonDbPath = dbPath;
    this.defaultFilms = defaultItems;
  }

  getNextId() {
    const films = parse(this.jsonDbPath, this.defaultFilms);
    let nextId;
    if (films.length === 0) nextId = 1;
    else nextId = films[films.length - 1].id + 1;

    return nextId;
  }

  /**
   * Returns all films films
   * @returns {Array} Array of films
   */
  getAll() {
    const films = parse(this.jsonDbPath, this.defaultFilms);
    return films;
  }

  /**
   * Returns the film identified by id
   * @param {number} id - id of the film to find
   * @returns {object} the film found or undefined if the id does not lead to a film
   */
  getOne(id) {
    const films = parse(this.jsonDbPath, this.defaultFilms);
    const foundIndex = films.findIndex((film) => film.id == id);
    if (foundIndex < 0) return;

    return films[foundIndex];
  }

  /**
   * Add a film in the DB and returns the added film (containing a new id)
   * @param {object} body - it contains all required data to create a film
   * @returns {object} the film that was created (with id)
   */

  addOne(body) {
    const films = parse(this.jsonDbPath, this.defaultFilms);

    // add new film to the menu
    const newFilm = {
      id: this.getNextId(),
      title: body.title,
      duration: body.duration,
      budget: body.budget,
    };
    films.push(newFilm);
    serialize(this.jsonDbPath, films);
    return newFilm;
  }

  /**
   * Delete a film in the DB and return the deleted film
   * @param {number} id - id of the film to be deleted
   * @returns {object} the film that was deleted or undefined if the delete operation failed
   */
  deleteOne(id) {
    const films = parse(this.jsonDbPath, this.defaultFilms);
    const foundIndex = films.findIndex((film) => film.id == id);
    if (foundIndex < 0) return;
    const itemRemoved = films.splice(foundIndex, 1);
    serialize(this.jsonDbPath, films);

    return itemRemoved[0];
  }

  /**
   * Update a film in the DB and return the updated film
   * @param {number} id - id of the film to be updated
   * @param {object} body - it contains all the data to be updated
   * @returns {object} the updated film or undefined if the update operation failed
   */
  updateOne(id, body) {
    const films = parse(this.jsonDbPath, this.defaultFilms);
    const foundIndex = films.findIndex((film) => film.id == id);
    if (foundIndex < 0) return;
    // create a new object based on the existing film - prior to modification -
    // and the properties requested to be updated (those in the body of the request)
    // use of the spread operator to create a shallow copy and repl
    const updatedFilm = { ...films[foundIndex], ...body };
    // replace the film found at index : (or use splice)
    films[foundIndex] = updatedFilm;

    serialize(this.jsonDbPath, films);
    return updatedFilm;
  }
}

module.exports = { Films };
