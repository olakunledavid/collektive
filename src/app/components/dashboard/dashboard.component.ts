import { Component, OnInit } from '@angular/core';
import { IPageData } from 'src/app/shared/interfaces/ipage-data';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  page: IPageData = {
    currentPage: 'initiate',
    pages: {
      initiateProject: 'initiate',
      explore: 'explore',
      library: 'library',
      projectWall: 'project-wall',
    },
  };
  constructor(public authService: AuthService, private ut: UtilService) {}

  changePage(page: string) {
    this.page.currentPage = page;
    this.ut.store.set('lastVisited', page);
  }

  setPage() {
    // set current page to the last visited
    const lastVisited = this.ut.store.get('lastVisited');
    if (lastVisited !== null) {
      this.changePage(lastVisited);
      return;
    }

    // Check if first time
    const isFirstTime = JSON.parse(this.ut.store.get('isFirstTime'));
    // if first time
    if (isFirstTime === null) {
      this.changePage(this.page.pages.initiateProject);
      this.ut.store.set('isFirstTime', false);

      // store pages for use in other pages
      this.storePages();
      return;
    }

    this.changePage(this.page.pages.explore);
  }

  ngOnInit(): void {
    // for resetting page values from local storage
    // this.ut.store.del('lastVisited');
    // this.ut.store.del('isFirstTime');

    this.setPage();
  }

  storePages() {
    // store pages for use later
    this.ut.store.set('pageData', JSON.stringify(this.page));
  }
}
