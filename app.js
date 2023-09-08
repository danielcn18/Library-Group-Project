const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("./public"));
app.use(express.static("./views"));

app.set('view engine', 'ejs');
app.set('views', './views');

let books = require('./data/book.json');

app.get('/', (req, res) => {
    res.render('index', { books } );
});

app.get('/info/:id', (req, res) => {
    const bookId = req.params.id;
    const book = books.find(book => book.id == bookId);
    if(book) res.render('bookinfo', { book });
    else res.status(404).json({ message: 'Book not found' });
});

app.all('*', (req, res) => {
    res.status(404).send("404, not found");
});

app.listen(port, () => {
    console.log("Server Running at port", port);
});

// Notes:
// Add Search Bar
// Add read more read less feature (and re-add description to main page)