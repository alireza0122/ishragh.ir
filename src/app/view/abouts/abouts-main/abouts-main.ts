import { Component } from '@angular/core';
import { AboutsTitle } from '../../shared/abouts-title/abouts-title';

@Component({
  selector: 'app-abouts-main',
  imports: [AboutsTitle],
  templateUrl: './abouts-main.html',
  styleUrl: './abouts-main.scss',
})
export class AboutsMain {
  openIndex: number | null = 0;

  toggleAnswer(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
