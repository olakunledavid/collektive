import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  page = {
    current: 'signIn',
    loading: false,
  };
  pages = {
    signIn: 'signIn',
    signUp: 'signUp',
  };
  constructor() {}

  ngOnInit(): void {}

  changePage(page: string) {
    this.page.loading = true;
    setTimeout(() => {
      this.page.current = page;
      this.page.loading = false;
    }, 1000);
  }
}
