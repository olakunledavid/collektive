import { UtilService } from 'src/app/shared/services/util.service';
import { Component, OnInit } from '@angular/core';
import { IPageData } from 'src/app/shared/interfaces/ipage-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initiate',
  templateUrl: './initiate.component.html',
  styleUrls: ['./initiate.component.css'],
})
export class InitiateComponent implements OnInit {
  step = 1;
  page: IPageData;
  initiatePageTitle = 'Start a new project';
  nextButtonName = 'Next';
  newProjectId;

  constructor(private ut: UtilService, private router: Router) {}

  ngOnInit(): void {
    this.page = JSON.parse(this.ut.store.get('pageData'));
  }

  incrementPage() {
    this.step++;
    if (this.step === 4) {
      this.initiatePageTitle = 'All done!';
      this.saveProject();
      this.nextButtonName = 'Explore';
      return;
    }

    if (this.step === 5) {
      console.log('going to explore');
      this.router.navigate(['/explore']);
    }
  }

  gotoNewProject() {
    const page = '/projects/' + this.newProjectId;
    this.router.navigate([page]);
  }

  gotoPage(page: string) {
    // bubble page to dashboard
  }

  saveProject(page?) {
    this.newProjectId = 1;
  }
}
