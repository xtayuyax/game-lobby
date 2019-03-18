import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormControlName } from '@angular/forms';

import { Game } from '../models/game';
import { GameServiceService } from "../game-service.service"; 

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  game: Game;  
  private isDataAvailable: boolean = false;
  private id = this.route.snapshot.params["id"];

  updateGameForm: FormGroup;

  constructor(private http: Http, private router: Router, private route: ActivatedRoute,
    private gameService: GameServiceService) { }

  ngOnInit() {
    this.getGame(this.id);
  }

  getGame(id){
    this.http.get("http://localhost:3000/api/games/"+id)
      .subscribe(game => {
        this.game = game.json();
        if(this.game != null){
          this.isDataAvailable = true;
          this.updateGameForm = new FormGroup({
            title: new FormControl(this.game.title, Validators.required),
            platform: new FormControl(this.game.platform, Validators.required),
            genre: new FormControl(this.game.genre, Validators.required),
            rating: new FormControl(this.game.rating, Validators.required),
            publisher: new FormControl(this.game.publisher, Validators.required),
            release: new FormControl(this.game.release, Validators.required),
            status: new FormControl(this.game.status, Validators.required)
          });
        }
        console.log(this.game);
      })
  }

  updateGame(){
    this.gameService.updateGame(this.id, this.updateGameForm);
  }



}
