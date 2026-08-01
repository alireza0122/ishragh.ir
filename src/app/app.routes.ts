import { Routes } from '@angular/router';
import { Home } from './view/home/home';
import { Submit } from './view/submit/submit';
import { show } from './view/show/show';
import { Team } from './view/team/team';
export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'submit',
    component: Submit,
  },
  {
    path: 'show',
    component: show,
  },
  {
    path: 'team',
    component: Team,
  },
];
