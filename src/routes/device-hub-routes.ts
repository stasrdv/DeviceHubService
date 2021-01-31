import {  Router } from 'express';
import { getDeviceData, getRegisteredDevices } from '../store/devices-store';
import { deviceBindHandler, wrapAsyncAndSend } from '../handlers/handlers';

const deviceHubRouter = Router();
deviceHubRouter.get('/getRegisteredDevices', wrapAsyncAndSend(() => getRegisteredDevices()));
deviceHubRouter.post('/bindDevice', deviceBindHandler((request) => {
   return  getDeviceData(request.body.deviceName)
}));





export { deviceHubRouter };
