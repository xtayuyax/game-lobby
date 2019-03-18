import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { Player } from './models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {
  private player : Player;

  constructor(private router: Router, private http: Http) {}

  deletePlayer(id){
    this.http.delete("http://localhost:3000/api/players/" + id)
      .subscribe(res=> {
        this.router.navigateByUrl('/gamess', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/players"]))},
        (err) =>{
        return console.log(err);
      });
  }

  addPlayer(formGroup){
    this.player = formGroup.value;
    this.http.post("http://localhost:3000/api/players", this.player)
      .subscribe(res =>{
        this.router.navigate(["/players"]);}, 
        (err) =>{
        return console.log(err);
      })
  }

  updatePlayer(id, formGroup){
    this.player = formGroup.value;
    this.http.put("http://localhost:3000/api/players/" + id, this.player)
      .subscribe(res =>{
        console.log(formGroup);
        this.router.navigate(["/players"]);}, 
        (err) =>{
        return console.log(err);
      })
  }
}
