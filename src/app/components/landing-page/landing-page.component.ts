import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: false,

  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit {
  showConfetti = true;
  ShowMainText = true;
  priyo: string = 'priyu`S';
  showSecondContent: boolean = false;
  constructor(private router: Router) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.showConfetti = false;
      console.log('cofette removed');
      // this.router.navigateByUrl('second-page');
      setTimeout(() => {
        this.showSecondContent = true;
      }, 1000);
    }, 7000);
  }
}
