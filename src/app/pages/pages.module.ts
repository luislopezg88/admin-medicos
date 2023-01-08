import { NgModule } from '@angular/core';
import { sharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PAGES_ROUTES } from './pages.routes';
import { PegesComponent } from './peges.component';

import { ProgressComponent } from './progress/progress.component';

@NgModule({

    declarations: [
        PegesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent

    ],

    exports: [
        PegesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
      
    ],
    imports: [
        sharedModule,
        PAGES_ROUTES
    ]
    
    
})

export class pagesModule {}