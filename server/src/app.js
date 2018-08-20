import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.send({
        message: "hellow world"
    })
})

app.listen(process.env.PORT || 8081);


