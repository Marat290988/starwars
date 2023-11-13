import { NgModule } from "@angular/core";
import { SharedModule } from "../../app/shared/shared.module";
import { PlanetsComponent } from "./planets.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    PlanetsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: PlanetsComponent}
    ])
  ]
})
export class PlanetsModule {}
