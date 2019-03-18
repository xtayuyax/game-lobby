import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { PlayerServiceService } from '../player-service.service';
import { Player } from "../models/player";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  private players: Player[];
  private isPlaying: boolean = false;
  private playerDataSource: MatTableDataSource<Player>;
  private displayColumns: string[] = ["name", "rank", "score", "game", "time", "status", "action"]

  constructor(private http: Http, private router: Router, private playerService: PlayerServiceService) {
  }

  ngOnInit() {
    this.getPlayers();
  }
  
  getPlayers(){
    this.http.get("http://localhost:3000/api/players")
      .subscribe(response => {
        this.players = response.json();
        this.playerDataSource = new MatTableDataSource(this.players);
      })  
  }

  deletePlayer(id){
    this.playerService.deletePlayer;
  }

  applyFilter(filterValue: string) {
    this.playerDataSource.filter = filterValue.trim().toLowerCase();
  }

  checkStatus(status){
    if(status === "Available"){
      return true;
    }
    return false;
  }
}
