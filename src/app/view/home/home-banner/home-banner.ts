import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { gsap } from 'gsap';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.html',
  styleUrl: './home-banner.scss',
})
export class HomeBanner implements AfterViewInit {
  @ViewChild('logoSvg')
  logoSvg!: ElementRef<SVGSVGElement>;

  ngAfterViewInit(): void {
    this.animateLogo();
  }

  private animateLogo(): void {
    const svg = this.logoSvg.nativeElement;
    const paths = svg.querySelectorAll('path');

    gsap.set(paths, {
      opacity: 0,
      scale: 0.8,
      y: -20,
      transformOrigin: 'center center',
    });

    const tl = gsap.timeline();

    tl.fromTo(
      svg,
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
      },
    );

    tl.to(paths, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0,
      stagger: {
        each: 0.06,
      },
      ease: 'back.out(1.8)',
    });

    tl.to(
      svg,
      {
        filter: 'drop-shadow(0 0 12px rgba(39,189,188,.25))',
        duration: 5,
      },
      '-=0.3',
    );

    gsap.to(svg, {
      scale: 1.03,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      transformOrigin: 'center center',
    });
  }
}
