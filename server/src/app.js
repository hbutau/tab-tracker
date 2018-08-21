import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors'

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors())

app.post('/register', (req, res) => {
    return res.send({
        message: `Hello ${req.body.email} your user was registerd! Have fun.`
    })
})

app.listen(process.env.PORT || 8081);


