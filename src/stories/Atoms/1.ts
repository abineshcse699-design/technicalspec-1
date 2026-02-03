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
    <!-- PAGE WIDTH CONTAINER -->
    <div class="page-container">

      <!-- HEADER -->
      <upov-header [navigation]="navigation"></upov-header>

      <!-- HERO -->
      <upov-hero-section
        class="gradient-bg-lime-forest gradient-opacity-30 gradient-right-left"
      >
        <h1 hero-title>GENIE Database</h1>

        <p hero-subtitle>
          Search by specie or authority using the input below.
        </p>

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

      <!-- FOOTER -->
      <upov-footer></upov-footer>

    </div>
  `,
  styles: `
    /* 🔥 THIS CONTROLS TOTAL PAGE WIDTH */
    .page-container {
      max-width: 1200px;     /* <-- image width */
      margin: 0 auto;        /* center page */
    }

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

  searchOptions: ToggleOption[] = [
    { label: 'Species', value: 'species', active: true },
    { label: 'Authority', value: 'authority' },
  ];
}
