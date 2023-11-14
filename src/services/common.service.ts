import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private isLoadingSource = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.isLoadingSource.asObservable();

  public makeLoading(state: boolean): void {
    this.isLoadingSource.next(state);
  }

  private isErrorSource = new BehaviorSubject<boolean>(false);
  public isError$ = this.isErrorSource.asObservable();

  public makeError(state: boolean): void {
    this.isErrorSource.next(state);
  }
}
