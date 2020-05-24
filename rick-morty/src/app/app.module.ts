import { TripHistoricService } from './trip-historic/trip-historic.service';
import { RickCardDetailService } from './rick-card/rick-card-detail/rick-card-detail.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MortyCardService } from './morty-card/morty-card.service';
import { RickCardService } from './rick-card/rick-card.service';
import { RickCardComponent } from './rick-card/rick-card.component';
import { MortyCardComponent } from './morty-card/morty-card.component';
import { RickCardDetailComponent, RegisterTripModalComponent } from './rick-card/rick-card-detail/rick-card-detail.component';
import { TripHistoricComponent } from './trip-historic/trip-historic.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RickCardComponent,
    MortyCardComponent,
    RickCardDetailComponent,
    RegisterTripModalComponent,
    TripHistoricComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatIconModule,
    RouterModule.forRoot([])
  ],
  providers: [
    RickCardService,
    MortyCardService,
    RickCardDetailService,
    TripHistoricService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
