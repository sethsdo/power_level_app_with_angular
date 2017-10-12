import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-power-level',
  templateUrl: './power-level.component.html',
  styleUrls: ['./power-level.component.css']
})
export class PowerLevelComponent implements OnInit {
  power = {
    strength: null
  }
  human = null
  saiyan = null 
  superSaiyan = null
  superSaiyanTwo = null
  superSaiyanThree = null
  superSaiyanFour = null
  numbers = [];
  numberList(num) {
    for (let index = 0; index <= num; index++) {
      this.numbers.push(index);
    }
    return this;
  }
  constructor() { }

  ngOnInit() {
    this.numberList(100)
  }

  onSubmit(myForm) {
    console.log(this.power)
    this.human = this.power.strength
    this.saiyan = this.power.strength * 10
    this.superSaiyan = this.power.strength * 90
    this.superSaiyanTwo = this.power.strength * 150
    this.superSaiyanThree = this.power.strength * 250
    this.superSaiyanFour = this.power.strength * 500
  }

}
