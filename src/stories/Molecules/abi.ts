import { Component } from '@angular/core';
import { HeroSection, SearchInput, Button } from 'upov-ui';
import { MatButton } from '@angular/material/button';
// import { Component } from '@angular/core';
import { Header, HeaderNav, type HeaderNavigationItem } from 'upov-ui';
import { Footer } from 'upov-ui';
import { MatExpansionModule } from '@angular/material/expansion';
import { FOOTER_CONFIG, type FooterConfig } from 'upov-ui';


@Component({
  selector: 'app-organisms',
  standalone: true,
  imports: [
    HeroSection,
    MatExpansionModule,
    Footer,
    Header,
       HeaderNav,
    SearchInput,
    Button,
    MatButton,
  ],
  template: `
    <div class="grid-container">


   <mat-expansion-panel expanded>
          <mat-expansion-panel-header>
            <mat-panel-title>Footer</mat-panel-title>
          </mat-expansion-panel-header>

    <div class="grid-container">
      <h1>Organisms</h1>

      <!-- Header with navigation -->
      <section class="section">
        <h2>Header – With Navigation</h2>

        <upov-header [navigation]="navItems">
        </upov-header>
      </section>

      <!-- Header without navigation -->
      <section class="section">
        <h2>Header – Logo Only</h2>

        <upov-header>
        </upov-header>
      </section>

      <!-- Header via projection (same UI, advanced usage) -->
      <section class="section">
        <h2>Header – Navigation via Projection</h2>

        <upov-header>
          <upov-header-nav [items]="navItems"></upov-header-nav>
        </upov-header>
      </section>


    </div>
  </mat-expansion-panel>



       <mat-expansion-panel expanded>
          <mat-expansion-panel-header>
            <mat-panel-title>Genie</mat-panel-title>
          </mat-expansion-panel-header>

      <!-- ========================= -->
      <!-- GENIE DATABASE – SEARCH -->
      <!-- ========================= -->
      <section class="section">
        <h2>GENIE Database – Search</h2>

        <upov-hero-section
          class="gradient-bg-lime-forest gradient-opacity-30 gradient-right-left"
          title="GENIE Database"
          subtitle="Search by specie or authority using the input below."
        >
          <upov-search-input
            [toggleOptions]="searchOptions">
          </upov-search-input>
        </upov-hero-section>
      </section>

      <!-- ========================= -->
      <!-- GENIE DATABASE – CTA -->
      <!-- ========================= -->


      <section class="section">
        <h2>GENIE Database – Call to Action</h2>

        <upov-hero-section>
          <h1 hero-title>GENIE <em>Database</em></h1>
          <p hero-subtitle>
            Search by <strong>specie</strong> or <strong>authority</strong>.<br />
            <span class="upov-text-small upov-text-muted">
              You can search in English, German, Spanish or French.
            </span>
          </p>
          <div hero-content>
            <button matButton upovButton="primary">Learn More</button>
          </div>
        </upov-hero-section>
      </section>



      <!-- ========================= -->
      <!-- SIMPLE HERO -->
      <!-- ========================= -->
      <section class="section">
        <h2>Simple Hero</h2>

        <upov-hero-section
          title="Simple Hero Title"
          subtitle="A clean subtitle without any markup">
        </upov-hero-section>
      </section>

      <!-- ========================= -->
      <!-- ADVANCED HERO -->
      <!-- ========================= -->
      <section class="section">
        <h2>Advanced Hero with Rich Content</h2>

        <upov-hero-section class="gradient-bg-forest-pine gradient-opacity-75">
          <h1 hero-title>
            Advanced Hero with <em>Rich</em> Content
          </h1>

          <p hero-subtitle>
            This demonstrates complex layouts with
            <strong>bold text</strong>,
            <em>italic text</em>, and
            <a href="#" class="link">styled links</a>.
            <br /><br />
            <span class="upov-text-small upov-text-muted">
              Multiple paragraphs and custom styling are fully supported.
            </span>
          </p>

          <div hero-content>
            <upov-search-input
              [toggleOptions]="searchOptions">
            </upov-search-input>

            <div class="button-row">
              <button matButton upovButton="primary">Primary Action</button>
              <button matButton upovButton="secondary">Secondary Action</button>
              <button matButton upovButton="accent">Tertiary Action</button>
            </div>
          </div>
        </upov-hero-section>
      </section>

      <!-- ========================= -->
      <!-- INPUT VS PROJECTION -->
      <!-- ========================= -->
      <section class="section">
        <h2>Input vs Projection</h2>

        <div class="comparison-grid">
          <!-- Inputs win -->
          <div>
            <h3>Signal Inputs (Priority)</h3>
            <upov-hero-section
              title="Input Title (Controls This)"
              subtitle="Input subtitle from component"
              class="border-green">

              <h1 hero-title>IGNORED</h1>
              <p hero-subtitle>IGNORED</p>

              <div hero-content>
                <button matButton upovButton="primary">Action Button</button>
              </div>
            </upov-hero-section>
          </div>

          <!-- Projection fallback -->
          <div>
            <h3>Content Projection (Fallback)</h3>
            <upov-hero-section class="border-orange">
              <h1 hero-title>
                This <em>projected</em> title is used
              </h1>
              <p hero-subtitle>
                This projected subtitle with <strong>markup</strong> is used
              </p>
              <div hero-content>
                <button matButton upovButton="accent">Different Action</button>
              </div>
            </upov-hero-section>
          </div>
        </div>
      </section>

</mat-expansion-panel>
  <!-- ========================= -->
<!-- FOOTER – ORGANISM DEMOS -->
<!-- ========================= -->


   <mat-expansion-panel expanded>
          <mat-expansion-panel-header>
            <mat-panel-title>Footer</mat-panel-title>
          </mat-expansion-panel-header>

<section class="section">
  <h2>Footer – Default (Injection Token)</h2>
  <upov-footer></upov-footer>
</section>

<section class="section">
  <h2>Footer – Custom Text Only</h2>
  <upov-footer>
    Just a simple footer with custom text and no links.
  </upov-footer>
</section>

<section class="section">
  <h2>Footer – Social Links Only</h2>
  <upov-footer
    [socialLinks]="socialLinksOnly"
    [footerLinks]="[]">
    Footer with only social media links and custom text.
  </upov-footer>
</section>

<section class="section">
  <h2>Footer – Navigation Links Only</h2>
  <upov-footer
    [socialLinks]="[]"
    [footerLinks]="footerLinksOnly">
    Footer with only navigation links.
  </upov-footer>
</section>

<section class="section">
  <h2>Footer – Mixed Configuration</h2>
  <upov-footer [socialLinks]="mixedSocialLinks">
    <strong>Mixed configuration example:</strong><br />
    Social links from <em>inputs</em>, footer links from <em>injection token</em>,
    and this text from <em>ng-content</em>.
  </upov-footer>
</section>

<section class="section">
  <h2>Footer – Rich Content</h2>
  <upov-footer
    [socialLinks]="richSocialLinks"
    [footerLinks]="richFooterLinks">
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <p><strong>International Union for the Protection of New Varieties of Plants (UPOV)</strong></p>
      <p style="font-size: 0.875rem;">
        UPOV is an intergovernmental organization with legal personality and enjoys
        such privileges and immunities as are necessary for the fulfillment of its objectives.
      </p>
      <p style="font-size: 0.875rem;">
        © 2025 UPOV. All rights reserved.
      </p>
    </div>
  </upov-footer>
</section>

</mat-expansion-panel >
    </div>




  `,
  styles: `


 .section {
      margin-bottom: 3rem;
    }

    h1 {
      margin-bottom: 1.5rem;
    }

    h2 {
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid var(--color-border, #e0e0e0);
    }

    .section {
      margin-bottom: 3rem;
    }

    h1 {
      margin-bottom: 1.5rem;
    }

    h2 {
      margin-bottom: 1rem;
      border-bottom: 1px solid #e0e0e0;
      padding-bottom: 0.5rem;
    }

    h3 {
      margin-bottom: 0.75rem;
    }

    .button-row {
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

    .link {
      color: #007acc;
      text-decoration: underline;
    }
  `,
})
export class OrganismsPage {
  searchOptions = [
    { label: 'Species', value: 'species', active: true },
    { label: 'Authority', value: 'authority' },
  ];


   navItems: HeaderNavigationItem[] = [
    { label: 'Home', link: '/' },
    {
      label: 'Varieties',
      link: '/varieties',
      children: [
        { label: 'All Varieties', link: '/varieties/all' },
        { label: 'New Varieties', link: '/varieties/new' },
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



  // ----- FOOTER DATA -----

socialLinksOnly = [
  { name: 'X', url: 'https://x.com/upov', icon: 'twitter' },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/upov', icon: 'linkedin' },
  { name: 'YouTube', url: 'https://youtube.com', icon: 'youtube' },
  { name: 'Contact', url: 'mailto:contact@upov.int', icon: 'envelope' },
];

footerLinksOnly = [
  { name: 'Privacy Policy', url: '/privacy' },
  { name: 'Terms of Service', url: '/terms' },
  { name: 'Cookie Policy', url: '/cookies' },
  { name: 'Accessibility', url: '/accessibility' },
  { name: 'Sitemap', url: '/sitemap' },
];

mixedSocialLinks = [
  { name: 'X', url: 'https://x.com/upov', icon: 'twitter' },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/upov', icon: 'linkedin' },
];

richSocialLinks = [
  { name: 'X', url: 'https://x.com/upov', icon: 'twitter' },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/upov', icon: 'linkedin' },
  { name: 'YouTube', url: 'https://youtube.com/upov', icon: 'youtube' },
  { name: 'Email', url: 'mailto:upov.mail@upov.int', icon: 'envelope' },
];

richFooterLinks = [
  { name: 'Terms of Use', url: '/terms' },
  { name: 'Privacy', url: '/privacy' },
  { name: 'Sitemap', url: '/sitemap' },
  { name: 'Accessibility', url: '/accessibility' },
];


}
