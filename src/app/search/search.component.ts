import { Component, EventEmitter, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searched = false;


  @Output() searchClicked: EventEmitter<string> = new EventEmitter<string>();

  area: string ='';

  onSubmit() {
    if (this.area) {
      this.searchClicked.emit(this.area);
    
    }
    this.area = '';
  }
  
}