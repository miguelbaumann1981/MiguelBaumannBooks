import { Component, inject, OnInit, signal } from '@angular/core';
import { Book } from '../../interfaces/book.interface';
import { booksData } from 'src/assets/data/books';
import { TitlePageComponent } from 'src/app/shared/components/title-page/title-page.component';
import { BookCardComponent } from '../../components/book-card/book-card.component';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'mb-books-page',
  imports: [
    TitlePageComponent,
    BookCardComponent,
    CommonModule
  ],
  templateUrl: './books-page.component.html',
  styleUrl: './books-page.component.scss',
})
export class BooksPageComponent implements OnInit {

  private responsive = inject(BreakpointObserver);

  content = signal<Book[]>(booksData);
  isSmallDevice = signal(false);
  isTabletDevice = signal(false);


  ngOnInit(): void {
    this.responsive.observe(Breakpoints.XSmall).subscribe(result => {
      if (result.matches) {
        this.isSmallDevice.set(true);
      } else {
        this.isSmallDevice.set(false);
      }
    });

    this.responsive.observe(Breakpoints.Small).subscribe(result => {
      if (result.matches) {
        this.isTabletDevice.set(true);
      } else {
        this.isTabletDevice.set(false);
      }
    });
  }

 }
