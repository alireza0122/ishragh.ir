import { Component } from '@angular/core';
import { AboutsBanner } from './abouts-banner/abouts-banner';
import { AboutsMain } from './abouts-main/abouts-main';

@Component({
  selector: 'app-abouts',
  imports: [AboutsBanner, AboutsMain],
  templateUrl: './abouts.html',
  styleUrl: './abouts.scss',
})
export class Abouts {}
