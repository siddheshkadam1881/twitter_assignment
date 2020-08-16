import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { AlertsService } from 'angular-alert-module';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public profileData;
  constructor(private router: Router, private notificationService: NotificationService, private backendApiService: BackendApiService) {

  }

  ngOnInit(): void {
    this.getAllPost();
    this.profileData = JSON.parse(localStorage.getItem("testObject"));
  }

  getAllPost() {
    let path = "post/postlist";
    this.backendApiService.postService(path, "").subscribe(
      data => {
        if (data["status"]) {
          console.log("data", data)
          this.notificationService.show({
            content: data["message"],
            hideAfter: 600,
            position: { horizontal: 'right', vertical: 'top' },
            animation: { type: 'fade', duration: 400 },
            type: { style: 'success', icon: false }
          });
          this.router.navigate(['/home']);
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

  submit(twitter) {
    console.log("twittertwittertwittertwitter", twitter)
  }

}
