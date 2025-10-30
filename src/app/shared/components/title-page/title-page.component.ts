import { Component, input } from '@angular/core';

@Component({
  selector: 'mb-title-page',
  imports: [],
  templateUrl: './title-page.component.html',
  styleUrl: './title-page.component.scss',
})
export class TitlePageComponent {

  title = input<string>('Title');

}
