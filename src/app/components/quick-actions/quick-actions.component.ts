import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface QuickAction {
  id: string;
  icon: string;
  tooltip: string;
  action: () => void;
}

@Component({
  selector: 'app-quick-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.scss']
})
export class QuickActionsComponent {
  isExpanded = false;
  
  actions: QuickAction[] = [
    {
      id: 'search',
      icon: '🔍',
      tooltip: 'Search resources',
      action: () => this.searchResources()
    },
    {
      id: 'favorites',
      icon: '⭐',
      tooltip: 'View favorites',
      action: () => this.viewFavorites()
    },
    {
      id: 'recent',
      icon: '🕐',
      tooltip: 'Recent items',
      action: () => this.viewRecent()
    },
    {
      id: 'random',
      icon: '🌾',
      tooltip: 'Daily farming tip',
      action: () => this.getDailyTip()
    }
  ];

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  executeAction(action: QuickAction): void {
    action.action();
  }

  private searchResources(): void {
    console.log('Opening search...');
  }

  private viewFavorites(): void {
    console.log('Viewing favorites...');
  }

  private viewRecent(): void {
    console.log('Viewing recent items...');
  }

  private getDailyTip(): void {
    const tips = [
      'Check soil moisture before watering to avoid overwatering',
      'Rotate crops annually to maintain soil health',
      'Consider companion planting to naturally deter pests',
      'Test your soil pH every 2-3 years for optimal growth',
      'Mulch around plants to retain moisture and suppress weeds',
      'Monitor weather forecasts closely during planting season',
      'Keep detailed records of planting dates and yields'
    ];
    const random = tips[Math.floor(Math.random() * tips.length)];
    alert(`Today\'s farming tip: ${random}`);
  }
}