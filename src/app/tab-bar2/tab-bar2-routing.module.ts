// tab-bar-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabBar2Page } from './tab-bar2.page';

const routes: Routes = [
  {
    path: 'tabs2',
    component: TabBar2Page,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ]
      },
      {
        path: 'email',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../email/email.module').then(m => m.EmailPageModule)
          }
        ]
      },
      {
        path: 'calendar',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../calendar/calendar.module').then(m => m.CalendarPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs2/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs2/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabBar2PageRoutingModule { }
