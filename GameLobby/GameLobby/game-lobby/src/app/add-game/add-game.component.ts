import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { FormControl, Validators, FormGroup, FormControlName } from '@angular/forms';

import { GameServiceService } from '../game-service.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  private addGameForm = new FormGroup({
    title: new FormControl("", Validators.required),
    platform: new FormControl("", Validators.required),
    genre: new FormControl("", Validators.required),
    rating: new FormControl("", Validators.required),
    publisher: new FormControl("", Validators.required),
    release: new FormControl("", Validators.required),
    status: new FormControl("", Validators.required)
  });

  constructor(private http: Http, private router: Router, private gameService: GameServiceService) { }

  ngOnInit() {
  }

  addGame(){
    this.gameService.addGame(this.addGameForm);
  }

} 
