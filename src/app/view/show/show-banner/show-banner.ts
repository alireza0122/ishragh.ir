import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-show-banner',
  imports: [],
  templateUrl: './show-banner.html',
  styleUrl: './show-banner.scss',
})
export class ShowBanner implements AfterViewInit, OnDestroy {
  private triggers: ScrollTrigger[] = [];

  ngAfterViewInit(): void {
    // کمی تاخیر تا فونت/تصاویر لود بشن و اندازه‌گیری‌های GSAP درست باشه
    requestAnimationFrame(() => {
      this.animateHero();
      this.animateProductRows();
    });
  }

  ngOnDestroy(): void {
    this.triggers.forEach((t) => t.kill());
  }

  private animateHero(): void {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out', duration: 0.9 },
    });

    tl.from('.hero-logo', { opacity: 0, y: -24 })
      .from('.hero-text p', { opacity: 0, y: 16, stagger: 0.08 }, '-=0.5')
      .from('.hero-image', { opacity: 0, scale: 0.88, x: 30 }, '-=0.6');
  }

  private animateProductRows(): void {
    const rows = gsap.utils.toArray<HTMLElement>('.product-row');

    rows.forEach((row, i) => {
      const image = row.querySelector('.product-image');
      const badge = row.querySelector('.btnM');
      const lineWrap = row.querySelector('.line-shape-wrap');
      const text = row.querySelector('.product-text');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: 'top 78%',
          toggleActions: 'play none none reverse',
        },
        defaults: { ease: 'power3.out', duration: 0.8 },
      });

      const fromImageSide = i % 2 === 0 ? 40 : -40;

      if (image) tl.from(image, { opacity: 0, scale: 0.92, x: fromImageSide });
      if (badge) tl.from(badge, { opacity: 0, y: 14 }, '-=0.5');
      if (lineWrap) {
        gsap.set(lineWrap, { transformOrigin: 'right center' });
        tl.from(lineWrap, { scaleX: 0, duration: 0.9, ease: 'power2.inOut' }, '-=0.3');
      }
      if (text) tl.from(text, { opacity: 0, y: 14 }, '-=0.4');

      if (tl.scrollTrigger) this.triggers.push(tl.scrollTrigger);
    });
  }
}
