import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterItem {
  title: string;
  link: string;
}

@Component({
  selector: 'app-include-footer',
  imports: [CommonModule],
  templateUrl: './include-footer.html',
  styleUrl: './include-footer.scss',
})
export class IncludeFooter {
  items: FooterItem[] = [
    { title: 'صفحه اصلی', link: '/' },
    { title: 'سه‌دال', link: '/' },
    { title: 'اخبار', link: '/' },
    { title: 'فانوس', link: '/' },
    { title: 'چارسوق', link: '/' },
    { title: 'درباره ما', link: '/' },
    { title: 'کاریزنگار', link: '/' },
    { title: 'ثبت ایده', link: '/' },
    { title: 'ورود / عضویت', link: '/' },
  ];
}
