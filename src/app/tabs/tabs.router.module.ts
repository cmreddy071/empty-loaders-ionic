import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'Actions',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../devices/devices.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'Text-Only',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../alarms/alarms.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'Placeholders',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../predictions/predictions.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'Sub-Content',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../others/others.module').then(m => m.Tab4PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/device',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/device',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
