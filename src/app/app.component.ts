
import { Component , EventEmitter, Output, ViewChild  } from '@angular/core';
import { ScreenOneComponent } from './screen-one/screen-one.component';
import { ScreenTwoComponent } from './screen-two/screen-two.component';
import { ScheduleCardComponent } from './schedule-card/schedule-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // ...

  title = 'EskomSeWatt-Angular';

  @ViewChild(ScreenOneComponent) screenOneComponent!: ScreenOneComponent;
  @ViewChild(ScreenTwoComponent) screenTwoComponent! : ScreenTwoComponent;
  @ViewChild(ScheduleCardComponent) scheduleCardComponent! : ScheduleCardComponent;

  showScreenOne = true;
  showScreenTwo = false;
  
  onSearch(_area: string){
    this.showScreenOne = true;
    this.showScreenTwo = false;
    setTimeout(() => {
      this.screenOneComponent.getAreas(_area);
    });
  }
  
  
  onButtonClicked(_id: any) {
    this.showScreenTwo = true;
    setTimeout(() => {
    if (_id) {
      console.log(_id);
      this.screenTwoComponent.getAreaInfo(_id);
      this.showScreenOne = false;
    }
    });
  }

  colors: { stage: number; background: string; foreground: string; }[] = [];

  @Output() darkThemeToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  isDarkTheme = false;


  toggleDarkTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.darkThemeToggled.emit(this.isDarkTheme);
    document.body.classList.toggle('dark-theme'); 
    console.log(this.isDarkTheme);
   
 }

}