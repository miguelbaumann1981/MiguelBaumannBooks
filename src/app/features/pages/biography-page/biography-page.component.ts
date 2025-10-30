import { Component } from '@angular/core';
import { TitlePageComponent } from 'src/app/shared/components/title-page/title-page.component';

@Component({
  selector: 'app-biography-page',
  imports: [
    TitlePageComponent
  ],
  templateUrl: './biography-page.component.html',
  styleUrl: './biography-page.component.scss',
})
export class BiographyPageComponent { }
