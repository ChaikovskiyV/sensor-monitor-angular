import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SensorParamsStorageService } from '../services/sensor-params-storage.service';

@Injectable()
@Component({
  selector: 'app-edit-sensor',
  templateUrl: './edit-sensor.component.html',
  styleUrls: ['./edit-sensor.component.css']
})
export class EditSensorComponent implements OnInit {
  @Input() id: number = 0;

  constructor(private router: Router, private sensorParams: SensorParamsStorageService) { }

  ngOnInit(): void {
  }

  public goToSensorForm() {
    console.log(this.id);
    this.sensorParams.setSensorCurrentId(this.id);
    this.router.navigate(['/sensor-form']);
  }
}