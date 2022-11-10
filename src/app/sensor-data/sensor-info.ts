import { SensorRangeInfo } from "./sensor-range-info";
import { SensorTypeInfo } from "./sensor-type-info";
import { SensorUnitInfo } from "./sensor-unit-info";

export class SensorInfo {
    id: number;
    name: string;
    description: string;
    model: string;
    sensorRange: SensorRangeInfo;
    sensorType: SensorTypeInfo;
    sensorUnit: SensorUnitInfo;
    location: string;

    constructor(
        id: number,
        name: string,
        description: string,
        model: string,
        sensorRange: SensorRangeInfo,
        sensorType: SensorTypeInfo,
        sensorUnit: SensorUnitInfo,
        location: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.model = model;
        this.sensorRange = sensorRange;
        this.sensorType = sensorType;
        this.sensorUnit = sensorUnit;
        this.location = location;
    }
}