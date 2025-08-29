import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('fadeInUp', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out')
      ])
    ])
  ]
})
export class HeroComponent implements OnInit {
  subtitle = 'Your Agricultural Resource Hub';
  animationState = 'in';

  ngOnInit(): void {
    this.startGradientAnimation();
  }

  private startGradientAnimation(): void {
    const hero = document.querySelector('.hero-section') as HTMLElement;
    if (hero) {
      let position = 0;
      setInterval(() => {
        position = (position + 1) % 360;
        hero.style.background = `linear-gradient(${position}deg, 
          var(--color-primary), 
          var(--color-secondary), 
          var(--color-accent))`;
      }, 50);
    }
  }
}