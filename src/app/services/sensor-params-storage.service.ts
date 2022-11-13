import { Injectable } from '@angular/core';
import { AppConstants } from '../../app-constants';


@Injectable({
  providedIn: 'root'
})
export class SensorParamsStorageService {

  constructor(private constants: AppConstants) { }

  public cleanSensorParams() {
    sessionStorage.removeItem(this.constants.currentSensorIdKey);
    sessionStorage.removeItem(this.constants.isNewSensorKey);
  }

  public setIsNewSensor() {
    sessionStorage.setItem(this.constants.isNewSensorKey, 'true');
  }

  public getIsNewSensor(): boolean {
    return sessionStorage.getItem(this.constants.isNewSensorKey) ? true : false;
  }

  public setSensorCurrentId(id: number) {
    sessionStorage.setItem(this.constants.currentSensorIdKey, id + '');
  }

  public getSensorCurrentId(): number {
    let currentId = sessionStorage.getItem(this.constants.currentSensorIdKey);

    return currentId ? Number.parseInt(currentId) : 0;
  }
}