import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CURRENT_SENSOR_ID_KEY } from 'src/env.consts';

@Injectable()
@Component({
  selector: 'app-edit-sensor',
  templateUrl: './edit-sensor.component.html',
  styleUrls: ['./edit-sensor.component.css']
})
export class EditSensorComponent implements OnInit {
  @Input() id: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goToSensorForm() {
    console.log(this.id);
    sessionStorage.setItem(CURRENT_SENSOR_ID_KEY, this.id.toString())
    this.router.navigate(['/sensor-form']);
  }

}
