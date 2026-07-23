import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

type DataType = {
  title: string;
  href: string;
  icon: string;
  svg: string;
};
@Component({
  selector: 'app-include-headers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './include-headers.html',
  styleUrl: './include-headers.scss',
})
export class IncludeHeaders {
  isOpen = false;
  isScrolled = false;

  navItems: DataType[] = [
    { title: 'صفحه اصلی', href: '/', icon: '/img/homeHover.svg', svg: '' },
    {
      title: 'ارکان مرکز',
      href: '/',
      icon: '/img/shopping-bagHover.svg',
      svg:
        '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" class="arrow-header">\n' +
        '                        <path d="M5.64558 6.70007C5.69206 6.74694 5.74736 6.78413 5.80829 6.80952C5.86922 6.8349 5.93457 6.84797 6.00058 6.84797C6.06658 6.84797 6.13194 6.8349 6.19287 6.80952C6.2538 6.78413 6.3091 6.74694 6.35558 6.70007L8.64558 4.40508C8.69206 4.35821 8.74736 4.32101 8.80829 4.29563C8.86922 4.27025 8.93457 4.25718 9.00058 4.25718C9.06659 4.25718 9.13194 4.27025 9.19287 4.29563C9.2538 4.32101 9.3091 4.35821 9.35558 4.40508C9.44871 4.49876 9.50098 4.62548 9.50098 4.75758C9.50098 4.88967 9.44871 5.01639 9.35558 5.11007L7.06058 7.40507C6.77933 7.68597 6.39808 7.84375 6.00058 7.84375C5.60308 7.84375 5.22183 7.68597 4.94058 7.40507L2.64558 5.11007C2.55321 5.01694 2.50113 4.89124 2.50058 4.76008C2.5002 4.69427 2.51281 4.62904 2.53769 4.56812C2.56257 4.5072 2.59924 4.4518 2.64558 4.40508C2.69206 4.35821 2.74736 4.32101 2.80829 4.29563C2.86922 4.27025 2.93457 4.25718 3.00058 4.25718C3.06658 4.25718 3.13194 4.27025 3.19287 4.29563C3.2538 4.32101 3.3091 4.35821 3.35558 4.40508L5.64558 6.70007Z" fill="#C1C1C1"></path>\n' +
        '                    </svg>',
    },
    { title: 'ثبت ایده', href: '/', icon: '/img/buildingsHover.svg', svg: '' },
    { title: 'محصولات', href: '/', icon: '/img/CSVHover.svg', svg: '' },
    { title: 'تیم ها', href: '/', icon: '/img/medal-starHover.svg', svg: '' },
    { title: 'رزرو', href: '/', icon: '/img/33Hover.svg', svg: '' },
    { title: 'درباره ما', href: '/', icon: '/img/33Hover.svg', svg: '' },
  ];

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  closeMenu(): void {
    this.isOpen = false;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }
}
