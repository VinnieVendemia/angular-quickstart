import { Component, OnInit } from 'angular2/core';
import { Hero } from '../../shared/hero/hero';
import { HeroService } from '../../shared/hero-service/hero.service';
import { Router } from 'angular2/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/components/dashboard/dashboard.component.html',
  styleUrls: ['app/components/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit { 

  heroes: Hero[] = [];

  constructor(private _heroService: HeroService,
              private _router: Router) { }
  
  ngOnInit() {
    this._heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
  }

  gotoDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this._router.navigate(link);
  }

}