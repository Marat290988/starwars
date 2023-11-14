import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PaginatorModule } from 'primeng/paginator';
import { PaginatorComponent } from "./components/paginator/paginator.component";

@NgModule({
  declarations: [
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    PaginatorModule
  ],
   exports: [
    CommonModule,
    PaginatorModule,
    PaginatorComponent
   ]
})
export class SharedModule {

}
