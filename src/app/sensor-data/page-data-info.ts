import { SensorInfo } from "./sensor-info";

export class PageDataInfo {
    limit:number;
    currentPage:number;
    pagesNumber:number;
    resultsNumber:number;
    sensors:SensorInfo[];

    constructor(limit:number, currentPage:number, pagesNumber:number, resultsNumber:number, sensors:SensorInfo[]) {
        this.limit = limit;
        this.currentPage = currentPage;
        this.pagesNumber = pagesNumber;
        this.resultsNumber = resultsNumber;
        this.sensors = sensors;
    }
}