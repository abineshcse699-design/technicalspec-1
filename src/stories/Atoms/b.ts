import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  BadgeAtom,
  Button,
  ChipAtomComponent,
  FlagAtom,
  IconAtom,
  InputAtom,
  Logo,
  SpinnerAtom,
  Toggle,
  TruncatedText,
  type ToggleOption,
} from 'upov-ui';

@Component({
  selector: 'app-atoms',
  standalone: true,
  imports: [
    MatButtonModule,
    BadgeAtom,
    Button,
    ChipAtomComponent,
    FlagAtom,
    IconAtom,
    InputAtom,
    Logo,
    SpinnerAtom,
    Toggle,
    TruncatedText,
  ],
  template: `
    <div class="grid-container">
      <h1>Atoms</h1>

      <!-- ================= LOGO ================= -->
      <section class="section">
        <h2>Logo</h2>
        <div class="demo-row">
          <upov-logo size="small"></upov-logo>
          <upov-logo size="medium"></upov-logo>
          <upov-logo size="large"></upov-logo>
        </div>
        <div class="demo-row dark-bg">
          <upov-logo size="small" light></upov-logo>
          <upov-logo size="medium" light></upov-logo>
          <upov-logo size="large" light></upov-logo>
        </div>
      </section>

      <!-- ================= BUTTON ================= -->
      <section class="section">
        <h2>Button</h2>

        <h3>Variants</h3>
        <div class="demo-row">
          <button matButton upovButton="primary">Primary</button>
          <button matButton upovButton="secondary">Secondary</button>
          <button matButton upovButton="default">Default</button>
          <button matButton upovButton="danger">Danger</button>
          <button matButton upovButton="accent">Accent</button>
        </div>

        <h3>Sizes</h3>
        <div class="demo-row">
          <button matButton upovButton="primary" size="small">Small</button>
          <button matButton upovButton="primary" size="medium">Medium</button>
          <button matButton upovButton="primary" size="large">Large</button>
        </div>

        <h3>Icon Buttons</h3>
        <div class="demo-row">
          <button mat-icon-button upovButton="primary">
            <span class="material-icons">home</span>
          </button>
          <button mat-icon-button upovButton="secondary">
            <span class="material-icons">settings</span>
          </button>
          <button mat-icon-button upovButton="danger">
            <span class="material-icons">delete</span>
          </button>
        </div>
      </section>

      <!-- ================= BADGE ================= -->
      <section class="section">
        <h2>Badge</h2>

        <h3>Variants</h3>
        <div class="demo-row">
          <upov-badge-atom label="Success" variant="success"></upov-badge-atom>
          <upov-badge-atom label="Info" variant="info"></upov-badge-atom>
          <upov-badge-atom label="Warning" variant="warning"></upov-badge-atom>
          <upov-badge-atom label="Default" variant="default"></upov-badge-atom>
        </div>

        <h3>Sizes</h3>
        <div class="demo-row">
          <upov-badge-atom label="Small" size="small" variant="success"></upov-badge-atom>
          <upov-badge-atom label="Medium" size="medium" variant="success"></upov-badge-atom>
        </div>
      </section>

      <!-- ================= CHIP ================= -->
      <section class="section">
        <h2>Chip</h2>

        <div class="demo-row">
          <upov-chip-atom label="Default"></upov-chip-atom>
          <upov-chip-atom label="Outlined" variant="outlined"></upov-chip-atom>
          <upov-chip-atom label="Tonal" variant="tonal"></upov-chip-atom>
        </div>

        <h3>With icon & removable</h3>
        <div class="demo-row">
          <upov-chip-atom label="With icon" icon="star"></upov-chip-atom>
          <upov-chip-atom label="Removable" [removable]="true"></upov-chip-atom>
          <upov-chip-atom label="Disabled" [disabled]="true"></upov-chip-atom>
        </div>

        <h3>Sizes</h3>
        <div class="demo-row">
          <upov-chip-atom label="Small" size="small"></upov-chip-atom>
          <upov-chip-atom label="Medium" size="medium"></upov-chip-atom>
          <upov-chip-atom label="Large" size="large"></upov-chip-atom>
        </div>
      </section>

      <!-- ================= TOGGLE ================= -->
      <section class="section">
        <h2>Toggle</h2>
        <upov-toggle
          ariaLabel="View mode"
          name="view-toggle"
          [options]="toggleOptions">
        </upov-toggle>
      </section>

      <!-- ================= INPUT ================= -->
      <section class="section">
        <h2>Input</h2>
        <div class="demo-row">
          <upov-input-atom label="Text" placeholder="Enter text"></upov-input-atom>
          <upov-input-atom
            label="Search"
            type="search"
            placeholder="Search..."
            icon="search"
            [clearable]="true">
          </upov-input-atom>
          <upov-input-atom label="Password" type="password"></upov-input-atom>
          <upov-input-atom label="Disabled" [disabled]="true"></upov-input-atom>
          <upov-input-atom label="Required" [required]="true"></upov-input-atom>
        </div>
      </section>

      <!-- ================= ICON ================= -->
      <section class="section">
        <h2>Icon</h2>
        <div class="demo-row">
          <upov-icon-atom icon="home" size="small" color="primary"></upov-icon-atom>
          <upov-icon-atom icon="settings" size="medium" color="accent"></upov-icon-atom>
          <upov-icon-atom icon="favorite" size="large" color="warn"></upov-icon-atom>
          <upov-icon-atom icon="info" size="medium"></upov-icon-atom>
        </div>
      </section>

      <!-- ================= FLAG ================= -->
      <section class="section">
        <h2>Flag</h2>

        <h3>Rectangle</h3>
        <div class="demo-row">
          <upov-flag-atom isoCode="ch" size="small"></upov-flag-atom>
          <upov-flag-atom isoCode="fr" size="medium"></upov-flag-atom>
          <upov-flag-atom isoCode="de" size="large"></upov-flag-atom>
          <upov-flag-atom isoCode="jp" size="medium"></upov-flag-atom>
          <upov-flag-atom isoCode="br" size="medium"></upov-flag-atom>
        </div>

        <h3>Circle</h3>
        <div class="demo-row">
          <upov-flag-atom isoCode="ch" shape="circle"></upov-flag-atom>
          <upov-flag-atom isoCode="fr" shape="circle"></upov-flag-atom>
          <upov-flag-atom isoCode="de" shape="circle"></upov-flag-atom>
        </div>
      </section>

      <!-- ================= SPINNER ================= -->
      <section class="section">
        <h2>Spinner</h2>
        <div class="demo-row">
          <upov-spinner-atom mode="indeterminate" [diameter]="40"></upov-spinner-atom>
          <upov-spinner-atom
            mode="determinate"
            [diameter]="50"
            [value]="65"
            message="65% loaded">
          </upov-spinner-atom>
        </div>
      </section>

      <!-- ================= TRUNCATED TEXT ================= -->
      <section class="section">
        <h2>Truncated Text</h2>
        <div class="truncate-demo">
          <upov-truncated-text>
            This is a very long text that should be truncated when it exceeds the available width.
          </upov-truncated-text>
        </div>
        <div class="truncate-demo">
          <upov-truncated-text>Short text</upov-truncated-text>
        </div>
      </section>
    </div>
  `,
  styles: `
    .section { margin-bottom: 3rem; }

    .demo-row {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
      margin-top: 1rem;
    }

    .dark-bg {
      background: #1a1a2e;
      padding: 1rem;
      border-radius: 8px;
    }

    .truncate-demo {
      max-width: 300px;
    }
  `,
})
export class AtomsPage {
  toggleOptions: ToggleOption[] = [
    { label: 'List', value: 'list' },
    { label: 'Grid', value: 'grid' },
    { label: 'Table', value: 'table' },
  ];
}
