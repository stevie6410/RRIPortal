import {Component} from 'angular2/core';
<<<<<<< HEAD
import {BacklogListComponent} from '../backlog-list/backlog-list.component';
=======
import {BacklogListComponent} from '../../components/backlog-list/backlog-list.component';
//import {OrdersService} from '../../services/orders-service';

>>>>>>> 91ac5861476efdf258b46e9c7a8d11e996e858dd

@Component({
    selector: 'rri-app',
    template:
    `
        <backlog-list>Loading Backlog List</backlog-list>
    `,
<<<<<<< HEAD
    directives: [BacklogListComponent]
=======
    directives: [
        BacklogListComponent
    ]
>>>>>>> 91ac5861476efdf258b46e9c7a8d11e996e858dd
})
export class AppComponent {
    title = "RRI Portal";
}
