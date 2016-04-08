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
}