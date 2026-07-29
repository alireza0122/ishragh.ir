import { Component } from '@angular/core';
import { HomeDashboard } from '../home/home-dashboard/home-dashboard';
import { VisitMain } from './visit-main/visit-main';

@Component({
  selector: 'app-visit',
  imports: [HomeDashboard, VisitMain],
  templateUrl: './visit.html',
  styleUrl: './visit.scss',
})
export class Visit {}
