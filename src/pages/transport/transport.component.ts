import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Observable, Subscription, map } from "rxjs";
import { Transport } from "../../types/transport.type";

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransportComponent {
  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ){
    this.transports$ = this.dataService.initFetchTransportsAndGetTransportsStore(this.dataPage);
  }

  ngOnInit() {
    this.subs.push(
      this.transports$.pipe(
        map(_ => {
          return this.dataPage.page
        })
      ).subscribe(p => {
        this.page = p;
        this.cdr.detectChanges();
      })
    );
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
    this.dataService.clearData();
  }

  dataPage = {page: 0};
  page = 0;
  transports$!: Observable<Transport[]>;
  subs: Subscription[] = [];
}
