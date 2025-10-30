import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Book } from '../../interfaces/book.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BookDetailDialogComponent } from '../book-detail-dialog/book-detail-dialog.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'book-card',
  imports: [
    MatDialogModule
  ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent implements OnInit {

  private responsive = inject(BreakpointObserver);
  readonly dialog = inject(MatDialog);

  book = input<Book>();
  widthDialog = signal('');
  isSmallDevice = signal(false);
  isTabletDevice = signal(false);
  isLargeDevice = signal(false);


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



  openDialog(book: Book | undefined): void {
    this.dialog.open(BookDetailDialogComponent, {
      data: book,
      minWidth: this.setWidthDialog(),
    });
  }


  setWidthDialog(): string {
    if (this.isSmallDevice()) {
       this.widthDialog.set('80%');
    } else if (this.isTabletDevice()) {
      this.widthDialog.set('80%');
    } else {
       this.widthDialog.set('1200px');
    }
    return this.widthDialog();
  }


  }
