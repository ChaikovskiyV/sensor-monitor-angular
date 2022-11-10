import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CURRENT_SENSOR_ID_KEY, IS_NEW_SENSOR_KEY } from 'src/env.consts';
import { HttpService } from '../services/http.service';
import { SensorInfo } from './sensor-info';
import { SensorRangeInfo } from './sensor-range-info';
import { SensorTypeInfo } from './sensor-type-info';
import { SensorUnitInfo } from './sensor-unit-info';

const IS_NEW = sessionStorage.getItem(IS_NEW_SENSOR_KEY);
const SENSOR_ID = sessionStorage.getItem(CURRENT_SENSOR_ID_KEY);

@Injectable()
@Component({
  selector: 'app-sensor-form',
  templateUrl: './sensor-data.component.html',
  styleUrls: ['./sensor-data.component.css']
})
export class SensorDataComponent implements OnInit {
  form: any = {};
  errorMessage: string = '';
  currentSensorId:number = 0;
  types: SensorTypeInfo[] = [];
  units: SensorUnitInfo[] = [];
  sensorInfo: SensorInfo = new SensorInfo(0, '', '', '', new SensorRangeInfo(0, 0), new SensorTypeInfo(0, ''), new SensorUnitInfo(0, ''), '');

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.httpService.findSensorTypes().subscribe({
      next: (data) => this.types = data
    });
    this.httpService.findSensorUnits().subscribe({
      next: (data) => this.units = data
    });
    if(SENSOR_ID) {
      this.loadExistSensor(SENSOR_ID);
    }
  }

  public saveSensor() {
    console.log(IS_NEW);
    if (IS_NEW) {
      this.saveNewSensor();
    } else if(this.currentSensorId) {
      this.httpService.editSensor(this.sensorInfo).subscribe({
        next: () => this.cleanSensorParametersAndReturnToSensors(),
        error: (error) => this.errorMessage = error.error.errorMessage
      })
    }
  }

  public goToSensors() {
    this.cleanSensorParametersAndReturnToSensors();
  }

  private saveNewSensor() {
    this.sensorInfo.name = this.form.name;
    this.sensorInfo.model = this.form.model;
    this.sensorInfo.location = this.form.location;
    this.sensorInfo.description = this.form.description;
    this.sensorInfo.sensorType.type = this.form.type;
    this.sensorInfo.sensorUnit.unit = this.form.unit;
    this.sensorInfo.sensorRange.rangeFrom = this.form.rangeFrom;
    this.sensorInfo.sensorRange.rangeTo = this.form.rangeTo;
    console.log(this.sensorInfo);

    this.httpService.createSensor(this.sensorInfo).subscribe({
      next: () => {
        this.cleanSensorParametersAndReturnToSensors();
      },
      error: (error) => {
        console.log(error);
        if (error.error.statusCode === 409) {
          this.errorMessage = 'Such a sensor is already exist';
        }
      }
    })
  }

  private loadExistSensor(id:string) {
    this.currentSensorId = Number.parseInt(id);
    this.httpService.findSensor(this.currentSensorId).subscribe({
      next: (data) => this.sensorInfo = data,
      error: (error) => this.errorMessage = error.error.errorMessage
    })

    this.form.name = this.sensorInfo.name;
    this.form.model = this.sensorInfo.model;
    this.form.location = this.sensorInfo.location;
    this.form.description = this.sensorInfo.description;
    this.form.type = this.sensorInfo.sensorType.type;
    this.form.unit = this.sensorInfo.sensorUnit.unit;
    this.form.rangeFrom = this.sensorInfo.sensorRange.rangeFrom;
    this.form.rangeTo = this.sensorInfo.sensorRange.rangeTo;
  }

  private cleanSensorParametersAndReturnToSensors() {
    sessionStorage.removeItem(IS_NEW_SENSOR_KEY);
    sessionStorage.removeItem(CURRENT_SENSOR_ID_KEY);
    this.router.navigate(['/sensors']);
  }
}