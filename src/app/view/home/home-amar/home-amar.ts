import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home-amar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-amar.html',
  styleUrl: './home-amar.scss',
})
export class HomeAmar implements AfterViewInit, OnDestroy {
  @ViewChild('statsSection') statsSection!: ElementRef<HTMLElement>;
  @ViewChild('education') education!: ElementRef<HTMLElement>;
  @ViewChild('team') team!: ElementRef<HTMLElement>;
  @ViewChild('company') company!: ElementRef<HTMLElement>;

  private scrollTrigger?: ScrollTrigger;
  private tweens: gsap.core.Tween[] = [];

  ngAfterViewInit(): void {
    this.scrollTrigger = ScrollTrigger.create({
      trigger: this.statsSection.nativeElement,
      start: 'top 80%',
      end: 'bottom 20%',
      onEnter: () => this.animateCounters(),
      onEnterBack: () => this.animateCounters(),
      onLeave: () => this.resetCounters(),
      onLeaveBack: () => this.resetCounters(),
    });
  }

  ngOnDestroy(): void {
    this.scrollTrigger?.kill();
    this.tweens.forEach((t) => t.kill());
  }

  private animateCounters(): void {
    this.tweens.forEach((t) => t.kill());
    this.tweens = [
      this.countUp(this.education.nativeElement, 34067),
      this.countUp(this.team.nativeElement, 151),
      this.countUp(this.company.nativeElement, 12),
    ];
  }

  private resetCounters(): void {
    this.tweens.forEach((t) => t.kill());
    this.setText(this.education.nativeElement, 0);
    this.setText(this.team.nativeElement, 0);
    this.setText(this.company.nativeElement, 0);
  }

  private countUp(el: HTMLElement, target: number): gsap.core.Tween {
    const counter = { value: 0 };

    return gsap.to(counter, {
      value: target,
      duration: 0.4 ,
      ease: 'power3.out',
      onUpdate: () => {
        this.setText(el, Math.floor(counter.value));
      },
    });
  }

  private setText(el: HTMLElement, value: number): void {
    el.textContent = value.toLocaleString('fa-IR') + ' +';
  }
}
