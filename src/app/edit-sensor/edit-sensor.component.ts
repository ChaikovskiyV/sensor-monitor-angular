import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SensorParamsStorageService } from '../services/sensor-params-storage.service';

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

  public onGoToSensorForm() {
    this.sensorParams.setSensorCurrentId(this.id);
    this.router.navigate(['/sensor-form']);
  }
}