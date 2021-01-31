import { GetRegisteredDevicesResponse } from '../models/registered-devices-response';
import availableDeviceNames from '../assets/availableDeviceNames.json';
import { BindDeviceResponse } from '../models/bind-device-response';




export function isDeviceBounded(name: string): boolean {
  // TODO replace with service call
  const registeredDevices: GetRegisteredDevicesResponse[] = [];
  return registeredDevices.filter(device => device.deviceName === name).length > 0;
}

export function isDeviceAvailable(name: string): boolean {
  const availableDevices: GetRegisteredDevicesResponse[] = availableDeviceNames;
  return true
  return availableDevices.filter(device => device.deviceName === name).length > 0;
}

export function getDeviceData(name:string): Promise<BindDeviceResponse> {
  // TODO replace with service call
  return new Promise<BindDeviceResponse>((resolve) => {
    resolve({
      "deviceName": "sensor",
      "deviceDescription": "Cool Sensor"
    });
  });
}

export function getRegisteredDevices(): Promise<GetRegisteredDevicesResponse[]> {
  // TODO replace with service call
  return new Promise<GetRegisteredDevicesResponse[]>((resolve) => {
    resolve([]);
  });
}







