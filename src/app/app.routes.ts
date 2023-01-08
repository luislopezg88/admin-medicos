import {RouterModule, Routes } from "@angular/router";


import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { NopagefoundComponent } from "./shared/nopagefound/nopagefound.component";




const appRouter: Routes = [
    

    
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    
   
    {path: '**', component: NopagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRouter, {useHash: true});