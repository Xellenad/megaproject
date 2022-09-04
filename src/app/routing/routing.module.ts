import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('../modules/home/home.module')
          .then(module => module.HomeModule)
      },
      {
        path: 'organizer',
        pathMatch: 'full',
        loadChildren: () => import('../modules/organizer/organizer.module')
          .then(module => module.OrganizerModule)
      },
      {
        path: '**',
        loadChildren: () => import('../modules/not-found/not-found.module')
          .then(module => module.NotFoundModule)
      }
    ])
  ]
})


export class RoutingModule {
}
