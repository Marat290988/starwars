import { NgModule, Provider } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "../components/header/header.component";
import { NavComponent } from "../components/nav/nav.component";
import { RouterModule } from "@angular/router";
import { SpinnerComponent } from "../components/spinner/spinner.component";
import { CommonModule } from "@angular/common";
import { StoreModule } from '@ngrx/store';
import { DATA_FEATURENAME, dataReducer } from "../store/data.reducer";
import { ReqInterceptor } from "../utils/req.interceptor";

export const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: ReqInterceptor
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(DATA_FEATURENAME, dataReducer),
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot([
      {path: 'main', title: 'Main', loadChildren: () => import('../pages/main/main.module').then(module => module.MainModule)},
      {path: 'people', title: 'People', loadChildren: () => import('../pages/people/people.module').then(module => module.PeopleModule)},
      {path: 'films', title: 'Films', loadChildren: () => import('../pages/films/films.module').then(module => module.FilmsModule)},
      {path: 'ships', title: 'Ships', loadChildren: () => import('../pages/ships/ships.module').then(module => module.ShipsModule)},
      {path: 'planets', title: 'Planets',loadChildren: () => import('../pages/planets/planets.module').then(module => module.PlanetsModule)},
      {path: 'nations', title: 'Nations',loadChildren: () => import('../pages/nations/nations.module').then(module => module.NationsModule)},
      {path: 'transport', title: 'Transport',loadChildren: () => import('../pages/transport/transport.module').then(module => module.TransportModule)},
      {path: '**', redirectTo: 'main'}
    ])
  ],
  bootstrap: [AppComponent],
  providers: [INTERCEPTOR_PROVIDER]
})
export class AppModule {}
