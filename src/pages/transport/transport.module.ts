import { NgModule } from "@angular/core";
import { SharedModule } from "../../app/shared/shared.module";
import { TransportComponent } from "./transport.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    TransportComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: TransportComponent}
    ])
  ]
})
export class TransportModule {}
