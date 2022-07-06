import { Component, ViewChild} from '@angular/core';
import Sample from '../assets/sample.json';
import {DataTableDirective} from 'angular-datatables';


let data = Sample;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-datatable';
  data: { relation: string; positive: number; negative: number; score: number; baseTitle: string; checkTitle: string; number: number; issuesLists: string; detectedPart: string; status:number }[];
  constructor() { 
    this.data = data;
  }

  ngOnInit(): void {
    
  }


}
