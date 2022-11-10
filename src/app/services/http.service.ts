import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../auth/token-storage.service';
import { PageDataInfo } from '../sensor-data/page-data-info';
import { SensorInfo } from '../sensor-data/sensor-info';
import { SensorTypeInfo } from '../sensor-data/sensor-type-info';
import { SensorUnitInfo } from '../sensor-data/sensor-unit-info';
import { SearchParams } from './search-params';
import { UrlBuilderService } from './url-builder.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private sensorsUrl = 'http://localhost:8088/api/v1/sensors';
  private unitsUrl = 'http://localhost:8088/api/v1/units';
  private typesUrl = 'http://localhost:8088/api/v1/types';

  private options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authentication': this.tokenStorage.getToken() })
  };

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private urlBuilder: UrlBuilderService) { }

  public findSensor(id: number): Observable<SensorInfo> {
    return this.http.get<SensorInfo>(this.urlBuilder.buildIdUrl(this.sensorsUrl, id));
  }

  public findAllSensors(searchParams: SearchParams): Observable<PageDataInfo> {
    return this.http.get<PageDataInfo>(this.urlBuilder.buildParammeterizedUrl(this.sensorsUrl, searchParams), this.options);
  }

  public createSensor(sensorInfo: SensorInfo): Observable<SensorInfo> {
    return this.http.post<SensorInfo>(this.sensorsUrl, sensorInfo, this.options);
  }

  public editSensor(sensorInfo: SensorInfo): Observable<SensorInfo> {
    return this.http.put<SensorInfo>(this.urlBuilder.buildIdUrl(this.sensorsUrl, sensorInfo.id), sensorInfo, this.options);
  }

  public deleteSensor(id: number): Observable<any> {
    return this.http.delete<any>(this.urlBuilder.buildIdUrl(this.sensorsUrl, id));
  }

  public findSensorUnits(): Observable<SensorUnitInfo[]> {
    return this.http.get<SensorUnitInfo[]>(this.unitsUrl, this.options);
  }

  public findSensorTypes(): Observable<SensorTypeInfo[]> {
    return this.http.get<SensorTypeInfo[]>(this.typesUrl, this.options);
  }
}