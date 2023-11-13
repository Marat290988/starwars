import { NgModule } from "@angular/core";
import { SharedModule } from "../../app/shared/shared.module";
import { PeopleComponent } from "./people.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    PeopleComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: PeopleComponent}
    ])
  ]
})
export class PeopleModule {}
