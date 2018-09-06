import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PricesComponent } from './components/prices/prices.component';
import { ProtectedComponent } from './components/protected/protected.component';

// Routes
import { app_routes } from "./app.routes";

// Services
import { AuthService } from "./services/auth.service";
import { AuthGuardService } from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PricesComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    app_routes
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
