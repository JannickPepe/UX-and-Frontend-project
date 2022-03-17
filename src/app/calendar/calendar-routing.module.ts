/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarPage } from './calendar.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarPageRoutingModule {
  static forChild(arg0: { path: string; component: typeof CalendarPage; }[]): any[] | import('@angular/core').Type<any> | import('@angular/core').ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }
}
