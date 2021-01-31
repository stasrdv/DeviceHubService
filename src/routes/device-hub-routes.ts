import {  Router } from 'express';
import { getDeviceData, getRegisteredDevices } from '../store/devices-store';
import { deviceBindHandler, wrapAsyncAndSend } from '../utils/handlers';

const deviceHubRouter = Router();
deviceHubRouter.get('/getRegisteredDevices', wrapAsyncAndSend(() => getRegisteredDevices()));
deviceHubRouter.post('/bindDevice', deviceBindHandler((res) => getDeviceData(res.body.deviceName)));





export { deviceHubRouter };
