import { Component } from '@angular/core';
import { SubmitBanner } from './submit-banner/submit-banner';

@Component({
  selector: 'app-submit',
  imports: [SubmitBanner],
  templateUrl: './submit.html',
  styleUrl: './submit.scss',
})
export class Submit {}
