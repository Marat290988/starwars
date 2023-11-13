import { NgModule } from "@angular/core";
import { SharedModule } from "../../app/shared/shared.module";
import { MainComponent } from "./main.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: MainComponent}
    ])
  ]
})
export class MainModule {}
