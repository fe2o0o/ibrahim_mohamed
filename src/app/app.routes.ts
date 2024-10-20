import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: ()=> import('./pages/home-page/home-page.component').then((m) => m.HomePageComponent) },
  {path:"about" , loadComponent: ()=> import('./pages/about/about.component').then ((m) => m.AboutComponent)}
];
