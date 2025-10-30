import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { TitlePageComponent } from 'src/app/shared/components/title-page/title-page.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-media-page',
  imports: [
    TitlePageComponent,
    CommonModule
  ],
  templateUrl: './media-page.component.html',
  styleUrl: './media-page.component.scss',
})
export class MediaPageComponent implements OnInit {

  private responsive = inject(BreakpointObserver);

  isSmallDevice = signal(false);

  ngOnInit() {
    this.responsive.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe(result => {
      if (result.matches) {
        this.isSmallDevice.set(true);
      } else {
        this.isSmallDevice.set(false);
      }
    });
  }

 }
