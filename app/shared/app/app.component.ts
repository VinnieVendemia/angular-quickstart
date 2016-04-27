import { Component } from 'angular2/core';
import { HeroService }     from '../hero-service/hero.service';
import { HeroesComponent } from '../../components/heroes/heroes.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { HeroDetailComponent } from '../../components/hero-detail/hero-detail.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
	selector: 'my-app',
	template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls: ['app/shared/app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService, ROUTER_PROVIDERS]
})

@RouteConfig([
  {
  path: '/dashboard',
  name: 'Dashboard',
  component: DashboardComponent,
  useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
	{
		path: '/heroes',
		name: 'Heroes',
		component: HeroesComponent
	}
])
	
export class AppComponent {
	title = "Tour of Heroes";

}