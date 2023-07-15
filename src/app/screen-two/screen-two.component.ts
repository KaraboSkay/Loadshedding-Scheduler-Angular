import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ScheduleCardComponent } from '../schedule-card/schedule-card.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-screen-two',
  templateUrl: './screen-two.component.html',
  styleUrls: ['./screen-two.component.css']
})
export class ScreenTwoComponent implements OnInit {

  
  mockres = {
          "events": [{
              "end": "2023-03-12T22:30:00+02:00",
              "note": "Stage 6 (TESTING: current)",
              "start": "2023-03-12T20:00:00+02:00"
          }],
          "info": {
              "name": "TESTING Fourways Ext 10 (10)",
              "region": "Eskom Direct, City of Johannesburg, Gauteng"
          },
          "schedule": {
              "days": [{
                      "date": "2023-03-12",
                      "name": "Sunday",
                      "stages": [
                          [
                              "20:00-22:30"
                          ],
                          [
                              "12:00-14:30",
                              "20:00-22:30"
                          ],
                          [
                              "04:00-06:30",
                              "12:00-14:30",
                              "20:00-22:30"
                          ],
                          [
                              "04:00-06:30",
                              "12:00-14:30",
                              "20:00-22:30"
                          ],
                          [
                              "04:00-06:30",
                              "12:00-14:30",
                              "20:00-00:30"
                          ],
                          [
                              "04:00-06:30",
                              "12:00-16:30",
                              "20:00-00:30"
                          ],
                          [
                              "04:00-08:30",
                              "12:00-16:30",
                              "20:00-00:30"
                          ],
                          [
                              "04:00-08:30",
                              "12:00-16:30",
                              "20:00-00:30"
                          ]
                      ]
                  },
                  {
                      "date": "2023-03-13",
                      "name": "Monday",
                      "stages": [
                          [],
                          [
                              "18:00-20:30"
                          ],
                          [
                              "10:00-12:30",
                              "18:00-20:30"
                          ],
                          [
                              "02:00-04:30",
                              "10:00-12:30",
                              "18:00-20:30"
                          ],
                          [
                              "02:00-04:30",
                              "10:00-12:30",
                              "18:00-20:30"
                          ],
                          [
                              "02:00-04:30",
                              "10:00-12:30",
                              "18:00-22:30"
                          ],
                          [
                              "02:00-04:30",
                              "10:00-14:30",
                              "18:00-22:30"
                          ],
                          [
                              "02:00-06:30",
                              "10:00-14:30",
                              "18:00-22:30"
                          ]
                      ]
                  },
                  {
                      "date": "2023-03-14",
                      "name": "Tuesday",
                      "stages": [
                          [
                              "02:00-04:30"
                          ],
                          [
                              "02:00-04:30"
                          ],
                          [
                              "02:00-04:30",
                              "18:00-20:30"
                          ],
                          [
                              "02:00-04:30",
                              "10:00-12:30",
                              "18:00-20:30"
                          ],
                          [
                              "02:00-06:30",
                              "10:00-12:30",
                              "18:00-20:30"
                          ],
                          [
                              "02:00-06:30",
                              "10:00-12:30",
                              "18:00-20:30"
                          ],
                          [
                              "02:00-06:30",
                              "10:00-12:30",
                              "18:00-22:30"
                          ],
                          [
                              "02:00-06:30",
                              "10:00-14:30",
                              "18:00-22:30"
                          ]
                      ]
                  },
                  {
                      "date": "2023-03-15",
                      "name": "Wednesday",
                      "stages": [
                          [
                              "10:00-12:30"
                          ],
                          [
                              "02:00-04:30",
                              "10:00-12:30"
                          ],
                          [
                              "02:00-04:30",
                              "10:00-12:30"
                          ],
                          [
                              "02:00-04:30",
                              "10:00-12:30",
                              "18:00-20:30"
                          ],
                          [
                              "02:00-04:30",
                              "10:00-14:30",
                              "18:00-20:30"
                          ],
                          [
                              "02:00-06:30",
                              "10:00-14:30",
                              "18:00-20:30"
                          ],
                          [
                              "02:00-06:30",
                              "10:00-14:30",
                              "18:00-20:30"
                          ],
                          [
                              "02:00-06:30",
                              "10:00-14:30",
                              "18:00-22:30"
                          ]
                      ]
                  },
                  {
                      "date": "2023-03-16",
                      "name": "Thursday",
                      "stages": [
                          [
                              "18:00-20:30"
                          ],
                          [
                              "10:00-12:30",
                              "18:00-20:30"
                          ],
                          [
                              "02:00-04:30",
                              "10:00-12:30",
                              "18:00-20:30"
                          ],
                          [
                              "02:00-04:30",
                              "10:00-12:30",
                              "18:00-20:30"
                          ],
                          [
                              "02:00-04:30",
                              "10:00-12:30",
                              "18:00-22:30"
                          ],
                          [
                              "02:00-04:30",
                              "10:00-14:30",
                              "18:00-22:30"
                          ],
                          [
                              "02:00-06:30",
                              "10:00-14:30",
                              "18:00-22:30"
                          ],
                          [
                              "02:00-06:30",
                              "10:00-14:30",
                              "18:00-22:30"
                          ]
                      ]
                  },
                  {
                      "date": "2023-03-17",
                      "name": "Friday",
                      "stages": [
                          [],
                          [
                              "16:00-18:30"
                          ],
                          [
                              "08:00-10:30",
                              "16:00-18:30"
                          ],
                          [
                              "00:00-02:30",
                              "08:00-10:30",
                              "16:00-18:30"
                          ],
                          [
                              "00:00-02:30",
                              "08:00-10:30",
                              "16:00-18:30"
                          ],
                          [
                              "00:00-02:30",
                              "08:00-10:30",
                              "16:00-20:30"
                          ],
                          [
                              "00:00-02:30",
                              "08:00-12:30",
                              "16:00-20:30"
                          ],
                          [
                              "00:00-04:30",
                              "08:00-12:30",
                              "16:00-20:30"
                          ]
                      ]
                  },
                  {
                      "date": "2023-03-18",
                      "name": "Saturday",
                      "stages": [
                          [
                              "00:00-02:30"
                          ],
                          [
                              "00:00-02:30"
                          ],
                          [
                              "00:00-02:30",
                              "16:00-18:30"
                          ],
                          [
                              "00:00-02:30",
                              "08:00-10:30",
                              "16:00-18:30"
                          ],
                          [
                              "00:00-04:30",
                              "08:00-10:30",
                              "16:00-18:30"
                          ],
                          [
                              "00:00-04:30",
                              "08:00-10:30",
                              "16:00-18:30"
                          ],
                          [
                              "00:00-04:30",
                              "08:00-10:30",
                              "16:00-20:30"
                          ],
                          [
                              "00:00-04:30",
                              "08:00-12:30",
                              "16:00-20:30"
                          ]
                      ]
                  }
              ],
              "source": "https://example.com/test.schedule/current"
          }
      }
      constructor(private http: HttpClient) { }  


    @ViewChild(ScheduleCardComponent) scheduleCardComponent!: ScheduleCardComponent;

    days: any = this.mockres.schedule.days;
    // days!: any[];
    
    // Using API data  
    // getAreaInfo(_id: string) {
    //     const myHeaders = new HttpHeaders({
    //       "token": "67B4D589-919B440F-9971B7CF-267FAC7A",
    //       "Access-Control-Allow-Origin": "https://developer.sepush.co.za"
    //     });
      
    //     const requestOptions = {
    //       method: 'GET',
    //       headers: myHeaders, 
    //       responseType: 'json' as const
    //     };
      
    //     this.http.get<any>(`https://developer.sepush.co.za/business/2.0/area?id=${_id}`, requestOptions)
    //       .subscribe(
    //         (result) => {
    //           console.log(result);
    //           this.scheduleCardComponent.clearScheduleCards();
    //           this.days = result.schedule.days;
    //           console.log(this.days);
    //           const arrayLength = Object.keys(result.schedule.days).length;
    //           for (let i = 0; i < arrayLength; i++) {
    //             let stage = result.events[0].note.substring(0, 7); 
    //             let stageNumber = Number(stage.substr(6, 1));
    //             let weekday = result.schedule.days[i].name; 
    //             console.log('stageNumber:', stageNumber);
    //             console.log('stages:', result.schedule.days[i].stages);
    //             let scheduleArray = result.schedule.days[i].stages[stageNumber - 1]; 
    //             let schedule = scheduleArray.join(", ");
    //             console.log('schedule:', schedule);
    //             this.scheduleCardComponent.createScheduleCards(stage, weekday, schedule, stageNumber);
    //           }
    //         },
    //         (error) => {
    //           console.error(error);
    //         }
    //       );
    //   }
      
    // Using mock data
    getAreaInfo(_id: any){
        this.scheduleCardComponent.clearScheduleCards();
          const arrayLength = Object.keys(this.mockres.schedule.days).length
          for (let i = 0; i < arrayLength; i++) {
                let stage = this.mockres.events[0].note.substring(0, 7);
                let stageNumber = Number(stage.substr(6,1))
                let weekday = this.mockres.schedule.days[i].name
                console.log('stageNumber:', stageNumber)
                console.log('stages:', this.mockres.schedule.days[i].stages)
                let scheduleArray= this.mockres.schedule.days[i].stages[stageNumber-1]
                let schedule = scheduleArray.join(", ");
                console.log('schedule:', schedule)
                this.scheduleCardComponent.createScheduleCards(stage, weekday, schedule, stageNumber)
      }
      
    }


  ngOnInit(): void {

  }

}
