import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';  // Vérifiez que ce fichier existe
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AccueilComponent } from './components/accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []  // Ajoutez AppComponent ici
})
export class AppModule { }
