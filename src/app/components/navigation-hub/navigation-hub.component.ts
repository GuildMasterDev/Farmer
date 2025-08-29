import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

interface ResourceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  resources: Resource[];
}

interface Resource {
  name: string;
  url: string;
  description: string;
}

@Component({
  selector: 'app-navigation-hub',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-hub.component.html',
  styleUrls: ['./navigation-hub.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class NavigationHubComponent {
  categories: ResourceCategory[] = [
    {
      id: 'tools',
      title: 'Farm Management Tools',
      description: 'Software and apps for modern farming operations',
      icon: '🚜',
      color: '#8BC34A',
      resources: [
        { name: 'FarmLogs', url: 'https://farmlogs.com/', description: 'Farm management software' },
        { name: 'Granular', url: 'https://granular.ag/', description: 'Farm management platform' },
        { name: 'AgWorld', url: 'https://www.agworld.com/', description: 'Collaborative farm data platform' },
        { name: 'Climate FieldView', url: 'https://climate.com/', description: 'Digital farming platform' },
        { name: 'FarmERP', url: 'https://www.farmerp.com/', description: 'Agriculture ERP software' }
      ]
    },
    {
      id: 'learning',
      title: 'Educational Resources',
      description: 'Agricultural courses, guides, and research',
      icon: '📚',
      color: '#4CAF50',
      resources: [
        { name: 'Cornell CALS', url: 'https://cals.cornell.edu/', description: 'Agriculture & Life Sciences education' },
        { name: 'Purdue Extension', url: 'https://extension.purdue.edu/agriculture/', description: 'Agricultural education and resources' },
        { name: 'USDA Learning Center', url: 'https://www.usda.gov/topics/farming', description: 'Federal farming resources' },
        { name: 'FarmingFirst', url: 'https://farmingfirst.org/', description: 'Sustainable agriculture knowledge' },
        { name: 'AgriLearn', url: 'https://www.futurelearn.com/subjects/nature-and-environment-courses/agriculture', description: 'Online agriculture courses' }
      ]
    },
    {
      id: 'weather',
      title: 'Weather & Climate',
      description: 'Weather forecasting and climate data for farming',
      icon: '⛅',
      color: '#03A9F4',
      resources: [
        { name: 'Weather.gov Agriculture', url: 'https://www.weather.gov/agriculture', description: 'NOAA agricultural weather' },
        { name: 'AgWeather', url: 'https://agweather.mesonet.org/', description: 'Agricultural weather network' },
        { name: 'Farmers Almanac', url: 'https://www.farmersalmanac.com/', description: 'Long-range weather forecasts' },
        { name: 'Climate.gov', url: 'https://www.climate.gov/news-features/understanding-climate/climate-change-and-agriculture', description: 'Climate change resources' },
        { name: 'DTN Weather', url: 'https://www.dtn.com/weather/', description: 'Agricultural weather services' }
      ]
    },
    {
      id: 'marketplace',
      title: 'Markets & Trading',
      description: 'Commodity markets, equipment, and supplies',
      icon: '💰',
      color: '#FF9800',
      resources: [
        { name: 'Chicago Mercantile Exchange', url: 'https://www.cmegroup.com/markets/agriculture.html', description: 'Agricultural futures' },
        { name: 'FarmersWeb', url: 'https://www.farmersweb.com/', description: 'Wholesale marketplace' },
        { name: 'LocalHarvest', url: 'https://www.localharvest.org/', description: 'Local food marketplace' },
        { name: 'TractorHouse', url: 'https://www.tractorhouse.com/', description: 'Farm equipment marketplace' },
        { name: 'AgriSeek', url: 'https://www.agriseek.com/', description: 'Agricultural business directory' }
      ]
    },
    {
      id: 'community',
      title: 'Farming Community',
      description: 'Forums, associations, and networking',
      icon: '👥',
      color: '#795548',
      resources: [
        { name: 'AgTalk Forum', url: 'https://talk.newagtalk.com/', description: 'Farming discussion forum' },
        { name: 'Reddit r/farming', url: 'https://www.reddit.com/r/farming/', description: 'Farming community on Reddit' },
        { name: 'Young Farmers', url: 'https://www.youngfarmers.org/', description: 'Young farmer coalition' },
        { name: 'Farm Bureau', url: 'https://www.fb.org/', description: 'American Farm Bureau Federation' },
        { name: 'AgWeb Forums', url: 'https://www.agweb.com/forums', description: 'Agricultural forums' }
      ]
    },
    {
      id: 'sustainability',
      title: 'Sustainable Farming',
      description: 'Organic, regenerative, and eco-friendly practices',
      icon: '🌱',
      color: '#4CAF50',
      resources: [
        { name: 'Rodale Institute', url: 'https://rodaleinstitute.org/', description: 'Organic farming research' },
        { name: 'Sustainable Agriculture Research', url: 'https://www.sare.org/', description: 'SARE grants and education' },
        { name: 'Regeneration International', url: 'https://regenerationinternational.org/', description: 'Regenerative agriculture' },
        { name: 'IFOAM Organics', url: 'https://www.ifoam.bio/', description: 'International organic farming' },
        { name: 'Permaculture Design', url: 'https://permaculturedesign.com/', description: 'Permaculture resources' }
      ]
    },
    {
      id: 'technology',
      title: 'AgTech & Innovation',
      description: 'Precision agriculture, drones, and IoT',
      icon: '🛰️',
      color: '#9C27B0',
      resources: [
        { name: 'PrecisionAg', url: 'https://www.precisionag.com/', description: 'Precision agriculture news' },
        { name: 'AgFunder News', url: 'https://agfundernews.com/', description: 'AgTech news and insights' },
        { name: 'DroneDeploy', url: 'https://www.dronedeploy.com/solutions/agriculture/', description: 'Agricultural drone mapping' },
        { name: 'FarmBeats', url: 'https://www.microsoft.com/en-us/research/project/farmbeats-iot-agriculture/', description: 'IoT for agriculture' },
        { name: 'John Deere Operations', url: 'https://www.deere.com/en/technology-products/precision-ag-technology/', description: 'Precision farming technology' }
      ]
    },
    {
      id: 'resources',
      title: 'Seeds & Supplies',
      description: 'Seeds, fertilizers, and farming supplies',
      icon: '🌾',
      color: '#CDDC39',
      resources: [
        { name: 'Johnny Seeds', url: 'https://www.johnnyseeds.com/', description: 'Seeds and gardening supplies' },
        { name: 'Burpee Seeds', url: 'https://www.burpee.com/', description: 'Seeds and plants' },
        { name: 'FarmTek', url: 'https://www.farmtek.com/', description: 'Agricultural supplies' },
        { name: 'Growers Supply', url: 'https://www.growerssupply.com/', description: 'Greenhouse and farm supplies' },
        { name: 'Southern States', url: 'https://www.southernstates.com/', description: 'Farm and home supplies' }
      ]
    }
  ];

  selectedCategory: ResourceCategory | null = null;

  selectCategory(category: ResourceCategory): void {
    this.selectedCategory = this.selectedCategory === category ? null : category;
  }

  openResource(url: string, event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    if ((window as any).electronAPI) {
      (window as any).electronAPI.openExternal(url);
    } else {
      window.open(url, '_blank');
    }
  }
}