import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { FormControl, Validators, FormGroup, FormControlName } from '@angular/forms';
import { PlayerServiceService } from '../player-service.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  private addPlayerForm = new FormGroup({
    name: new FormControl("", Validators.required),
    rank: new FormControl("", [Validators.required, Validators.pattern("[0-9]*")]),
    score: new FormControl("", [Validators.required, Validators.pattern("[0-9]*")]),
    time: new FormControl("", [Validators.required, Validators.pattern("[0-9]*")]),
    game: new FormControl("", Validators.required),
    status: new FormControl("Available")});

  constructor(private router: Router, private http: Http, private playerService: PlayerServiceService) { }

  ngOnInit() {
  }
  

  addPlayer(){
    this.playerService.addPlayer(this.addPlayerForm);
  }

}
