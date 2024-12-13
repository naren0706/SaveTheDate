import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondpage',
  standalone: false,
  
  templateUrl: './secondpage.component.html',
  styleUrl: './secondpage.component.scss'
})
export class SecondpageComponent implements OnInit{
  constructor(private router:Router){}
  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigateByUrl('third-page')
    }, 7000);
  }

}
