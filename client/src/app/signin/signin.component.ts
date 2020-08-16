import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendApiService } from '../services/backend-api.service';
import { AlertsService } from 'angular-alert-module';
import { NotificationService } from '@progress/kendo-angular-notification';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginUserForm: FormGroup;
  @ViewChild('template', { read: TemplateRef })
  public notificationTemplate: TemplateRef<any>;

  // public type: Type;

  constructor(private router: Router, private fb: FormBuilder, private notificationService: NotificationService, private backendApiService: BackendApiService, private alerts: AlertsService) {

    this.loginUserForm = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required],
    })
  }

  ngOnInit(): void {
    this.alerts.setMessage('All the fields are required', 'error');


  }

  loginUser() {
    let login = this.loginUserForm.value;

    console.log("login", login)
    let path = "user/login";
    this.backendApiService.postService(path, login).subscribe(
      data => {
        if (data["status"]) {
          this.notificationService.show({
            content: data["message"],
            hideAfter: 600,
            position: { horizontal: 'right', vertical: 'top' },
            animation: { type: 'fade', duration: 400 },
            type: { style: 'success', icon: false }
          });
          this.router.navigate(['/home']);
          localStorage.setItem('testObject', JSON.stringify(data['values']));
        }
        else {
          this.notificationService.show({
            content: data["message"],
            hideAfter: 600,
            cssClass: 'button-notification',
            position: { horizontal: 'right', vertical: 'top' },
            animation: { type: 'fade', duration: 400 },
            type: { style: 'error', icon: true }
          });
        }
      });
  }

}









// public showDefault(): void {
//   this.type = 'default';

//   this.notificationService.show({
//       content: this.notificationTemplate,
//       hideAfter: 600,
//       position: { horizontal: 'right', vertical: 'top' },
//       animation: { type: 'fade', duration: 400 },
//       type: { style: 'none', icon: false }
//   });
// }
// public showSuccess(): void {
//   this.notificationService.show({
//       content: 'Success notification',
//       hideAfter: 600,
//       position: { horizontal: 'center', vertical: 'top' },
//       animation: { type: 'fade', duration: 400 },
//       type: { style: 'success', icon: true }
//   });
// }
// public showWarning(): void {
//   this.notificationService.show({
//       content: 'Warning notification',
//       hideAfter: 600,
//       position: { horizontal: 'left', vertical: 'bottom' },
//       animation: { type: 'fade', duration: 400 },
//       type: { style: 'warning', icon: true }
//   });
// }
// public showInfo(): void {
//   this.notificationService.show({
//       content: 'Info notification',
//       hideAfter: 600,
//       position: { horizontal: 'center', vertical: 'bottom' },
//       animation: { type: 'fade', duration: 400 },
//       type: { style: 'info', icon: true }
//   });
// }
// public showError(): void {
//   this.notificationService.show({
//       content: 'Error notification',
//       hideAfter: 600,
//       position: { horizontal: 'right', vertical: 'bottom' },
//       animation: { type: 'fade', duration: 400 },
//       type: { style: 'error', icon: true }
//   });
// }