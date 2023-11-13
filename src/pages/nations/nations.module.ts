import { NgModule } from "@angular/core";
import { SharedModule } from "../../app/shared/shared.module";
import { NationsComponent } from "./nations.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    NationsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: NationsComponent}
    ])
  ]
})
export class NationsModule {}
