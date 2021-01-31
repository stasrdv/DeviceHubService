import express from 'express';
import cors from 'cors';
import * as bodyParser from "body-parser";
import { deviceHubRouter } from './routes/device-hub-routes';
import { requestLog } from './middleware/request-log';
import { clientErrorHandler, errorHandler, logErrors } from './middleware/errors';
import winston from 'winston';
import expressWinston, { ErrorLoggerOptions } from 'express-winston';
import {loggerOptions} from './utils/winston'




const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({'extended':true})); 
app.use(bodyParser.json()); 
app.use(requestLog);
app.use(expressWinston.logger(loggerOptions()));
app.use(expressWinston.errorLogger(loggerOptions()));
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);
app.use('/api', deviceHubRouter);

export { app };
