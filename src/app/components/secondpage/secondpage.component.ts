import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-secondpage',
  standalone: false,

  templateUrl: './secondpage.component.html',
  styleUrl: './secondpage.component.scss',
})
export class SecondpageComponent implements OnInit {
  showthirdContent = false;
  constructor() {}
  ngOnInit(): void {
    setTimeout(() => {
      // this.router.navigateByUrl('third-page')
      this.showthirdContent = true;
    }, 7000); // 7000
  }
}
