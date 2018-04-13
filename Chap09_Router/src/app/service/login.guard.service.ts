// login.guard.service.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class LoginGuardService implements CanActivate {

    constructor() { }

    // 이 메서드가 true를 리턴하면 해당 컴퍼넌트에 진입 가능, false면 진입 불가
    canActivate(ac: ActivatedRouteSnapshot, rs: RouterStateSnapshot): boolean {
        // console.log(ac);
        let check: boolean = Math.random() < 0.5;
        console.log(check);

        return check;
    }
}