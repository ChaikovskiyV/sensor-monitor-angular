import { Injectable } from '@angular/core';
import { CURRENT_SENSOR_ID_KEY, IS_NEW_SENSOR_KEY } from 'src/env.consts';


@Injectable({
  providedIn: 'root'
})
export class SensorParamsStorageService {

  constructor() { }

  public cleanSensorParams() {
    sessionStorage.removeItem(CURRENT_SENSOR_ID_KEY);
    sessionStorage.removeItem(IS_NEW_SENSOR_KEY);
  }

  public setIsNewSensor() {
    sessionStorage.setItem(IS_NEW_SENSOR_KEY, 'true');
  }

  public getIsNewSensor(): boolean {
    return sessionStorage.getItem(IS_NEW_SENSOR_KEY) ? true : false;
  }

  public setSensorCurrentId(id: number) {
    sessionStorage.setItem(CURRENT_SENSOR_ID_KEY, id + '');
  }

  public getSensorCurrentId(): number {
    let currentId = sessionStorage.getItem(CURRENT_SENSOR_ID_KEY);

    return currentId ? Number.parseInt(currentId) : 0;
  }
}