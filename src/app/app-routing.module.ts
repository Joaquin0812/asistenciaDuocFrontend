import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'alumno',
    loadChildren: () => import('./alumno/alumno.module').then( m => m.AlumnoPageModule),
    canActivate: [AuthGuard] // Protege esta ruta con el AuthGuard
  },
  {
    path: 'profesor',
    loadChildren: () => import('./profesor/profesor.module').then( m => m.ProfesorPageModule),
    canActivate: [AuthGuard] // Protege esta ruta con el AuthGuard
  },
  {
    path: 'profesor/lista-de-alumnos',
    loadChildren: () => import('./lista-de-alumnos/lista-de-alumnos.module').then( m => m.ListaDeAlumnosPageModule),
    canActivate: [AuthGuard] // Protege esta ruta con el AuthGuard
  },
  {
    path: 'profesor/qr-asistencia',
    loadChildren: () => import('./qr-asistencia/qr-asistencia.module').then( m => m.QrAsistenciaPageModule),
    canActivate: [AuthGuard] // Protege esta ruta con el AuthGuard
  },
  {
    path: 'alumno/camara',
    loadChildren: () => import('./camara/camara.module').then( m => m.CamaraPageModule),
    canActivate: [AuthGuard] // Protege esta ruta con el AuthGuard
  },
  {
    path: 'p401',
    loadChildren: () => import('./p401/p401.module').then( m => m.P401PageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./p404/p404.module').then( m => m.P404PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
