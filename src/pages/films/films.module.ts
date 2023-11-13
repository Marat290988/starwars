import { NgModule } from "@angular/core";
import { SharedModule } from "../../app/shared/shared.module";
import { FilmsComponent } from "./films.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    FilmsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: FilmsComponent}
    ])
  ]
})
export class FilmsModule {}
