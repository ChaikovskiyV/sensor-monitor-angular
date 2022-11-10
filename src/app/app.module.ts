import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SensorsComponent } from './sensors/sensors.component';
import { SensorDataComponent } from './sensor-data/sensor-data.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {httpInterceptorProviders} from './auth/auth-interceptor';
import { DeleteSensorComponent } from './delete-sensor/delete-sensor.component';
import { EditSensorComponent } from './edit-sensor/edit-sensor.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { AddSensorComponent } from './add-sensor/add-sensor.component';
import { PaginationBlockComponent } from './pagination-block/pagination-block.component';
import { SensorTableComponent } from './sensor-table/sensor-table.component';
import { LogoutComponent } from './logout/logout.component';
import { CreateSensorComponent } from './create-sensor/create-sensor.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SensorsComponent,
    SensorDataComponent,
    DeleteSensorComponent,
    EditSensorComponent,
    SearchPanelComponent,
    AddSensorComponent,
    PaginationBlockComponent,
    SensorTableComponent,
    LogoutComponent,
    CreateSensorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
