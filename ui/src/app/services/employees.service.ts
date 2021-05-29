import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Employees } from '../models/employee';

@Injectable()
export class EmployeesService {
    url:string = environment.apiEndPoint;
    constructor(private httpClient: HttpClient) { }
    
    getEmployees(): Observable<Employees[]> {
        return this.httpClient.get<Employees[]>(`${this.url}/employees`);
    }
}