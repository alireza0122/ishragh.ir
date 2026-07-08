import { Component } from '@angular/core';
import { HomeBanner } from './home-banner/home-banner';
import { SectionTitle } from '../shared/section-title/section-title';
import { HomePillars } from './home-pillars/home-pillars';

@Component({
  selector: 'app-home',
  imports: [HomeBanner, SectionTitle, HomePillars],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
