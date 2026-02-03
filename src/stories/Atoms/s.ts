import { Component } from '@angular/core';
import {
  Header,
  HeaderNav,
  HeroSection,
  Footer,
  SearchInput,
  Button,
  type HeaderNavigationItem,
  type ToggleOption,
  type LinkItem,
} from 'upov-ui';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-organisms',
  standalone: true,
  imports: [
    Header,
    HeaderNav,
    HeroSection,
    Footer,
    SearchInput,
    Button,
    MatButton,
  ],
  template: `
    <div class="page-container">

      <h1>Organisms</h1>

      <!-- ================= HEADER ================= -->
      <section class="section">
        <h2>Header – Default</h2>
        <upov-header [navigation]="navigation"></upov-header>
      </section>

      <section class="section">
        <h2>Header – Without Navigation</h2>
        <upov-header [navigation]="[]"></upov-header>
      </section>

      <!-- ================= HERO – INPUT ONLY ================= -->
      <section class="section">
        <h2>Hero – Signal Inputs</h2>
        <upov-hero-section
          [title]="'Plant Variety Database'"
          [subtitle]="'Search official plant variety information worldwide.'">
        </upov-hero-section>
      </section>

      <!-- ================= HERO – CONTENT PROJECTION ================= -->
      <section class="section">
        <h2>Hero – GENIE Database</h2>
        <upov-hero-section
          class="gradient-bg-lime-forest gradient-opacity-30 gradient-right-left">

          <h1 hero-title>GENIE <em>Database</em></h1>

          <p hero-subtitle>
            Search by <strong>species</strong> or <strong>authority</strong>.
            <br />
            <span class="upov-text-small upov-text-muted">
              English, German, Spanish and French supported.
            </span>
          </p>

          <div hero-content class="hero-search">
            <upov-search-input
              placeholder="Search"
              [toggleOptions]="searchOptions">
            </upov-search-input>

            <button matButton upovButton="primary">Search</button>
          </div>
        </upov-hero-section>
      </section>

      <!-- ================= HERO – SIMPLE ================= -->
      <section class="section">
        <h2>Hero – Title Only</h2>
        <upov-hero-section [title]="'GENIE Database'"></upov-hero-section>
      </section>

      <!-- ================= HERO – ADVANCED ================= -->
      <section class="section">
        <h2>Hero – Advanced Rich Content</h2>
        <upov-hero-section class="gradient-bg-forest-pine gradient-opacity-75">

          <h1 hero-title>
            Advanced <em>Hero</em> Content
          </h1>

          <p hero-subtitle>
            Supports <strong>bold</strong>, <em>italic</em>,
            <a href="#">links</a> and custom layouts.
          </p>

          <div hero-content class="hero-search">
            <upov-search-input
              placeholder="Search"
              [toggleOptions]="searchOptions">
            </upov-search-input>

            <button matButton upovButton="primary">Search</button>
          </div>

          <div class="hero-actions">
            <button matButton upovButton="primary">Primary</button>
            <button matButton upovButton="secondary">Secondary</button>
            <button matButton upovButton="accent">Tertiary</button>
          </div>

        </upov-hero-section>
      </section>

      <!-- ================= HERO – COMPARISON ================= -->
      <section class="section comparison-grid">
        <upov-hero-section
          [title]="'Input Title'"
          [subtitle]="'Controlled by inputs'"
          class="border-green">
          <div hero-content>
            <button matButton upovButton="primary">Action</button>
          </div>
        </upov-hero-section>

        <upov-hero-section class="border-orange">
          <h1 hero-title>Projected <em>Title</em></h1>
          <p hero-subtitle>Projected subtitle with markup</p>
          <div hero-content>
            <button matButton upovButton="accent">Different Action</button>
          </div>
        </upov-hero-section>
      </section>

      <!-- ================= FOOTER ================= -->
      <section class="section">
        <h2>Footer – Default</h2>
        <upov-footer></upov-footer>
      </section>

      <section class="section">
        <h2>Footer – Inputs</h2>
        <upov-footer
          [socialLinks]="socialLinks"
          [footerLinks]="footerLinks">
        </upov-footer>
      </section>

      <section class="section">
        <h2>Footer – Rich Content</h2>
        <upov-footer>
          <strong>International Union for the Protection of New Varieties of Plants (UPOV)</strong>
          <br />
          <span class="upov-text-small upov-text-muted">
            © 2025 UPOV. All rights reserved.
          </span>
        </upov-footer>
      </section>

    </div>
  `,
  styles: `
    .page-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem 4rem;
    }

    .section {
      margin-bottom: 4rem;
    }

    h1 {
      margin-bottom: 2rem;
    }

    h2 {
      margin-bottom: 1.25rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #e0e0e0;
    }

    .hero-search {
      margin-top: 1.5rem;
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: center;
    }

    .hero-actions {
      margin-top: 1rem;
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    .comparison-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    .border-green {
      border: 2px solid #4caf50;
      padding: 1rem;
    }

    .border-orange {
      border: 2px solid #ff9800;
      padding: 1rem;
    }

    @media (max-width: 900px) {
      .comparison-grid {
        grid-template-columns: 1fr;
      }
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
      label: 'Database',
      link: '/database',
      children: [
        { label: 'Search', link: '/database/search' },
        { label: 'Browse', link: '/database/browse' },
      ],
    },
    { label: 'Contact', link: '/contact' },
  ];

  searchOptions: ToggleOption[] = [
    { label: 'Species', value: 'species', active: true },
    { label: 'Authority', value: 'authority' },
  ];

  socialLinks: LinkItem[] = [
    { name: 'X', url: 'https://x.com/upov', icon: 'twitter' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/upov', icon: 'linkedin' },
    { name: 'YouTube', url: 'https://youtube.com/upov', icon: 'youtube' },
  ];

  footerLinks: LinkItem[] = [
    { name: 'Terms of Use', url: '/terms' },
    { name: 'Privacy', url: '/privacy' },
    { name: 'Sitemap', url: '/sitemap' },
    { name: 'Accessibility', url: '/accessibility' },
  ];
}
