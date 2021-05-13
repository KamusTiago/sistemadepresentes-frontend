import { RouterModule } from '@angular/router';
import { UsuarioComponent } from './../entities/usuario/usuario.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppHomeRouteModule } from './app-home.route';
import { AppHomeComponent } from './app-home.component';
import { AppComponent } from '../app.component';


const ENTITY_STATES = [...homeRoutes];

@NgModule({
  imports: [
    BrowserModule,
    AppHomeRouteModule,
    RouterModule.forChild(ENTITY_STATES)
  ],
  declarations: [
    AppHomeComponent, UsuarioComponent
  ],
  providers: [],
  bootstrap: [AppComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }