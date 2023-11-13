import { NgModule } from "@angular/core";
import { SharedModule } from "../../app/shared/shared.module";
import { ShipsComponent } from "./ships.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    ShipsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: ShipsComponent}
    ])
  ]
})
export class ShipsModule {}
