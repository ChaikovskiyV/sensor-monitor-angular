import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SensorDataComponent } from './sensor-data/sensor-data.component';
import { SensorsComponent } from './sensors/sensors.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sensors', component: SensorsComponent },
  { path: 'sensor-form', component: SensorDataComponent },
  { path: '', redirectTo: '/login', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
