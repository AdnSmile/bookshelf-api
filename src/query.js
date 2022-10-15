const books = require('./books');

const nameQuery = (request, h) => {
  const query = request.query;

  console.log(query);
}

module.exports = {
  nameQuery
};