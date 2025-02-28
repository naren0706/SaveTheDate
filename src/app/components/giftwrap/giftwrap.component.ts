import { Component } from '@angular/core';

@Component({
  selector: 'app-giftwrap',
  standalone: false,

  templateUrl: './giftwrap.component.html',
  styleUrl: './giftwrap.component.scss',
})
export class GiftwrapComponent {
  viewInnerPage = false;
  middleContainerWidth = '100vw';
  middleContainerbackgroundColor = 'var(--secondary-color)';
  middleContainerheight = '10vh';
  contentBorder = '3rem double var(--primary-color)';
  clicktext: string = 'Click Me';
  reduceWidth() {
    this.middleContainerWidth = '15rem';
    this.middleContainerbackgroundColor = 'var(--primary-color)';
    this.clicktext = '';
    setTimeout(() => {
      this.middleContainerheight = '0px';
    }, 1000);
    setTimeout(() => {
      this.contentBorder = '300rem double var(--primary-color)';
    }, 1500);
    setTimeout(() => {
      this.viewInnerPage = true;
    }, 3500);
  }
}
