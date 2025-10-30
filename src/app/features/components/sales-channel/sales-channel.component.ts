import { Component, input } from '@angular/core';

@Component({
  selector: 'sales-channel',
  imports: [],
  templateUrl: './sales-channel.component.html',
  styleUrl: './sales-channel.component.scss',
})
export class SalesChannelComponent {

  amazonLink = input<string>();
  bubokLink = input<string>();

  navigateTo(channel: string): void {
    if (channel === 'amazon' && this.amazonLink) {
      window.open(this.amazonLink(), '_blank');
    } else if (channel === 'bubok' && this.bubokLink) {
      window.open(this.bubokLink(), '_blank');
    }
  }

}
