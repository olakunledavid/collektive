import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.css'],
})
export class ProjectListingComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  projectDetails(projectId: number) {
    this.router.navigate(['/projects/' + projectId]);
  }

  addNewProject() {}
}
