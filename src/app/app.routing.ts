import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { Component } from '@angular/core';
import { DetailComponent } from './cvTech/detail/detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { CvComponent } from './cvTech/cv/cv.component';

const APP_ROUTING: Routes = [
  {
    path: 'cv',
    component: CvComponent,
    children: [
      { path: '', component: CvComponent },
      { path: 'delete/:id', component: DeleteCvComponent },
      { path: 'add', component: AddCvComponent },
      { path: ':id', component: DetailComponent },
    ],
  },
  { path: '', component: CvComponent },
  { path: 'color/:default', component: ColorComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent },
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
