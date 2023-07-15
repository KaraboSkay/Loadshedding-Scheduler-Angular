import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ScreenOneComponent } from './screen-one/screen-one.component';
import { ScreenTwoComponent } from './screen-two/screen-two.component';
import { ScheduleCardComponent } from './schedule-card/schedule-card.component';
import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ScreenOneComponent,
    ScreenTwoComponent,
    ScheduleCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }