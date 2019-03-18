import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { Game } from './models/game';

@Injectable({
  providedIn: 'root'
})

export class GameServiceService {
  
  private game : Game;
  private games: any[];

  constructor(private router: Router, private http: Http) {}

  deleteGame(id){
    this.http.delete("  " + id)
      .subscribe(res => {
        this.router.navigateByUrl('/players', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/games"]))},
        (err) =>{
        return console.log(err);
      });
  }

  addGame(formGroup){
    this.game = formGroup.value;
    this.http.post("http://localhost:3000/api/games", this.game)
      .subscribe(res =>{
        this.router.navigate(["/games"]);},
        (err) =>{
        return console.log(err);
      });
  }

  updateGame(id, formGroup){
    this.game = formGroup.value;
    this.http.put("http://localhost:3000/api/games/" + id, this.game)
      .subscribe(res =>{
        this.router.navigate(["/games"]);}, 
        (err) =>{
        return console.log(err);
      })
  }
}
