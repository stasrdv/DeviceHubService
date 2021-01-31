

import { isDeviceAvailable, isDeviceBounded } from '../store/devices-store';
import { RouteHandler } from '../utils/types';

export const wrapAsyncAndSend = (fn: RouteHandler<Promise<any>>): RouteHandler => {
  const handler: RouteHandler = (req, res, next) => {
    if (!res) throw new Error('Error??');
    fn(req, res, next)
      .then(result => res.send(result))
      .catch(next);
  };

  return handler;
}


export const deviceBindHandler = (fn: RouteHandler<Promise<any>>): RouteHandler => {
  const handler: RouteHandler = (req, res, next) => {
    const deviceName = req.body.deviceName;
    if (isDeviceBounded(deviceName)) {
      res.status(403);
      res.send('Device already registered');
    }
    else {
      if (isDeviceAvailable(deviceName)) {
        fn(req, res, next)
          .then(result => res.send(result))
          .catch(next);
      }
      else {
        res.status(404);
        res.send('Device not found');
      }

    }

  };

  return handler;
}


