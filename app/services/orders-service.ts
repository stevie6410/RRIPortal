
import { Injectable } from 'angular2/core';
import { Order } from '../models/Order';

@Injectable()
export class OrdersService {

    constructor() { }

    getOrdersBacklog() {
        return this.mockOrders;
    }

    getOrdersInProgress() {
        return this.mockOrders;
    }

    getOrdersOnHold() {
        return this.mockOrders;
    }
    
    getOrder(id: number){
        return this.mockOrders[id -1];
    }
    

    mockOrders = [
        new Order(1, 123456, "OP", 1, "1005535-123", "BRACKET", new Date(), "First Artice Inspection"),
        new Order(2, 789012, "OP", 1.1, "3MAQ0981001", "ENDBAY ASSY", new Date(), "Level 3"),
        new Order(3, 345678, "OP", 1.2, "3MAQ0981002", "ENDBAY ASSY", new Date(), "Level 2"),
        new Order(4, 901234, "OP", 2, "0775601-001", "HINGE", new Date(), "Level 3"),
        new Order(5, 567854, "OP", 4, "0775601-002", "LEATHER COVER", new Date(), "Level 1")
    ];
}
