import winston from 'winston';
import * as Transport from 'winston-transport'
import { APP_URL, APP_PORT, LOGGING_PATH } from '../constants';
import { NextFunction } from 'connect';

interface Request extends Express.Request {
  method?: string,
  hostname?: string,
  port?: number,
  originalUrl?: string
}

// setup logging
const consoleLog = new winston.transports.Console()
const remoteLog = new winston.transports.Http({
  host: APP_URL,
  port: APP_PORT,
  path: LOGGING_PATH
})

const createRequestLogger = (transports: Transport[]) => {
  const requestLogger = winston.createLogger({
    format: getRequestLogFormatter(),
    transports: transports
  });

  return function logRequest(req: Request, res: Express.Response, next: NextFunction): any {
    const message = `${req.method}: ${req.hostname}${req.port || ''}${req.originalUrl}`
    requestLogger.info(message);
    next();
  }
}

const createErrorLogger = (transports: Transport[]) => {
  const errLogger = winston.createLogger({
    level: 'error',
    transports: transports
  })

  return function logError(err: Error, req: Express.Request, res: Express.Response, next: NextFunction): any {
    errLogger.error({ err, req, res })
    next()
  }
}

function getRequestLogFormatter() {
  const { combine, timestamp, printf } = winston.format;

  return combine(
    timestamp(),
    printf(info => {
      return `${info.timestamp} ${info.level}: ${info.message}`;
    })
  );
}

export const requestLogger = createRequestLogger([consoleLog]);
export const errorLogger = createErrorLogger([remoteLog, consoleLog]);
