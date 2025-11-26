import { Routes } from '@angular/router';
import { DaisyuiPage } from './features/daisyui-page/daisyui-page';
import { SimpsonDetailPageComponent } from './features/simpson-detail-page/simpson-detail-page';
import { SimpsonsPageComponent } from './features/simpsons-page/simpsons-page';
import { EstilosPage } from './features/estilos-page/estilos-page';

export const routes: Routes = [
    {
        path: '', 
        component:DaisyuiPage
    },
    {
        path:'estilos',
        component:EstilosPage
    },
    {
        path: 'simpsons',
        component: SimpsonsPageComponent,
    },
    {
        path: 'simpsons/:id',
        component: SimpsonDetailPageComponent,
    }
];
