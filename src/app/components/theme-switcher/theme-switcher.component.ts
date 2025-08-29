import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Theme {
  id: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  currentTheme = 'light';
  isOpen = false;
  
  themes: Theme[] = [
    { id: 'light', name: 'Light', icon: '☀️' },
    { id: 'dark', name: 'Dark', icon: '🌙' },
    { id: 'sunset', name: 'Sunset', icon: '🌅' },
    { id: 'ocean', name: 'Ocean', icon: '🌊' }
  ];

  ngOnInit(): void {
    this.currentTheme = localStorage.getItem('theme') || 'light';
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  setTheme(themeId: string): void {
    this.currentTheme = themeId;
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('theme', themeId);
    this.isOpen = false;
  }

  getCurrentThemeIcon(): string {
    return this.themes.find(t => t.id === this.currentTheme)?.icon || '☀️';
  }
}