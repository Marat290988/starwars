import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    public commonService: CommonService,
    private changeDetection: ChangeDetectorRef,
    private dataService: DataService
  ){
  }
  ngOnInit(): void {
  }

}
