import { Component, Input, OnInit } from '@angular/core';
import { SensorInfo } from '../sensor-data/sensor-info';
import { VerificationAdminService } from '../services/verification-admin.service';

@Component({
  selector: 'app-sensor-table',
  templateUrl: './sensor-table.component.html',
  styleUrls: ['./sensor-table.component.css']
})
export class SensorTableComponent implements OnInit {
  @Input() sensors: SensorInfo[] = [];
  @Input() isAdmin: boolean = false;

  constructor(private hideElement: VerificationAdminService) { }

  ngOnInit(): void {  
  }
}