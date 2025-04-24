import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const LandingRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home',
      urls: [{ title: 'Home', url: '/home' }, { title: 'Home' }],
    },
  },
];
