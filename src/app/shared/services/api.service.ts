import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from '../../../environments/environment'
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	public messageSource = new BehaviorSubject('d');
	public currentMessage = this.messageSource.asObservable();


	onUpdateUser: Subject<any> = new Subject();

	constructor(private router: Router,
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

	getUserById(id) {
		return this.http.get(environment.apiUrl + "users/" + id,);
	}

	// users() {
	// 	return this.http.get(environment.apiUrl + "users");
	// }

	// users(page, count, search, isBlocked) {
	// 	return this.http.get(environment.apiUrl + "users/?page=" + page + "&count=" + count+ "&search=" +search+ "&isBlocked=" +isBlocked);
	// }

	users(params: any) {
        return this.http.get<any>(`${environment.apiUrl}users${this.obj_to_query(params)}`)
    }
    obj_to_query(obj) {
        var parts = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
            }
        }
        return "?" + parts.join('&');
    }

	getServiceprovider() {
		return this.http.get(environment.apiUrl + "getServiceprovider");
	}

	updateUser(id) {
		return this.http.put(environment.apiUrl + "updateUser", id);
	}

	deleteUser(id) {
		return this.http.delete(environment.apiUrl + "users/" + id);
	}
	blockUsers(id, body) {
		return this.http.post(environment.apiUrl + "blockUsers/" + id, body);
	}

	inactiveUsers(id) {
		return this.http.put(environment.apiUrl + "inactiveUsers", id);
	}
	postApi(endPoint, body) {
		return this.http.post(environment.apiUrl + endPoint, body);
	}
	putApi(endPoint, body) {
		return this.http.put(environment.apiUrl + endPoint, body);
	}
	getApi(url) {
		return this.http.get(environment.apiUrl + url);
	}
	deleteApi(url) {
		return this.http.delete(environment.apiUrl + url);
	}
	getUsers(count, page, search, status) {
		let param = new HttpParams;
		param = param.append('limit', count);
		param = param.append('page', page)
		//console.log(status);
		if (search != null) {
			param = param.append('search', search)
		}


		if (status === 1) {
			param = param.append('status', status)
		}
		else if (status === 0) {
			param = param.append('status', status)
		}


		return this.http.get(environment.apiUrl + 'users', { params: param });
	}
	logout() {
		sessionStorage.clear();
		sessionStorage.removeItem('admin');
		this.router.navigate(['/login']);
	}
	getToday(): string {
		return new Date().toISOString().split('T')[0]
	}
	getCurrency() {
		return this.http.get<any>('assets/currencyUnit.json')
	}
	AlphabetOnly(event) {

		let pattAlpha = /^([a-zA-Z ])*$/;

		let resultAlpha = pattAlpha.test(event.key);

		return resultAlpha;

	}

	getCountries() {
		return this.http.get(environment.apiUrl + "getCountries");
	}

	packages(body) {
		return this.http.post(environment.apiUrl + "packages", body);
	}

	getPackagesById(id) {
		return this.http.get(environment.apiUrl + "packages/" + id);
	}

	updatePackage(id, body) {
		return this.http.put(environment.apiUrl + "packages/" + id, body);
	}

	getAllPackages(page, count) {
		return this.http.get(environment.apiUrl + "packages/?page=" + page + "&count=" + count);
	}

	deletePackage(id) {
		return this.http.delete(environment.apiUrl + "packages/" + id);
	}
}
