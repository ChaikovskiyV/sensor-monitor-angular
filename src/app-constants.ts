import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AppConstants {
    public jwtTokenKey: string = 'jwtToken';
    public usernameKey: string = 'username';
    public authoritiesKey: string = 'authorities';
    public isNewSensorKey: string = 'isNewSensor';
    public currentSensorIdKey = 'currentSensorId';
}