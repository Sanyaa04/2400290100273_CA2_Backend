const router = express.Router();
const bookController = require('../controller/bookcontroller');    

router.post('/api/books', bookController.addBook);
router.get('/api/books', bookController.getBooks);
router.put('/api/books/:id', bookController.updateBook);

module.exports = router;
