import { UsuarioComponent } from './../entities/usuario/usuario.component';
import { AppHomeComponent } from './app-home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const homeRoutes: Routes = [
  {
    path:'',
    component: AppHomeComponent,
    resolve: {},
    data: {},   
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
    resolve:{},
    data:{}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(homeRoutes)],
  exports: [RouterModule]
})
export class AppHomeRouteModule { }