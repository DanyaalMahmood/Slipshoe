import express from 'express';
import shoesRouter from './routes/shoes';

const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use('/static', express.static('static'))

app.use('/shoe', shoesRouter);



app.get('/', async (req, res) => {
    console.log('/ endpoint hit');
    return res.send("<h1>Sliphose backend is up and running.</h1>");
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});