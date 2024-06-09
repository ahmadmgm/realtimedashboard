import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ImageWidgetComponent } from './components/image-widget/image-widget.component';
import { LiveEventWidgetComponent } from './components/live-event-widget/live-event-widget.component';
import { LiveWTrendWidgetComponent } from './components/live-w-trend-widget/live-w-trend-widget.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DevicesStatusWidgetComponent } from './components/devices-status-widget/devices-status-widget.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { PeopleHazardousTimelineWedgitComponent } from './components/people-hazardous-timeline-wedgit/people-hazardous-timeline-wedgit.component';
import { SiteBoardEventWidgetComponent } from './components/site-board-event-widget/site-board-event-widget.component';
import { SingleBarWidgetComponent } from './components/single-bar-widget/single-bar-widget.component';

@NgModule({
  declarations: [
    ImageWidgetComponent,
    LiveWTrendWidgetComponent,
    LiveEventWidgetComponent,
    DashboardComponent,
    DevicesStatusWidgetComponent,
    WeatherWidgetComponent,
    PeopleHazardousTimelineWedgitComponent,
    SiteBoardEventWidgetComponent,
    SingleBarWidgetComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CarouselModule
  ],
  exports:[
    ImageWidgetComponent,
    LiveWTrendWidgetComponent,
    LiveEventWidgetComponent,
    DashboardComponent,
    DevicesStatusWidgetComponent,
    WeatherWidgetComponent,
    PeopleHazardousTimelineWedgitComponent,
    SiteBoardEventWidgetComponent,
    SingleBarWidgetComponent
  ]
})
export class DashboardModule { }
