import { Component } from '@angular/core';
import { ShowBanner } from './show-banner/show-banner';
import { ShowFacilities } from './show-facilities/show-facilities';
import { ShowPublished } from './show-published/show-published';
import { ShowVersion } from './show-version/show-version';
import { ShowQuestions } from './show-questions/show-questions';

@Component({
  selector: 'app-show',
  imports: [ShowBanner, ShowFacilities, ShowPublished, ShowVersion, ShowQuestions],
  templateUrl: './show.html',
  styleUrl: './show.scss',
})
export class show {}
