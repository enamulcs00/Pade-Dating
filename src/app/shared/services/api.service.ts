import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders } from "@angular/common/http";
import { environment } from '../../../environments/environment'
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public messageSource = new BehaviorSubject('d');
    public  currentMessage = this.messageSource.asObservable();

  
  onUpdateUser: Subject<any> = new Subject();

  constructor(
    private http: HttpClient,

  ) { }

  // changeProfileImage(msg) {
	// 	this.profileImage.emit(msg);
	// }

	// changeLoginUserdata(msg) {
	// 	this.userData.emit(msg);
	// }

  checkToken(body) {
    return this.http.post(environment.apiUrl + "checkToken", body);
  }

  changeMessage(messageSource: any) {
    this.messageSource.next(messageSource)
}

  sendToken(token: string) {
    sessionStorage.setItem("token", token);
  }

  getToken() {
    return sessionStorage.getItem("token");
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }
  
  logIn(body) {
    return this.http.post(environment.apiUrl + "login", body);
  }

  logOut(body) {
    return this.http.post(environment.apiUrl + "logOut", body);
  }

  forgotPassword(body) {
    return this.http.post(environment.apiUrl + "forgotPassword", body);
  }

  changePassword(body) {
    return this.http.post(environment.apiUrl + "changePassword", body);
  }
  
  getProfile() {
    return this.http.get(environment.apiUrl + "getProfile");
  }

  updateProfile(body) {
    return this.http.put(environment.apiUrl + "updateProfile", body);
  }
  
  users() {
    return this.http.get(environment.apiUrl + "users");
  }
  
  getServiceprovider() {
    return this.http.get(environment.apiUrl + "getServiceprovider");
  }

  updateUser(id) {
    return this.http.put(environment.apiUrl + "updateProfile", id);
  }

  unblockUsers(id){
    return this.http.post(environment.apiUrl + "unblockUsers", id);
  }
  
  inactiveUsers(id){
    return this.http.put(environment.apiUrl + "inactiveUsers", id);
  }

}
