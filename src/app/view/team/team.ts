import { Component } from '@angular/core';
import { TeamBanner } from './team-banner/team-banner';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [TeamBanner],
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class Team {}
