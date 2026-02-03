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
    <!-- ================= HEADER ================= -->
    <upov-header [navigation]="navigation"></upov-header>

    <!-- ================= GENIE DATABASE HERO ================= -->
    <upov-hero-section
      class="gradient-bg-lime-forest gradient-opacity-30 gradient-right-left"
    >
      <!-- Title -->
      <h1 hero-title>GENIE Database</h1>

      <!-- Subtitle -->
      <p hero-subtitle>
        Search by specie or authority using the input below.
      </p>

      <!-- Search bar + toggle + button -->
      <div hero-content class="hero-search">
        <upov-search-input
          placeholder="Search"
          [toggleOptions]="searchOptions">
        </upov-search-input>

        <button
          matButton
          upovButton="primary"
          type="button"
          class="search-button">
          Search
        </button>
      </div>
    </upov-hero-section>

    <!-- ================= FOOTER ================= -->
    <upov-footer></upov-footer>
  `,
  styles: `
    .hero-search {
      margin-top: 1.5rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .search-button {
      height: 40px;
      padding: 0 1.75rem;
      white-space: nowrap;
    }
  `,
})
export class OrganismsPage {

  /* Header navigation */
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

  /* Genie database toggle options */
  searchOptions: ToggleOption[] = [
    { label: 'Species', value: 'species', active: true },
    { label: 'Authority', value: 'authority' },
  ];
}
