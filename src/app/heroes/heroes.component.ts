import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}

// import { Component, OnInit } from '@angular/core';

// import { Hero } from '../hero';
// import { HeroService } from '../hero.service';
// import { MessageService } from '../message.service';

// @Component({
//   selector: 'app-heroes',
//   templateUrl: './heroes.component.html',
//   styleUrls: ['./heroes.component.css']
// })
// export class HeroesComponent implements OnInit {

//   selectedHero?: Hero;

//   heroes: Hero[] = [];

//   constructor(private heroService: HeroService, private messageService: MessageService) { }

//   ngOnInit(): void {
//     this.getHeroes();
//   }

//   onSelect(hero: Hero): void {
//     this.selectedHero = hero;
//     this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
//   }

//   getHeroes(): void {
//     this.heroService.getHeroes()
//         .subscribe(heroes => this.heroes = heroes);
//   }
// }


// import {Component} from '@angular/core';
// import {
//   NgIf,
//   NgFor,
//   UpperCasePipe,
// } from '@angular/common';
// import {FormsModule} from '@angular/forms';

// import {Hero} from '../hero';
// import {HEROES} from '../mock-heroes';
// import { HeroDetailComponent } from "../hero-detail/hero-detail.component";

// @Component({
//   standalone: true,
//   selector: 'app-heroes',
//   templateUrl: './heroes.component.html',
//   styleUrls: ['./heroes.component.css'],
//   imports: [
//     FormsModule,
//     // NgIf,
//     NgFor,
//     // UpperCasePipe,
//     HeroDetailComponent
// ],
// })

// export class HeroesComponent {
//   heroes = HEROES;
//   selectedHero?: Hero;

//   onSelect(hero: Hero): void {
//     this.selectedHero = hero;
//   }
// }