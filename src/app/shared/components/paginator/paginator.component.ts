import { Component, Input } from "@angular/core";
import { DataService } from "../../../../services/data.service";

@Component({
  selector: 'app-pag',
  template: `
    <div style="width: 100%;" *ngIf="_page !== 0">
      <p-paginator [first]="0" [rows]="10" [totalRecords]="_page" (onPageChange)="onPageChange($event)"></p-paginator>
    </div>
  `,
  styles: [`
    :host {
      width: 100%;
    }

    :host ::ng-deep .p-paginator.p-component, :host ::ng-deep .p-paginator-pages {
      display: flex;
      gap: 5px;
    }

    :host ::ng-deep .p-ripple.p-element.p-paginator-page.p-paginator-element.p-link {
      padding: 2px 5px;
      background-color: #7ba6cb;
      border: none;
    }

    :host ::ng-deep .p-ripple.p-element.p-paginator-page.p-paginator-element.p-link.p-highlight {
      background-color: #1894eb;
    }
  `]
})
export class PaginatorComponent {

  constructor(
    private dataService: DataService
  ){}

  _page = 0;
  @Input() set page(page: number) {
    this._page = page;
  }
  @Input() dataStoreFunc = '';

  onPageChange(event: any) {
    const page = event.page + 1;
    if (this.dataStoreFunc !== '') {
      this.dataService.callFetchData(this.dataStoreFunc as any, page);
    }
  }

}
