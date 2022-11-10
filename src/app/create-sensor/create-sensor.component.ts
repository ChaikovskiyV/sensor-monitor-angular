import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IS_NEW_SENSOR_KEY } from 'src/env.consts';

@Injectable()
@Component({
  selector: 'app-create-sensor',
  templateUrl: './create-sensor.component.html',
  styleUrls: ['./create-sensor.component.css']
})
export class CreateSensorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goToSensorForm() {
    sessionStorage.setItem(IS_NEW_SENSOR_KEY, true.toString());
    this.router.navigate(['/sensor-form']);
  }
}