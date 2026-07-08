import { Component, HostListener } from '@angular/core';

interface NavItem {
  title: string;
  href: string;
  icon: string;
}
@Component({
  selector: 'app-include-headers',
  imports: [],
  templateUrl: './include-headers.html',
  styleUrl: './include-headers.scss',
})
export class IncludeHeaders {
  isOpen = false;
  isScrolled = false;

  navItems: NavItem[] = [
    { title: 'خانه', href: '/', icon: '/img/homeHover.svg' },
    { title: 'محصولات', href: '/', icon: '/img/shopping-bagHover.svg' },
    { title: 'شرکت‌ها', href: '/', icon: '/img/buildingsHover.svg' },
    { title: 'csv', href: '/', icon: '/img/CSVHover.svg' },
    { title: 'اعتباربخشی', href: '/', icon: '/img/medal-starHover.svg' },
    { title: 'قرارداد 3جانبه', href: '/', icon: '/img/33Hover.svg' },
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
