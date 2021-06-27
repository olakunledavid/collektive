import { Component, OnInit } from '@angular/core';
import { INotification } from 'src/app/shared/interfaces/ipage-data';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  notifications: INotification = {
    joinRequest: [
      {
        name: 'Tweeb Less',
        requestDate: new Date(),
        projectName: 'Describing The Landmines in Africa',
      },
      {
        name: 'Desvi Matum',
        requestDate: new Date(),
        projectName: 'Climate change and the Sahara',
      },
    ],
    // followRequest: [
    //   { name: 'Shokan Bria', requestDate: new Date() },
    //   { name: 'Maria Gomez', requestDate: new Date() },
    // ],
  };
  constructor() {}

  ngOnInit(): void {}
}
