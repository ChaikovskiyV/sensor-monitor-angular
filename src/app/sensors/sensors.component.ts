import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { SensorInfo } from '../sensor-data/sensor-info';
import { HttpService } from '../services/http.service';
import { SearchParams } from './search-params';
import { VerificationAdminService } from '../services/verification-admin.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {

  tokenInfo: any;
  sensors: SensorInfo[] = [];
  currentPage: number = 1;
  pagesNumber: number = 1;
  resultsNumber: number = 0;
  searchParam: string = '';
  errorMessage: string = '';
  isAdmin: boolean = false;

  constructor(private token: TokenStorageService, private httpService: HttpService, private verificationAdmin: VerificationAdminService) { }

  ngOnInit(): void {
    this.tokenInfo = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    this.isAdmin = this.verificationAdmin.isAdmin();

    this.loadSensors(this.currentPage, this.searchParam);
  }

  onPageChanged(page: any) {
    this.loadSensors(page, this.searchParam);
  }

  onSearchByParam(searchParam: any) {
    this.loadSensors(this.currentPage, searchParam);
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