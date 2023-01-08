import {RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PegesComponent } from "./peges.component";
import { ProgressComponent } from "./progress/progress.component";



const pagesRoute: Routes = [

    {
        path: '', 
        component: PegesComponent,
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'progress', component: ProgressComponent},
            {path: 'graficas1', component: Graficas1Component},
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoute );