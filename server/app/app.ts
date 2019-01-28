const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');
const movies = require('./movie.mock-data');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


const router = express.Router();
// match routes
router.get('/movies', (req, res) => res.json(movies));

// set default URL
app.use('/api', router);


app.listen(port, () => console.log(`Listening on port ${port}`));