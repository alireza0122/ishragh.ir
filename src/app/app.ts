import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IncludeHeaders } from './view/layout/include-headers/include-headers';
import { IncludeFooter } from './view/layout/include-footer/include-footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IncludeHeaders, IncludeFooter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ishragh.ir');
}
