// src/app/guards/auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.isAuthenticatedUser()) {
        if (state.url.startsWith("/alumno") && this.authService.getUserType()==="alumno"){  
          return true;
        }

        if (state.url.startsWith("/profesor") && this.authService.getUserType()==="profesor"){  
          console.log("hola profe")
          return true;
        }
      this.router.navigate(['/p401']);
      return false;
    } else {
      // Redirige al usuario a la página de no autorizado si no está auntenticado
      this.router.navigate(['/p401']);
      return false;
    }

  }
}
