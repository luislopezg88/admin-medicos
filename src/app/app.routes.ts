import {RouterModule, Routes } from "@angular/router";
import { PegesComponent } from "./pages/peges.component";

import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { Graficas1Component } from "./pages/graficas1/graficas1.component";
import { NopagefoundComponent } from "./pages/nopagefound/nopagefound.component";
import { ProgressComponent } from "./pages/progress/progress.component";



const appRouter: Routes = [
    {
        path: '', 
        component: PegesComponent,
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'progress', component: ProgressComponent},
            {path: 'graficas1', component: Graficas1Component},
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    },

    
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    
   
    {path: '**', component: NopagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRouter, {useHash: true});