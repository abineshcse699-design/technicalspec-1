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

    // UPOV Atoms
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

      <!-- Logo -->
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

      <!-- Buttons -->
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

        <h3>Icon buttons</h3>
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

      <!-- Badge -->
      <section class="section">
        <h2>Badge</h2>
        <div class="demo-row">
          <upov-badge-atom label="Updated" variant="success"></upov-badge-atom>
          <upov-badge-atom label="New" variant="info"></upov-badge-atom>
          <upov-badge-atom label="Pending" variant="warning"></upov-badge-atom>
          <upov-badge-atom label="Default" variant="default"></upov-badge-atom>
        </div>

        <h3>Sizes</h3>
        <div class="demo-row">
          <upov-badge-atom label="Small" size="small" variant="success"></upov-badge-atom>
          <upov-badge-atom label="Medium" size="medium" variant="success"></upov-badge-atom>
        </div>
      </section>

      <!-- Chip -->
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
      </section>

      <!-- Toggle -->
      <section class="section">
        <h2>Toggle</h2>
        <upov-toggle
          ariaLabel="View mode"
          name="view-toggle"
          [options]="toggleOptions">
        </upov-toggle>
      </section>

      <!-- Spinner -->
      <section class="section">
        <h2>Spinner</h2>
        <div class="demo-row">
          <upov-spinner-atom mode="indeterminate" [diameter]="40" color="primary"></upov-spinner-atom>
          <upov-spinner-atom mode="indeterminate" [diameter]="40" color="accent"></upov-spinner-atom>
          <upov-spinner-atom
            mode="determinate"
            [diameter]="50"
            [value]="65"
            color="primary"
            message="65% loaded">
          </upov-spinner-atom>
        </div>
      </section>

      <!-- Truncated Text -->
      <section class="section">
        <h2>Truncated Text</h2>
        <div class="truncate-demo">
          <upov-truncated-text>
            This is a very long text that should be truncated when it exceeds the available width.
          </upov-truncated-text>
        </div>
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
      border-bottom: 1px solid #e0e0e0;
      padding-bottom: 0.5rem;
    }

    .demo-row {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      margin-top: 1rem;
      align-items: center;
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
