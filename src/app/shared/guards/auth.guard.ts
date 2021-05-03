import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
	menuItemArray: any;
	backtoDashboard: boolean;
	adminData: any;
	constructor(
		private router: Router,
		private toastr: ToastrService,
		private api: ApiService,

	) { }

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (this.api.isLoggedIn()) {
			return true;
		}
		else {
			this.router.navigate(['/login']);
		}
	}
	// canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
	//     if (!localStorage.getItem('admin') && (state.url !== '/' && state.url !== '/forgotPassword'
	//         && state.url !== '/changePassword' && state.url !== '/reset-password')) {
	//         this.router.navigateByUrl('/');
	//         return false;
	//     } else if (localStorage.getItem('admin')) {
	//         this.adminData = JSON.parse(localStorage.getItem('admin'));
	//         if ((this.adminData.role.slug != 'super_admin') && (this.adminData.role.permissions.indexOf(next.data.key) == -1)) {
	//             this.toastr.warning(`You don't have access to this page`)
	//             this.router.navigateByUrl('/dashboard');
	//             return false
	//         }

	//         if (state.url === '/') {
	//             this.router.navigateByUrl('/dashboard');
	//         }
	//         if (localStorage.getItem('menuItemArray')) {
	//             const checkUrl = state.url.split('/');
	//             const url = checkUrl[1];
	//             this.backtoDashboard = true;
	//             this.menuItemArray = JSON.parse(localStorage.getItem('menuItemArray'));
	//             for (const i of this.menuItemArray) {
	//                 if ((i.state === url) && i.value === true) {
	//                     if (this.adminData.role === 'subAdmin' && checkUrl && checkUrl.length && checkUrl.length > 2) {
	//                         if (i.create === false && (checkUrl[2]).includes('add-')) {
	//                             this.backtoDashboard = true;
	//                         } else if (i.update === false && (checkUrl[2]).includes('edit-')) {
	//                             this.backtoDashboard = true;
	//                         } else {
	//                             this.backtoDashboard = false;
	//                         }
	//                     } else {
	//                         this.backtoDashboard = false;
	//                     }
	//                     break;
	//                 }
	//             }

	//             if (this.backtoDashboard === true) {
	//                 this.router.navigateByUrl('/dashboard');
	//             }
	//         }
	//     }

	//     return true;
	// }
}