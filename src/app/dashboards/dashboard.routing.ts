import { Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';

import { Dashboard1Component } from './dashboard1/dashboard1.component';



export const DashboardRoutes: Routes = [
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: '',
  //       component: Dashboard1Component,
  //       data: {
  //         title: 'Dashboard',
  //         urls: [
  //           { title: 'Dashboard', url: '/dashboard' },
  //           { title: 'Dashboard' }
  //         ]
  //       }
  //     },

   
  
  //   ]
  // }
  {
    canActivate: [AuthGuard] ,
    path: '',
    component: Dashboard1Component,
    data: {
      title: 'Dashboard',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Dashboard' }
      ]
    }
  }
];
