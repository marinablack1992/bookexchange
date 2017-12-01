module.exports = {
    addBook: (req, res, next) => {
        const db = req.app.get('db');
        const {title, author, img, description} = req.body;
        db.post_book([title, author, img, description])
        .then((data) => res.status(200).send(console.log('Book added to the database!')))
        .catch((err) => res.status(500).send([]))
    },

    getBooks: (req, res, next) => {
        const db = req.app.get('db');
        db.get_books()
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(500).send(console.log(err), []))
    }
}