import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient) { }

        signup(email: string, password: string) {
            return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBnfrsf5JOo14yNh6w0MxPZQZ4ndhy8rxE',
            {
                email: email,
                password: password,
                returnSecureToken: true
            });
        }
    }