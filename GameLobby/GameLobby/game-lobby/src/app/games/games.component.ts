import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { GameServiceService } from '../game-service.service';
import { Game } from "../models/game";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  private games: Game[] ;
  private gamesDataSource: MatTableDataSource<Game>;
  private displayColumns: string[] = 
    ["title", "platform", "genre", "rating", "publisher", "release", "status", "actions"]
  
  constructor(private http: Http, private router: Router, private gameService: GameServiceService) {
  }

  ngOnInit() {
    this.getGames();
  }

  getGames(){
    this.http.get("http://localhost:3000/api/games")
      .subscribe(response => {
        this.games = response.json();
        this.gamesDataSource = new MatTableDataSource(this.games);
      });
  }

  deleteGame(id){
    this.gameService.deleteGame(id);
  }

  applyFilter(filterValue: string) {
    this.gamesDataSource.filter = filterValue.trim().toLowerCase();
  }
}
