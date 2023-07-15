import { Component, EventEmitter, OnInit , Output, ViewChild } from '@angular/core';
import { ScreenTwoComponent } from '../screen-two/screen-two.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ScheduleCardComponent } from '../schedule-card/schedule-card.component';

@Component({
  selector: 'app-screen-one',
  templateUrl: './screen-one.component.html',
  styleUrls: ['./screen-one.component.css']
})
export class ScreenOneComponent implements OnInit {
 mockresponse = {
    "areas": [{
            "id": "tshwane-11-pretorianorth",
            "name": "PRETORIA NORTH (11)",
            "region": "City of Tshwane"
        },
        {
            "id": "eskde-14-pretorianketoanafreestate",
            "name": "Pretoria (14)",
            "region": "Eskom Direct, Nketoana, Free State"
        },
        {
            "id": "eskdo-14-pretoriagreatertubatselimpopo",
            "name": "Pretoria (14)",
            "region": "Eskom Direct, Greater Tubatse, Limpopo"
        },
        {
            "id": "eskdo-8-pretorialephalalelimpopo",
            "name": "Pretoria (8)",
            "region": "Eskom Direct, Lephalale, Limpopo"
        },
        {
            "id": "tshwane-14-pretoriaindustrial",
            "name": "PRETORIA INDUSTRIAL (14)",
            "region": "City of Tshwane"
        },
        {
            "id": "eskde-13-pretoriaannexngwathefreestate",
            "name": "Pretoria Annex (13)",
            "region": "Eskom Direct, Ngwathe, Free State"
        },
        {
            "id": "tshwane-14-pretoriaext10",
            "name": "PRETORIA Ext 10 (14)",
            "region": "City of Tshwane"
        },
        {
            "id": "tshwane-14-pretoriaext9",
            "name": "PRETORIA Ext 9 (14)",
            "region": "City of Tshwane"
        },
        {
            "id": "tshwane-11-pretorianorthext4",
            "name": "PRETORIA NORTH Ext 4 (11)",
            "region": "City of Tshwane"
        },
        {
            "id": "tshwane-11-pretorianorthext1",
            "name": "PRETORIA NORTH Ext 1 (11)",
            "region": "City of Tshwane"
        }
    ]
}

@ViewChild(ScreenTwoComponent) screenTwoComponent!: ScreenTwoComponent;

@ViewChild(ScheduleCardComponent) scheduleCardComponent! : ScheduleCardComponent;

@Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();

areas: any = [];

areaCards: { name: string, id: string }[] = [];
myHeaders: any;

constructor(private http: HttpClient) { }


onClick(_id: any) {
    if (_id) {
      this.buttonClicked.emit(_id);
      console.log(_id)
    }
  }  
// With API 
//   getAreas(_area: string) {
//     const myHeaders = new HttpHeaders({
//       "token": "67B4D589-919B440F-9971B7CF-267FAC7A",
//       "Access-Control-Allow-Origin" : "https://developer.sepush.co.za"
//     });
  
//     const requestOptions = {
//       method: 'GET',
//       headers: myHeaders, 
//       responseType: 'json' as const // Set the expected response type
//     };
  
//     this.http.get<any>(`https://developer.sepush.co.za/business/2.0/areas_search?text=${_area.toLowerCase()}`, requestOptions)
//       .subscribe(
//         (result) => {
//           console.log(result);
//           const arrayLength = Object.keys(result.areas).length;
//           for (let i = 0; i < arrayLength; i++) {
//             const name = result.areas[i].name;
//             const id = result.areas[i].id;
//             this.createAreaCards(name, id);
//           }
//         },
//         (error) => {
//           console.error(error);
//         }
//       );
//   }
  

// Using mock data
  getAreas(_area: string){
    const arrayLength = Object.keys(this.mockresponse.areas).length
          for (let i = 0; i < arrayLength; i++) {
              let name = this.mockresponse.areas[i].name
              let id = this.mockresponse.areas[i].id
              this.createAreaCards(name, id);
          }
          this.scheduleCardComponent.clearScheduleCards();
  }


createAreaCards(name: string, id: string): void {
    this.areaCards.push({ name, id });
  }
  
  ngOnInit(): void {
    
 }
}