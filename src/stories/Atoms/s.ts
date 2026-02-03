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

      <h1 class="page-title">Organisms</h1>

      <!-- ================= HEADER ================= -->
      <section class="section">
        <h2>Header – Default</h2>
        <upov-header [navigation]="navigation"></upov-header>
      </section>

      <section class="section">
        <h2>Header – Without Navigation</h2>
        <upov-header [navigation]="[]"></upov-header>
      </section>

      <!-- ================= HERO : SIGNAL INPUTS ================= -->
      <section class="section">
        <h2>Hero – Signal Inputs</h2>
        <upov-hero-section
          [title]="'Plant Variety Database'"
          [subtitle]="'Search official plant variety information worldwide.'">
        </upov-hero-section>
      </section>

    </div>

    <!-- ================================================= -->
    <!-- 🔥 GENIE DATABASE HERO (FULL WIDTH – FIXED) -->
    <!-- ================================================= -->
    <section class="genie-hero-wrapper">
      <upov-hero-section
        class="gradient-bg-lime-forest gradient-opacity-30 gradient-right-left genie-hero">

        <div class="genie-hero-inner">

          <h1 hero-title>GENIE <em>Database</em></h1>

          <p hero-subtitle>
            Search by <strong>specie</strong> or <strong>authority</strong>.<br />
            <span class="upov-text-small upov-text-muted">
              You can search in English, German, Spanish or French.
            </span>
          </p>

          <div hero-content class="genie-search-row">
            <upov-search-input
              placeholder="Search"
              [toggleOptions]="searchOptions">
            </upov-search-input>

            <button
              matButton
              upovButton="primary"
              class="genie-search-btn">
              Search
            </button>
          </div>

        </div>
      </upov-hero-section>
    </section>

    <div class="page-container">

      <!-- ================= HERO : TITLE ONLY ================= -->
      <section class="section">
        <h2>Hero – Title Only</h2>
        <upov-hero-section [title]="'GENIE Database'"></upov-hero-section>
      </section>

      <!-- ================= FOOTER ================= -->
      <section class="section">
        <h2>Footer – Default</h2>
        <upov-footer></upov-footer>
      </section>

      <section class="section">
        <h2>Footer – With Inputs</h2>
        <upov-footer
          [socialLinks]="socialLinks"
          [footerLinks]="footerLinks">
        </upov-footer>
      </section>

      <section class="section">
        <h2>Footer – Rich Content</h2>
        <upov-footer>
          <strong>
            International Union for the Protection of New Varieties of Plants (UPOV)
          </strong>
          <br />
          <span class="upov-text-small upov-text-muted">
            © 2025 UPOV. All rights reserved.
          </span>
        </upov-footer>
      </section>

    </div>
  `,
  styles: `
    /* ================= PAGE WIDTH ================= */
    .page-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem 4rem;
    }

    .page-title {
      margin-bottom: 3rem;
    }

    /* ================= SECTIONS ================= */
    .section {
      margin-bottom: 4rem;
    }

    h2 {
      margin-bottom: 1.25rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid var(--color-border, #e0e0e0);
    }

    /* ================= GENIE HERO ================= */

    /* full width background */
    .genie-hero-wrapper {
      width: 100%;
      margin: 5rem 0;
    }

    .genie-hero {
      width: 100%;
      padding: 4rem 0;
    }

    /* center content */
    .genie-hero-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    /* search row */
    .genie-search-row {
      margin-top: 1.75rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .genie-search-btn {
      height: 40px;
      padding: 0 1.75rem;
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      .genie-search-row {
        flex-direction: column;
        align-items: stretch;
      }

      .genie-search-btn {
        width: 100%;
      }
    }
  `,
})
export class OrganismsPage {

  /* ================= HEADER NAV ================= */
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

  /* ================= HERO TOGGLE ================= */
  searchOptions: ToggleOption[] = [
    { label: 'Species', value: 'species', active: true },
    { label: 'Authority', value: 'authority' },
  ];

  /* ================= FOOTER DATA ================= */
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
