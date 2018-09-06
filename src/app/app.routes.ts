import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { HomeComponent } from "./components/home/home.component";
import { PricesComponent } from "./components/prices/prices.component";
import { ProtectedComponent } from "./components/protected/protected.component";

// Services
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'prices', component: PricesComponent },
    { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuardService] },
    { path: '**', redirectTo: 'home' },
];

export const app_routes = RouterModule.forRoot(routes);
