import { Component, Input, OnInit } from '@angular/core';
import { SensorInfo } from '../sensor-data/sensor-info';

@Component({
  selector: 'app-sensor-table',
  templateUrl: './sensor-table.component.html',
  styleUrls: ['./sensor-table.component.css']
})
export class SensorTableComponent implements OnInit {
  @Input() sensors: SensorInfo[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}