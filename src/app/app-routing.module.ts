import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  // { path: '', redirectTo: 'naslovna', pathMatch: 'full' },
  { path: '', component: HomepageComponent },
  { path: 'studenti', component: StudentsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
