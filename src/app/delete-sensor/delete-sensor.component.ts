import { Component, Injectable, Input, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Injectable()
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

  deleteSensor(): void {
    this.httpService.deleteSensor(this.id);
  }
}