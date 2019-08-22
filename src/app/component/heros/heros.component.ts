import {Component, OnInit} from '@angular/core';
import {Hero} from '../model/Hero';
import {HEROES} from '../model/mock-heros';
import {HeroService} from '../../services/hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heros: Hero[];
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private  heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros().subscribe(heros => this.heros = heros);
  }
}
