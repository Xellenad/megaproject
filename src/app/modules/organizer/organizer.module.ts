import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizerPageComponent } from './pages/organizer-page/organizer-page.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: OrganizerPageComponent,
  }
];

@NgModule({
  declarations: [
    OrganizerPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrganizerModule {}
