import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Observable } from 'rxjs';
import { People } from "../../types/people.type";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleComponent {
  
  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ){
    this.people$ = this.dataService.initFetchPeopeAndGetPeopleStore(this.dataPage);
    const temp = []
    for (let i = 1; i <= 100; i++) {
      temp.push(`item ${i}`);
    }
    this.collection = temp;
  }

  ngOnInit() {
    this.people$.subscribe(res => {
      console.log(this.dataPage)
      this.cdr.detectChanges();
    })
  }

  collection: any[] = [];
  dataPage = {page: 0};
  people$!: Observable<People[]>;
  p: any;

}
