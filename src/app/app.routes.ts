import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./modules/home/home.module')
      .then(module => module.HomeModule)
  },
  {
    path: 'organizer',
    pathMatch: 'full',
    loadChildren: () => import('./modules/organizer/organizer.module')
      .then(module => module.OrganizerModule)
  },
  {
    path: '**',
    loadChildren: () => import('./modules/not-found/not-found.module')
      .then(module => module.NotFoundModule)
  }
];

export const AppRoutes: ModuleWithProviders<any> = RouterModule.forRoot(routes);
