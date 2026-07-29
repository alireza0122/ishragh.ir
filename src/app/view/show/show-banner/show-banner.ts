import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-show-banner',
  imports: [],
  templateUrl: './show-banner.html',
  styleUrl: './show-banner.scss',
})
export class ShowBanner implements AfterViewInit {


  ngAfterViewInit(): void {
    gsap.fromTo(
      '.gsapP',
      {
        x: 50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gsapP',
          start: 'top 50%',
          toggleActions: 'play reverse play reverse',
        },
      },
    );
    // gsap.from('.gsapP', {
    //   x: 5,
    //   opacity: 0.5,
    //   duration: 1.5,
    //   ease: 'power3.out',
    //   scrollTrigger: {
    //     trigger: '.gsapP',
    //     start: 'top 10%',
    //     toggleActions: 'play reverse play reverse',
    //   },
    // });
  }


}
