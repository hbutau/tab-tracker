import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
// import {sequelize} from './models';
// import config from './config.config'
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express();
// const {sequelize} = require('./models')

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors())

// import './routes' (app)

sequelize.sync()
    .then(() => {
	app.listen(config.port);
	console.log(`Server started on port ${config.port}`)
    })
