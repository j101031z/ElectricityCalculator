import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
   consumption: number;
   hours: number;
   cost: number;
   energyconsumed: number;
   costperday: number;
   energyconsumedmessage: string;
   costperdaymessage: string;
  constructor(public navCtrl: NavController) {}

calculateenergyconsumed(){
    this.energyconsumed = this.consumption*this.hours / 1000;
    this.energyconsumed = parseFloat(this.energyconsumed.toFixed(2));
  }

calculatecostperday(){
    this.costperday = this.energyconsumed*this.cost;
    this.energyconsumed = parseFloat(this.energyconsumed.toFixed(2));
  }
}
