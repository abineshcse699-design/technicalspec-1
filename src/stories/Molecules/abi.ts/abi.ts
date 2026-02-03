import { Component } from '@angular/core';
import {
  Header,
  HeaderNav,
  HeroSection,
  Footer,
  type HeaderNavigationItem,
} from 'upov-ui';

@Component({
  selector: 'app-organisms',
  standalone: true,
  imports: [
    Header,
    HeaderNav,
    HeroSection,
    Footer,
  ],
  template: `
    <div class="grid-container">
      <h1>Organisms</h1>

      <!-- ================= Header ================= -->
      <section class="section">
        <h2>Header</h2>

        <upov-header [navigation]="navigation">
        </upov-header>
      </section>

      <!-- ================= Hero Section ================= -->
      <section class="section">
        <h2>Hero Section</h2>

        <upov-hero-section
          title="Welcome to UPOV"
          subtitle="The International Union for the Protection of New Varieties of Plants">
        </upov-hero-section>
      </section>

      <!-- Hero without subtitle -->
      <section class="section">
        <h3>Hero – Title Only</h3>

        <upov-hero-section
          title="Plant Variety Database">
        </upov-hero-section>
      </section>

      <!-- ================= Footer ================= -->
      <section class="section">
        <h2>Footer</h2>

        <upov-footer></upov-footer>
      </section>
    </div>
  `,
  styles: `
    .section {
      margin-bottom: 2.5rem;
    }

    h1 {
      margin-bottom: 1.5rem;
    }

    h2 {
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid var(--color-border, #e0e0e0);
    }

    h3 {
      margin: 1rem 0;
    }
  `,
})
export class OrganismsPage {

  navigation: HeaderNavigationItem[] = [
    { label: 'Home', link: '/' },
    {
      label: 'Varieties',
      link: '/varieties',
      children: [
        { label: 'Search', link: '/varieties/search' },
        { label: 'Browse by genus', link: '/varieties/genus' },
        { label: 'New applications', link: '/varieties/new' },
      ],
    },
    {
      label: 'Members',
      link: '/members',
      children: [
        { label: 'Member states', link: '/members/states' },
        { label: 'Authorities', link: '/members/authorities' },
      ],
    },
    { label: 'Resources', link: '/resources' },
    { label: 'Contact', link: '/contact' },
  ];
}
