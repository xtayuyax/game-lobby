import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormControlName } from '@angular/forms';

import { PlayerServiceService } from "../player-service.service";
import { Player } from "../models/player";

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  private player: Player;
  private isDataAvailable: boolean = false;
  private id = this.route.snapshot.params["id"];

  updatePlayerForm: FormGroup;

  constructor(private http: Http, private router: Router, private route: ActivatedRoute,
    private playerService: PlayerServiceService) { }

  ngOnInit() {
    this.getPlayer(this.id);
  }

  getPlayer(id){
    this.http.get("http://localhost:3000/api/players/" + id)
      .subscribe(response => {
        this.player = response.json();
        console.log(this.player);
        this.isDataAvailable = true;
        this.updatePlayerForm = new FormGroup({
          name: new FormControl(this.player.name, Validators.required),
          rank: new FormControl(this.player.rank, [Validators.required, Validators.pattern("[0-9]*")]),
          score: new FormControl(this.player.score, [Validators.required, Validators.pattern("[0-9]*")]),
          time: new FormControl(this.player.time, [Validators.required, Validators.pattern("[0-9]*")]),
          game: new FormControl(this.player.game, Validators.required),
          status: new FormControl("Available")
        })
      })
  }

  updatePlayer(){
    this.playerService.updatePlayer(this.id, this.updatePlayerForm);
  }
}