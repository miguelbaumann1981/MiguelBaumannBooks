import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@home/home-page.component').then(m => m.HomePageComponent)
  },
  {
    path: 'books',
    loadComponent: () => import('@books/books-page.component').then(m => m.BooksPageComponent)
  },
  {
    path: 'biography',
    loadComponent: () => import('@biography/biography-page.component').then(m => m.BiographyPageComponent)
  },
  {
    path: 'media',
    loadComponent: () => import('@media/media-page.component').then(m => m.MediaPageComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
