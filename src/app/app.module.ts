import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UvPieComponent } from './uv-pie/uv-pie.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UvBarChartComponent } from './uv-bar-chart/uv-bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UvPieComponent,
    UvBarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
