'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {sequelize} from './models';
// import config from './config.config'
const { sequelize } = require('./models');
const config = require('./config/config');

const app = (0, _express2.default)();
// const {sequelize} = require('./models')

app.use((0, _morgan2.default)('combined'));
app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());

// import './routes' (app)

sequelize.sync().then(() => {
   app.listen(config.port);
   console.log(`Server started on port ${config.port}`);
});
//# sourceMappingURL=app.js.map