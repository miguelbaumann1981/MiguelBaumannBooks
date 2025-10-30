import { Component, inject, OnInit, signal } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Book } from '../../interfaces/book.interface';
import { SalesChannelComponent } from '../sales-channel/sales-channel.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-detail-dialog',
  imports: [
    SalesChannelComponent,
    MatButtonModule,
    MatIconModule,
    CommonModule
],
  templateUrl: './book-detail-dialog.component.html',
  styleUrl: './book-detail-dialog.component.scss',
})
export class BookDetailDialogComponent implements OnInit {

  private responsive = inject(BreakpointObserver);
  readonly dialogRef = inject(MatDialogRef<BookDetailDialogComponent>);
  readonly data = inject<Book>(MAT_DIALOG_DATA);

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



  closeDialog(): void {
    this.dialogRef.close();
  }


 }
