import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  private apiUrl = 'http://localhost:3000/api/sign1'; // Update with your backend API URL

  constructor(private http: HttpClient) {}
  private signupResponseData: any;
  signUp(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }

  getSignupResponseData(): any {
    return this.signupResponseData;
  }

  // Method to save the response data
  setSignupResponseData(responseData: any): void {
    this.signupResponseData = responseData;
  }


}
