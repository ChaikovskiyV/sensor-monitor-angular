import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-delete-sensor',
  templateUrl: './delete-sensor.component.html',
  styleUrls: ['./delete-sensor.component.css']
})
export class DeleteSensorComponent implements OnInit {
  @Input() id: number = 0;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  onDeleteSensor(): void {
    this.httpService.deleteSensor(this.id).subscribe(
      {
        next: () => window.location.reload()
      }
    );
  }
}