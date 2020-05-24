import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TripHistoricComponent } from './trip-historic/trip-historic.component';
import { MortyCardService } from './morty-card/morty-card.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RickCardComponent } from './rick-card/rick-card.component';
import { RickCardDetailComponent, RegisterTripModalComponent } from './rick-card/rick-card-detail/rick-card-detail.component';
import { AppComponent } from './app.component';
import { MortyCardComponent } from './morty-card/morty-card.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent},
  { path: 'rick-card', component: RickCardComponent },
  { path: 'rick-card-detail/:id', component: RickCardDetailComponent },
  { path: 'morty-card', component: MortyCardComponent },
  { path: 'register-trip', component: RegisterTripModalComponent },
  { path: 'trip-historic/:name', component: TripHistoricComponent },
  { path: '**', component: RickCardComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
