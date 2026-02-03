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

        <upov-header [navigation]="navigation"></upov-header>
      </section>

      <!-- ================= Hero (INPUT MODE) ================= -->
      <section class="section">
        <h2>Hero Section – Signal Inputs</h2>

        <upov-hero-section
          [title]="heroTitle"
          [subtitle]="heroSubtitle">
        </upov-hero-section>
      </section>

      <!-- ================= Hero (PROJECTION MODE) ================= -->
      <section class="section">
        <h2>Hero Section – Content Projection</h2>

        <upov-hero-section class="gradient-bg-lime-forest gradient-opacity-30">
          <h1 hero-title>
            GENIE <em>Database</em>
          </h1>

          <p hero-subtitle>
            Search by <strong>specie</strong> or <strong>authority</strong>.<br/>
            <span class="upov-text-small upov-text-muted">
              You can search in English, German, Spanish or French.
            </span>
          </p>
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
  `,
})
export class OrganismsPage {

  heroTitle = 'Welcome to UPOV';
  heroSubtitle =
    'The International Union for the Protection of New Varieties of Plants';

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
