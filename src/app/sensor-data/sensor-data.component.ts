import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { SensorParamsStorageService } from '../services/sensor-params-storage.service';
import { SensorInfo } from './sensor-info';
import { SensorRangeInfo } from './sensor-range-info';
import { SensorTypeInfo } from './sensor-type-info';
import { SensorUnitInfo } from './sensor-unit-info';

@Injectable()
@Component({
  selector: 'app-sensor-form',
  templateUrl: './sensor-data.component.html',
  styleUrls: ['./sensor-data.component.css']
})
export class SensorDataComponent implements OnInit {
  form: any = {};
  errorMessage: string = '';
  currentSensorId: number = 0;
  isNewSensor: boolean = false;
  types: SensorTypeInfo[] = [];
  units: SensorUnitInfo[] = [];
  sensorInfo: SensorInfo = new SensorInfo(0, '', '', '', new SensorRangeInfo(0, 0), new SensorTypeInfo(0, ''), new SensorUnitInfo(0, ''), '');

  constructor(private httpService: HttpService, private router: Router, private sensorParams: SensorParamsStorageService) { }

  ngOnInit(): void {
    this.currentSensorId = this.sensorParams.getSensorCurrentId();
    this.isNewSensor = this.sensorParams.getIsNewSensor();

    this.httpService.findSensorTypes().subscribe({
      next: (data) => this.types = data
    });

    this.httpService.findSensorUnits().subscribe({
      next: (data) => this.units = data
    });

    if (this.currentSensorId) {
      this.loadExistSensor();
    }
  }

  public onSaveSensor() {
    if (this.isNewSensor) {
      this.saveNewSensor();
    } else if (this.currentSensorId) {
      this.modifySensor();
    }
  }

  public onGoToSensors() {
    this.cleanSensorParametersAndReturnToSensors();
  }

  private saveNewSensor() {
    this.prepareSensor();

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

  private modifySensor() {
    this.prepareSensor();

    this.httpService.editSensor(this.sensorInfo).subscribe({
      next: () => this.cleanSensorParametersAndReturnToSensors(),
      error: (error) => this.errorMessage = error.error.errorMessage
    })
  }

  private prepareSensor(): void {
    this.sensorInfo.name = this.form.name;
    this.sensorInfo.model = this.form.model;
    this.sensorInfo.location = this.form.location;
    this.sensorInfo.description = this.form.description;
    this.sensorInfo.sensorType.type = this.form.type;
    this.sensorInfo.sensorUnit.unit = this.form.unit;
    this.sensorInfo.sensorRange.rangeFrom = this.form.rangeFrom;
    this.sensorInfo.sensorRange.rangeTo = this.form.rangeTo;
  }

  private loadExistSensor() {
    this.httpService.findSensor(this.currentSensorId).subscribe({
      next: (data) => {
        this.sensorInfo.id = data.id;
        this.form.name = data.name;
        this.form.model = data.model;
        this.form.location = data.location;
        this.form.description = data.description;
        this.form.type = data.sensorType.type;
        this.form.unit = data.sensorUnit.unit;
        this.form.rangeFrom = data.sensorRange.rangeFrom;
        this.form.rangeTo = data.sensorRange.rangeTo;
      },
      error: (error) => this.errorMessage = error.error.errorMessage
    })
  }

  private cleanSensorParametersAndReturnToSensors() {
    this.sensorParams.cleanSensorParams();
    this.router.navigate(['/sensors']);
  }
}