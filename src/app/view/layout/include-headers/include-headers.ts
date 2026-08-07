import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

type DataType = {
  title: string;
  href: string;
  icon: string;
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
    { title: 'صفحه اصلی', href: '/', icon: '' },
    {
      title: 'ارکان مرکز',
      href: '/',
      icon: '',
    },
    { title: 'ثبت ایده', href: '/submit', icon: '' },
    { title: 'محصولات', href: '/show', icon: '' },
    { title: 'تیم ها', href: '/team', icon: '' },
    { title: 'رزرو', href: '/visit', icon: '' },
    { title: 'درباره ما', href: '/abouts', icon: '' },
  ];
  navItemsMobile: DataType[] = [
    { title: '', href: '/', icon: '' },
    { title: 'ثبت ایده', href: '/submit', icon: '' },
    { title: 'محصولات', href: '/show', icon: '' },
    { title: 'تیم ها', href: '/team', icon: '' },
    { title: 'رزرو', href: '/visit', icon: '' },
    { title: '', href: '/abouts', icon: '' },
  ];

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
  isSubMenuOpen = false;

  toggleSubMenu(): void {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }
  closeMenu(): void {
    this.isOpen = false;
    this.isSubMenuOpen = false;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 58;
  }
}
