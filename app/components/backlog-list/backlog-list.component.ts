import { Component, OnInit, OnDestroy } from 'angular2/core';

import { Order } from '../../models/Order';
import { OrdersService } from '../../services/orders-service';

declare var $:any;
declare var TweenMax:any;


@Component({
    selector: 'backlog-list',
    templateUrl: 'app/components/backlog-list/backlog-list.html',
    providers: [OrdersService]
})
export class BacklogListComponent implements OnInit {
    constructor(private _ordersService: OrdersService) {
        this.orders = _ordersService.getOrdersBacklog();
    }

    orders: Order[] = [];

    ngOnInit() {
         TweenMax.fromTo($(".rri-backloglist"), 1, { opacity: 0 }, { opacity: 1 });
    }
    
    ngOnDestroy(){
          TweenMax.fromTo($(".rri-backloglist"), 1, { opacity: 1 }, { opacity: 0 });
    }
}