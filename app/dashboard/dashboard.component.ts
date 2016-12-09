import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
    dashboardTitle = 'DASHBOARD';
    restockTitle = 'TO RE-STOCK';
    stockOverviewTitle = 'STOCK OVERVIEW';
}
