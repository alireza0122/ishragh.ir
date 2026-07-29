import { Component, input } from '@angular/core';

@Component({
  selector: 'app-abouts-title',
  imports: [],
  templateUrl: './abouts-title.html',
  styleUrl: './abouts-title.scss',
})
export class AboutsTitle {
  title = input<String>();
}
