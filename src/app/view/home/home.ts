import { Component } from '@angular/core';
import { HomeBanner } from './home-banner/home-banner';
import { SectionTitle } from '../shared/section-title/section-title';
import { HomePillars } from './home-pillars/home-pillars';
import { HomeNews } from './home-news/home-news';
import { HomeDashboard } from './home-dashboard/home-dashboard';
import { HomeAmar } from './home-amar/home-amar';
import { HomeEscape } from './home-escape/home-escape';

@Component({
  selector: 'app-home',
  imports: [HomeBanner, SectionTitle, HomePillars, HomeNews, HomeDashboard, HomeAmar, HomeEscape],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
