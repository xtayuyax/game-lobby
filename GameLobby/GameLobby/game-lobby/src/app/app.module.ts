import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { PlayersComponent } from './players/players.component';
import { AddGameComponent } from './add-game/add-game.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { AddPlayerComponent } from './add-player/add-player.component';

import { AppRoutingModule } from './app-routing.module';
import { JoinGameComponent } from './join-game/join-game.component';
import { PlayerServiceService } from './player-service.service';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    PlayersComponent,
    GameDetailsComponent,
    AddGameComponent,
    PlayerDetailsComponent,
    AddPlayerComponent,
    JoinGameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [ PlayerServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
