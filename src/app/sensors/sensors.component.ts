import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { SensorInfo } from '../sensor-data/sensor-info';
import { HttpService } from '../services/http.service';
import { SearchParams } from '../services/search-params';
import { VerificationAdminService } from '../services/verification-admin.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {

  info: any;
  sensors: SensorInfo[] = [];
  currentPage: number = 1;
  pagesNumber: number = 1;
  resultsNumber: number = 0;
  searchParam: string = '';
  errorMessage: string = '';
  isAdmin: boolean = false;

  constructor(private token: TokenStorageService, private httpService: HttpService, private verificationAdmin: VerificationAdminService) { }

  ngOnInit(): void {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.loadSensors(this.currentPage, this.searchParam);
    this.isAdmin = this.verificationAdmin.isAdmin();
  }

  onPageChanged(page: any) {
    this.loadSensors(page, this.searchParam);
  }

  loadSensors(page: number, searchParam: string) {
    this.httpService.findAllSensors(new SearchParams(page, 0, searchParam)).subscribe({
      next: (data) => {
        this.sensors = data.sensors;
        this.currentPage = data.currentPage;
        this.pagesNumber = data.pagesNumber;
        this.resultsNumber = data.resultsNumber;
      }
    })
  }
}