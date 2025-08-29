import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { NavigationHubComponent } from './components/navigation-hub/navigation-hub.component';
import { QuickActionsComponent } from './components/quick-actions/quick-actions.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeroComponent,
    NavigationHubComponent,
    QuickActionsComponent,
    ThemeSwitcherComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Artist';

  ngOnInit(): void {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
}