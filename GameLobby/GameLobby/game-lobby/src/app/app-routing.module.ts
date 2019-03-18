import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { GamesComponent } from './games/games.component';
import { PlayersComponent } from './players/players.component';
import { AddGameComponent } from './add-game/add-game.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { JoinGameComponent } from './join-game/join-game.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  { path: 'players', component: PlayersComponent },
  { path: 'games', component: GamesComponent },
  { path: 'add-game', component: AddGameComponent },
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'player/:id', component: PlayerDetailsComponent },
  { path: 'game/:id', component: GameDetailsComponent },
  { path: 'join-game/:id', component: JoinGameComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}