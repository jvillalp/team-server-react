const express = require("express");

const server = express();
server.use(express.json());

let books = [
    {
    id: 1,
    title:'sea of strangers',
    year: 2018
    },
    {
        id:2,
        title:'law of attraction',
        year: 2010
    },
    {
        id:3,
        title:'harry potter',
        year: 2008
    }
]
server.get('/api/books', (req, res) => {
    res.status(200).json(books)
})
const PORT = 5001;

server.listen(PORT, () => 
console.log(`\n server is listening on ${PORT}\n`));
 