import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  imports: [
    CommonModule,
    PaginatorModule
  ],
   exports: [
    CommonModule,
    PaginatorModule
   ]
})
export class SharedModule {

}
