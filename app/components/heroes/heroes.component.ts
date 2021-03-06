import {Component, OnInit} from 'angular2/core';
import {Hero} from '../../shared/hero/hero';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {HeroService} from '../../shared/hero-service/hero.service';
import {Router} from 'angular2/router';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/components/heroes/heroes.component.html',
    styleUrls: ['app/components/heroes/heroes.component.css'],
		directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
	title = 'Tour of Heroes';
	heroes: Hero[];
	selectedHero: Hero;
	
	constructor(private _heroService: HeroService,
							private _router: Router ){}

	getHeroes() {
		this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	ngOnInit() {
		this.getHeroes();
	}

	onSelect(hero: Hero) { this.selectedHero = hero; }

	gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}