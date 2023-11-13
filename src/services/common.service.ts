import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public isLoadingSource = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.isLoadingSource.asObservable();

  public makeLoading(state: boolean): void {
    this.isLoadingSource.next(state);
  }
}
