//Angular Imports
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, OnActivate, OnDeactivate} from 'angular2/router';

//RRI Imports
import {BacklogListComponent} from '../../components/backlog-list/backlog-list.component';
import {DashboardComponent} from '../../components/dashboard/dashboard.component';

declare var $: any;
declare var TweenMax: any;


@Component({
    selector: 'rri-app',
    templateUrl: 'app/components/app/app.html',
    styleUrls: ['app/components/app/app.css'],
    directives: [
        BacklogListComponent,
        ROUTER_DIRECTIVES
    ],
    providers: [
        ROUTER_PROVIDERS
    ]
})
@RouteConfig([
    { path: '/', as: 'Home', component: DashboardComponent, useAsDefault: true },
    { path: '/Dashboard', as: 'Dashboard', component: DashboardComponent },
    { path: '/Backlog', as: 'Backlog', component: BacklogListComponent }
])
export class AppComponent {
    title = "RRI Portal";

    routerOnActivate() {
        //TweenMax.fromTo($(".rri-dashboard"), 1, { opacity: 0 }, { opacity: 1 });
        console.log('Activated from app');
    }
    routerOnDeactivate() {
        console.log('Deactivated from app');
        //TweenMax.fromTo($(".rri-dashboard"), 1, { opacity: 1 }, { opacity: 0 });
    }

}
