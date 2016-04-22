//Angular Imports
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';


//RRI Imports
import {BacklogListComponent} from '../../components/backlog-list/backlog-list.component';
import {DashboardComponent} from '../../components/dashboard/dashboard.component';
import {OrderDetailComponent} from '../../components/order-detail/order-detail.component';

//External Libraries
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
    { path: '/Backlog', as: 'Backlog', component: BacklogListComponent },
    { path: '/OrderDetail/:id', as: 'OrderDetail', component: OrderDetailComponent }
])
export class AppComponent {
    title = "RRI Portal";

}
