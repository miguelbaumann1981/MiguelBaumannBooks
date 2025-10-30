import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationItem } from '../../interfaces/navigation-item.interface';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'mb-header',
  imports: [
    RouterLink,
    MatIconModule,
    CommonModule,
    MatMenuModule
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  private responsive = inject(BreakpointObserver);

  navigationItems = signal<NavigationItem[]>([]);
  isSmallDevice = signal(false);

  ngOnInit(): void {

    this.responsive.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe(result => {
      if (result.matches) {
        this.isSmallDevice.set(true);
      } else {
        this.isSmallDevice.set(false);
      }
    });

    // console.log('Web ' + Breakpoints.Web);
    // console.log('WebLandscape ' + Breakpoints.WebLandscape);
    // console.log('WebPortrait ' + Breakpoints.WebPortrait);

    // console.log('Tablet ' + Breakpoints.Tablet);
    // console.log('TabletPortrait ' + Breakpoints.TabletPortrait);
    // console.log('TabletLandscape ' + Breakpoints.TabletLandscape);

    // console.log('Handset ' + Breakpoints.Handset);
    // console.log('HandsetLandscape ' + Breakpoints.HandsetLandscape);
    // console.log('HandsetPortrait ' + Breakpoints.HandsetPortrait);

    console.log('XSmall ' + Breakpoints.XSmall); //max-width: 599.98px
    console.log('Small ' + Breakpoints.Small); // min-width: 600px) and (max-width: 959.98px)
    console.log('Medium ' + Breakpoints.Medium); // min-width: 960px) and (max-width: 1279.98px
    console.log('Large ' + Breakpoints.Large); // min-width: 1280px) and (max-width: 1919.98px)
    console.log('XLarge ' + Breakpoints.XLarge); // min-width: 1920px



    this.navigationItems.set([
      { label: 'Libros', route: '/books' },
      { label: 'Biografía', route: '/biography' },
      { label: 'Vídeos', route: '/media' },
    ]);
  }


  }


