import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../../app-constants';

@Component({
  selector: 'app-create-sensor',
  templateUrl: './create-sensor.component.html',
  styleUrls: ['./create-sensor.component.css']
})
export class CreateSensorComponent implements OnInit {

  constructor(private router: Router, private constants: AppConstants) { }

  ngOnInit(): void {
  }

  public onGoToSensorForm() {
    sessionStorage.setItem(this.constants.isNewSensorKey, true.toString());
    this.router.navigate(['/sensor-form']);
  }
}