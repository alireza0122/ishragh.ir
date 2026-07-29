import { Component } from '@angular/core';
import { TeamBanner } from './team-banner/team-banner';
import { TeamMember } from './team-member/team-member';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [TeamBanner, TeamMember],
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class Team {}
