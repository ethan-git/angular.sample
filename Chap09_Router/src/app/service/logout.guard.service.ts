// logout.guard.service.ts
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class LogoutGuardService implements CanDeactivate<boolean> {

    constructor() { }

    canDeactivate(clz: any, ac: ActivatedRouteSnapshot, rs: RouterStateSnapshot): boolean {

        return window.confirm('Exit?');
    }
}