import {Component, OnInit, OnDestroy} from 'angular2/core'

declare var $: any;
declare var TweenMax: any;

@Component({
    selector: 'dashboard',
    templateUrl: 'app/components/dashboard/dashboard.html'
})
export class DashboardComponent {

    ngOnInit() {
        TweenMax.fromTo($(".rri-dashboard"), 1, { opacity: 0 }, { opacity: 1 });
    }
    ngOnDestroy() {
        TweenMax.fromTo($(".rri-dashboard"), 1, { opacity: 1 }, { opacity: 0 });
    }
}