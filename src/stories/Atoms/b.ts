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
      </section>

      <!-- ================= BADGE ================= -->
      <section class="section">
        <h2>Badge</h2>

        <h3>Variants</h3>
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

        <h3>Inline with Title</h3>
        <div class="card">
          <h4 class="inline-title">
            Species Name
            <upov-badge-atom label="Updated" variant="success"></upov-badge-atom>
          </h4>
          <p class="muted">Botanical description here...</p>
        </div>

        <h3>Status List</h3>
        <div class="list">
          <div class="list-row">
            <span>Rosa hybrida L.</span>
            <upov-badge-atom label="Updated" variant="success"></upov-badge-atom>
          </div>
          <div class="list-row">
            <span>Tulipa gesneriana</span>
            <upov-badge-atom label="New" variant="info"></upov-badge-atom>
          </div>
          <div class="list-row">
            <span>Malus domestica</span>
            <upov-badge-atom label="Pending" variant="warning"></upov-badge-atom>
          </div>
          <div class="list-row">
            <span>Solanum lycopersicum</span>
            <upov-badge-atom label="Draft" variant="default"></upov-badge-atom>
          </div>
        </div>

        <h3>In Table</h3>
        <table class="status-table">
          <thead>
            <tr>
              <th>Species</th>
              <th>Status</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rosa hybrida</td>
              <td><upov-badge-atom label="Updated" variant="success"></upov-badge-atom></td>
              <td>2024-01-28</td>
            </tr>
            <tr>
              <td>Tulipa gesneriana</td>
              <td><upov-badge-atom label="New" variant="info"></upov-badge-atom></td>
              <td>2024-01-29</td>
            </tr>
            <tr>
              <td>Malus domestica</td>
              <td><upov-badge-atom label="Pending" variant="warning"></upov-badge-atom></td>
              <td>2024-01-25</td>
            </tr>
          </tbody>
        </table>
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
    </div>
  `,
  styles: `
    .section { margin-bottom: 3rem; }

    .demo-row {
      display: flex;
      gap: 1.25rem;
      flex-wrap: wrap;
      margin-top: 1rem;
    }

    .dark-bg {
      background: #1a1a2e;
      padding: 1rem;
      border-radius: 8px;
    }

    .card {
      padding: 1rem;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      max-width: 420px;
    }

    .inline-title {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      margin: 0;
    }

    .muted { color: #666; }

    .list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .list-row {
      display: flex;
      justify-content: space-between;
      padding: 0.75rem 1rem;
      background: #fff;
      border-radius: 6px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.08);
    }

    .status-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }

    .status-table th,
    .status-table td {
      padding: 0.75rem;
      border-bottom: 1px solid #e0e0e0;
      text-align: left;
    }

    .status-table thead {
      background: #f5f5f5;
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
