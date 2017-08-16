import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Hero } from './hero';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = 'from binding--this is a title';

  selectedHero: Hero;
  heros: Hero[];

  constructor(public navCtrl: NavController) {

    this.heros = [
      { id: 1, name: 'hero1' },
      { id: 2, name: 'hero2' },
      { id: 3, name: 'hero3' },
      { id: 4, name: 'hero4' }
    ];
    this.selectedHero = { id: 0, name: "未选择" };
    // this.selectedHero = null;

  }
  showTitle() {
    alert(this.title);
  }

  select(h: Hero) {
    this.selectedHero = h;
  }
}
