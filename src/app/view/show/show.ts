import { Component } from '@angular/core';
import { ShowBanner } from './show-banner/show-banner';
import { ShowFacilities } from './show-facilities/show-facilities';
import { ShowPublished } from './show-published/show-published';
import { ShowVersion } from './show-version/show-version';

@Component({
  selector: 'app-show',
  imports: [ShowBanner, ShowFacilities, ShowPublished, ShowVersion],
  templateUrl: './show.html',
  styleUrl: './show.scss',
})
export class show {}
