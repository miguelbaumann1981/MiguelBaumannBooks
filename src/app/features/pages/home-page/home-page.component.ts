import { Component, inject, OnInit, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mb-home-page',
  imports: [
    CommonModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {

  private responsive = inject(BreakpointObserver);

  isSmallDevice = signal(false);

  ngOnInit(): void {
    this.responsive.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe(result => {
      if (result.matches) {
        this.isSmallDevice.set(true);
      } else {
        this.isSmallDevice.set(false);
      }
    });
  }

}
