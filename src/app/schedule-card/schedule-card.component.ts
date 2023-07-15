import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-card',
  templateUrl: './schedule-card.component.html',
  styleUrls: ['./schedule-card.component.css']
})
export class ScheduleCardComponent implements OnInit {
  
  scheduleCards: { stage: string, weekday: string, schedule:string , stageNumber:number }[] = [];
  
  createScheduleCards(stage: string, weekday: string, schedule: string, stageNumber: number) {

    const colors = [
      { stage: 1, background: '#322F22', foreground: '#D1B94D' },
      { stage: 2, background: '#312821', foreground: '#BF8235' },
      { stage: 3, background: '#313520', foreground: '#D6503F' },
      { stage: 4, background: '#312222', foreground: '#ED5245' },
      { stage: 5, background: '#312222', foreground: '#E83F33' },
      { stage: 6, background: '#312222', foreground: '#F22418' },
      { stage: 7, background: '#312222', foreground: '#E61C0E' },
      { stage: 8, background: '#312222', foreground: '#FF0000' }
    ];

      // Find the color object for the given stage number
      var color = colors.find(c => c.stage === stageNumber);
    
      if (color) {
        // Update the CSS variables to set the background and foreground colors
        document.documentElement.style.setProperty('--foreground', color.foreground);
    
      } else {
        // Handle the case when color is undefined (no matching stage number found)
        // You can set default background and foreground colors or apply a fallback logic here
        // For example:
        document.documentElement.style.setProperty('--foreground', '#000000');
      }
  
    this.scheduleCards.push({stage, weekday, schedule, stageNumber})
  }

  
  clearScheduleCards(){
    this.scheduleCards = [];
  }

  dayName: string;

  constructor() {
    const today = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.dayName = days[today.getDay()];
  }

  ngOnInit(): void {
  }

}