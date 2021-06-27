import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
})
export class LinksComponent implements OnInit {
  showingNotification = false;
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  toggleNotificationVisibility() {
    this.showingNotification = !this.showingNotification;
    setTimeout(() => {
      this.showingNotification = false;
    }, 5000);
  }
}
