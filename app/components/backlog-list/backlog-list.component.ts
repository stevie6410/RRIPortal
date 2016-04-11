<<<<<<< HEAD
import { Component } from 'angular2/core';

@Component({
    selector: 'backlog-list',
    template: '<h3>{{backlogCount}}</h3>'
})
export class BacklogListComponent {
    
    backlogCount = "There are 10 orders in the backlog";
    
    constructor() { }
=======
import { Component, OnInit } from 'angular2/core';
import { Order } from '../../models/Order';
import { OrdersService } from '../../services/orders-service';

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
    }
>>>>>>> 91ac5861476efdf258b46e9c7a8d11e996e858dd
}