import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: false,

  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  @Input() text1: any;
  @Input() text2: any;
  @Input() text3: any;
  @Input() fontSizeContainer: any;
  @Input() lineHeight: any;
}
