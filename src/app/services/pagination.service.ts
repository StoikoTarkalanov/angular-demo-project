import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PaginationService {
    constructor(private httpclient: HttpClient) { }
    serverURL = 'https://dummyjson.com/users';

    configureOptions() {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return { headers };
    }

    getPagination(): Observable<any> {
        return this.httpclient.get(this.serverURL);
    }

    getUserById(id: string | null): Observable<any> {
        return this.httpclient.get(`${this.serverURL}/${id}`);
    }

    updateUser(id: string, content: { name: string, age: string, gender: string }): Observable<any> {
        return this.httpclient.put(`${this.serverURL}/${id}`, content, this.configureOptions());
    }
}