import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormControlName } from '@angular/forms';

import { Player } from "../models/player";
import { PlayerServiceService } from "../player-service.service"
import { Game } from "../models/game";

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css']
})
export class JoinGameComponent implements OnInit {

  private games: Game[];
  private player: Player;
  private isDataAvailable: boolean = false;
  private id = this.route.snapshot.params["id"];
  private areGamesAvailable: boolean = false;

  joinGameForm : FormGroup;

  constructor(private http: Http, private router: Router, private route: ActivatedRoute,
    private playerService: PlayerServiceService) { }

  ngOnInit() {
    this.getGames()
    this.getPlayer(this.id);
  }

  getPlayer(id){
    this.http.get("http://localhost:3000/api/players/" + id)
      .subscribe(response => {
        this.player = response.json();
        console.log(this.player);
        this.isDataAvailable = true;
        this.joinGameForm = new FormGroup({
          name: new FormControl(this.player.name, Validators.required),
          rank: new FormControl(this.player.rank, [Validators.required, Validators.pattern("[0-9]*")]),
          score: new FormControl(this.player.score, [Validators.required, Validators.pattern("[0-9]*")]),
          time: new FormControl(this.player.time, [Validators.required, Validators.pattern("[0-9]*")]),
          game: new FormControl(this.player.game, Validators.required),
          status: new FormControl("Available", Validators.required)
        })
      })
  }

  getGames(){
    this.http.get("http://localhost:3000/api/games")
      .subscribe(response => {
        this.games = response.json();
        this.games = this.games.filter(x => x.status == "Active" );
        this.areGamesAvailable = true;
      });
  }

  updatePlayer(){
    this.playerService.updatePlayer(this.id, this.joinGameForm);
  }
}