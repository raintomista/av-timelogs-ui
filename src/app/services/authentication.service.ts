import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { appConfig } from './../app.config';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private router: Router) {}

    login(username: string, password: string){
        console.log({username: username, password: password});
        
        return this.http.post(`${appConfig.apiURL}/user/login`, { data: { username: username, password: password } })
            .map((response: Response) => {
                let user = response.json().data;
                if(user && user.token){
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('x-access-token', user.token);
                }
                return user;
            });
    }

    logout() {
        this.router.navigate(['/login']);
        localStorage.removeItem('currentUser');
    }

}