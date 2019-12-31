const myURI ='postgres://rkvnsgew:pOuuTEaomeUm5Vu0sC4LRS5KFWA68UlT@rajje.db.elephantsql.com:5432/rkvnsgew'
const URI = process.env.PG_URI || myURI;
const {Pool} = require('pg')

const pool = new Pool({
  connectionString: URI
}) 

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};