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

      <!-- ================= HEADER ================= -->
      <upov-header [navigation]="navigation"></upov-header>

      <!-- ================================================= -->
      <!-- 1️⃣ HERO – CONTENT PROJECTION (GENIE DATABASE) -->
      <!-- ================================================= -->
      <section class="section">
        <upov-hero-section>
          <h1 hero-title>GENIE <em>Database</em></h1>

          <p hero-subtitle>
            Search by <strong>specie</strong> or <strong>authority</strong>.<br />
            <span class="upov-text-small upov-text-muted">
              You can search in English, German, Spanish or French.
            </span>
          </p>

          <div hero-content>
            <button matButton upovButton="primary">
              Learn More
            </button>
          </div>
        </upov-hero-section>
      </section>

      <!-- ================================================= -->
      <!-- 2️⃣ HERO – SIMPLE INPUTS ONLY -->
      <!-- ================================================= -->
      <section class="section">
        <upov-hero-section
          [title]="'Simple Hero Title'"
          [subtitle]="'A clean subtitle without any markup'">
        </upov-hero-section>
      </section>

      <!-- ================================================= -->
      <!-- 3️⃣ HERO – ADVANCED RICH CONTENT (GENIE SEARCH) -->
      <!-- ================================================= -->
      <section class="section">
        <upov-hero-section
          class="gradient-bg-forest-pine gradient-opacity-75">

          <h1 hero-title>
            Advanced Hero with <em>Rich</em> Content
          </h1>

          <p hero-subtitle>
            This demonstrates complex layouts with
            <strong>bold text</strong>,
            <em>italic text</em>,
            and <a href="#">styled links</a>.
            <br /><br />
            <span class="upov-text-small upov-text-muted">
              Multiple paragraphs and custom styling are fully supported.
            </span>
          </p>

          <div hero-content class="hero-search">
            <upov-search-input
              placeholder="Search"
              [toggleOptions]="searchOptions">
            </upov-search-input>

            <button matButton upovButton="primary">
              Search
            </button>
          </div>

          <div class="hero-actions">
            <button matButton upovButton="primary">Primary Action</button>
            <button matButton upovButton="secondary">Secondary Action</button>
            <button matButton upovButton="accent">Tertiary Action</button>
          </div>

        </upov-hero-section>
      </section>

      <!-- ================================================= -->
      <!-- 4️⃣ HERO – INPUT vs PROJECTION COMPARISON -->
      <!-- ================================================= -->
      <section class="section comparison-grid">

        <!-- LEFT -->
        <upov-hero-section
          [title]="'Input Title (Controls This)'"
          [subtitle]="'Input subtitle from controls'"
          class="border-green">

          <div hero-content>
            <button matButton upovButton="primary">
              Action Button
            </button>
          </div>

        </upov-hero-section>

        <!-- RIGHT -->
        <upov-hero-section class="border-orange">
          <h1 hero-title>
            This <em>projected</em> title is used
          </h1>

          <p hero-subtitle>
            This projected subtitle with <strong>markup</strong> is used
          </p>

          <div hero-content>
            <button matButton upovButton="accent">
              Different Action
            </button>
          </div>
        </upov-hero-section>

      </section>

      <!-- ================= FOOTER ================= -->
      <upov-footer></upov-footer>

    </div>
  `,
  styles: `
    /* ================= PAGE WIDTH ================= */
    .page-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem 4rem;
    }

    /* ================= SECTIONS ================= */
    .section {
      margin-bottom: 4rem;
    }

    /* ================= HERO SEARCH ================= */
    .hero-search {
      margin-top: 1.5rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .hero-actions {
      margin-top: 1rem;
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    /* ================= COMPARISON ================= */
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
}
