import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-show-questions',
  imports: [],
  templateUrl: './show-questions.html',
  styleUrl: './show-questions.scss',
})
export class ShowQuestions implements AfterViewInit {
  isOpen = false;

  toggleAnswer() {
    this.isOpen = !this.isOpen;
  };

  ngAfterViewInit(): void {
    gsap.from('.faq-list', {
      y: -40,
      opacity: 0.5,
      duration: 0.1,
      ease: 'power3.out',

      scrollTrigger: {
        trigger: '.faq-list',
        start: 'top 60%',
        toggleActions: 'play reverse play reverse',
      },
    });
  }
}
