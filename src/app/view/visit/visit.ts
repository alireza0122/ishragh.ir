import { Component } from '@angular/core';
import { VisitMain } from './visit-main/visit-main';

@Component({
  selector: 'app-visit',
  imports: [ VisitMain],
  templateUrl: './visit.html',
  styleUrl: './visit.scss',
})
export class Visit {}
