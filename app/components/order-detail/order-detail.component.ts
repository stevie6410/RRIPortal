import { Component, OnInit, OnDestroy } from 'angular2/core';
import {RouteParams } from 'angular2/router';

import {OrdersService} from '../../services/orders-service';
import {Order} from '../../models/order';

declare var $: any;
declare var TweenMax: any;

@Component({
    selector: 'order-detail',
    templateUrl: 'app/components/order-detail/order-detail.html',
    providers: [OrdersService]
})
export class OrderDetailComponent implements OnInit {

    order: Order;
    orderId: number; 
    
    constructor(params: RouteParams, private _ordersService: OrdersService) {
        this.orderId = +params.get('id');            
    }

    ngOnInit() {
        //Fade In
        TweenMax.fromTo($(".rri-order-detail"), 1, { opacity: 0 }, { opacity: 1 });
        
        //Get the order from the service
        this.order = this._ordersService.getOrder(this.orderId);
    }

    ngOnDestroy() {
        //Fade Out
        TweenMax.fromTo($(".rri-order-detail"), 1, { opacity: 1 }, { opacity: 0 });
    }
}


