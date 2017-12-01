module.exports = {
    addBook: (req, res, next) => {
        const db = req.app.get('db');
        const { title, author, img, description, genre } = req.body;
        db.post_book([title, author, img, description, genre])
            .then((data) => res.status(200).send(console.log('Book added to the database!')))
            .catch((err) => res.status(500).send([]))
    },

    getBooks: (req, res, next) => {
        const db = req.app.get('db');
        db.get_books()
            .then((data) => res.status(200).send(data))
            .catch((err) => res.status(500).send(console.log(err), []))
    },

    getBook: (req, res, next) => {
        const db = req.app.get('db');
        const { id } = req.params
        db.get_book([id])
            .then((data) => res.status(200).send(data))
            .catch((err) => res.status(500).send(console.log(err), []))
    },

    deleteBook: (req, res, next) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.delete_book([id])
            .then((data) => res.status(200).send(console.log('Book was successfully deleted from the database.')))
            .catch(err => res.status(500).send(err))
    },

    addToCart: (req, res, next) => {
        const db = req.app.get('db');
        const { bookid, userid } = req.params;
        db.add_to_cart([bookid, userid])
            .then(data => res.status(200).send('Book was added to cart.'))
            .catch(err => res.status(500).send(console.log(err)))
    },

    updateStock: (req, res, next) => {
        const db = req.app.get('db');
        const { bookid } = req.params;
        db.update_stock([bookid])
            .then(data => res.status(200).send('Updated stock'))
            .catch(err => res.status(500).send(console.log(err)))
    },

    getUserCart: (req, res, next) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.get_user_cart([id])
            .then(data => res.status(200).send(data))
            .catch(err => res.status(500).send(err))
    },

    deleteFromCart: (req, res, next) => {
        const db = req.app.get('db');
        const { userid, bookid } = req.params;
        db.delete_from_cart([userid, bookid])
            .then(data => res.status(200).send(data))
            .catch(err => res.status(500).send(err))
    },

    updateBook: (req, res, next) => {
        const db = req.app.get('db');
        const { title, author, img, description, genre } = req.body;
        const { id } = req.params
        db.update_book([title, author, img, description, genre, id])
            .then(data => res.status(200).send(data))
            .catch(err => res.status(500).send(err))
    }
}