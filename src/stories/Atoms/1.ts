import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
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

      <!-- Logo -->


<section class="section">
  <h2>Logo</h2>


  <div class="demo-row items-center">
    <upov-logo size="small"></upov-logo>
    <upov-logo size="medium"></upov-logo>
    <upov-logo size="large"></upov-logo>
    <upov-logo [size]="100"></upov-logo>
  </div>


  <div class="demo-row items-center dark-bg">


    <upov-logo [size]="100" light></upov-logo>
  </div>
</section>


    <!-- Buttons -->
<section class="section">
  <h2>Button</h2>

  <!-- Filled Buttons - Sizes -->
  <h3>Filled Buttons – Sizes</h3>
  <div class="demo-row items-center">
    <button matButton upovButton size="large">Large</button>
    <button matButton upovButton size="medium">Medium</button>
    <button matButton upovButton size="small">Small</button>
  </div>

  <!-- Filled Buttons - Variants -->
  <h3>Filled Buttons – Variants</h3>
  <div class="demo-row items-center">
    <button matButton upovButton>Default</button>
    <button matButton upovButton="primary">Primary</button>
    <button matButton upovButton="secondary">Secondary</button>
    <button matButton upovButton="danger">Danger</button>
    <button matButton upovButton="accent">Accent</button>
  </div>

  <!-- Text Buttons - Variants -->
  <h3>Text Buttons – Variants</h3>
  <div class="demo-row items-center">
    <button matButton="text" upovButton>Default</button>
    <button matButton="text" upovButton="primary">Primary</button>
    <button matButton="text" upovButton="secondary">Secondary</button>
    <button matButton="text" upovButton="danger">Danger</button>
    <button matButton="text" upovButton="accent">Accent</button>
  </div>

  <!-- Buttons with Leading Icons -->
  <h3>Buttons with Icons</h3>
  <div class="demo-row items-center">
    <button matButton upovButton="primary">
      <span class="material-icons">favorite</span>
      Like
    </button>

    <button matButton="text" upovButton="primary">
      <span class="material-icons">download</span>
      Download
    </button>
  </div>

  <!-- Icon Only Buttons -->
  <h3>Icon Only Buttons</h3>
  <div class="demo-row items-center">
    <button mat-icon-button upovButton aria-label="Edit">
      <span class="material-icons">edit</span>
    </button>

    <button mat-icon-button upovButton="primary" aria-label="Favorite">
      <span class="material-icons">favorite</span>
    </button>

    <button mat-icon-button upovButton="secondary" aria-label="Share">
      <span class="material-icons">share</span>
    </button>

    <button mat-icon-button upovButton="danger" aria-label="Delete">
      <span class="material-icons">delete</span>
    </button>

    <button mat-icon-button upovButton="accent" aria-label="Star">
      <span class="material-icons">star</span>
    </button>
  </div>

  <!-- Icon Only Buttons (Filled) -->
  <h3>Icon Only Buttons – Filled</h3>
  <div class="demo-row items-center">
    <button mat-icon-button upovButton iconFilled aria-label="Edit">
      <span class="material-icons">edit</span>
    </button>

    <button mat-icon-button upovButton="primary" iconFilled aria-label="Favorite">
      <span class="material-icons">favorite</span>
    </button>

    <button mat-icon-button upovButton="secondary" iconFilled aria-label="Share">
      <span class="material-icons">share</span>
    </button>

    <button mat-icon-button upovButton="danger" iconFilled aria-label="Delete">
      <span class="material-icons">delete</span>
    </button>

    <button mat-icon-button upovButton="accent" iconFilled aria-label="Star">
      <span class="material-icons">star</span>
    </button>
  </div>

  <!-- Icon Only Buttons - Sizes -->
  <h3>Icon Only Buttons – Sizes</h3>
  <div class="demo-row items-center">
    <button mat-icon-button upovButton="primary" size="small" aria-label="Small">
      <span class="material-icons">settings</span>
    </button>

    <button mat-icon-button upovButton="primary" size="medium" aria-label="Medium">
      <span class="material-icons">settings</span>
    </button>

    <button mat-icon-button upovButton="primary" size="large" aria-label="Large">
      <span class="material-icons">settings</span>
    </button>
  </div>

  //

   <h3>Buttons with Leading Icons</h3>
  <div class="demo-row items-center">
    <button matButton upovButton="primary">
      <span class="material-icons">save</span>
      Save
    </button>

    <button matButton upovButton="secondary">
      <span class="material-icons">cancel</span>
      Cancel
    </button>

    <button matButton upovButton="danger">
      <span class="material-icons">delete</span>
      Delete
    </button>
  </div>

  <!-- Buttons with Trailing Icons -->
  <h3>Buttons with Trailing Icons</h3>
  <div class="demo-row items-center">
    <button matButton upovButton="primary">
      Next
      <span class="material-icons">arrow_forward</span>
    </button>

    <button matButton upovButton="secondary">
      Open
      <span class="material-icons">open_in_new</span>
    </button>

    <button matButton upovButton>
      More
      <span class="material-icons">expand_more</span>
    </button>
  </div>

  <!-- Text Buttons with Icons -->
  <h3>Text Buttons with Icons</h3>
  <div class="demo-row items-center">
    <button matButton="text" upovButton="primary">
      <span class="material-icons">download</span>
      Download
    </button>

    <button matButton="text" upovButton="secondary">
      <span class="material-icons">upload</span>
      Upload
    </button>

    <button matButton="text" upovButton>
      <span class="material-icons">print</span>
      Print
    </button>
  </div>

  <!-- Icon Only Buttons -->
  <h3>Icon-Only Buttons</h3>
  <div class="demo-row items-center">
    <button mat-icon-button upovButton aria-label="Edit">
      <span class="material-icons">edit</span>
    </button>

    <button mat-icon-button upovButton="primary" aria-label="Favorite">
      <span class="material-icons">favorite_border</span>
    </button>

    <button mat-icon-button upovButton="secondary" aria-label="Share">
      <span class="material-icons">share</span>
    </button>

    <button mat-icon-button upovButton="danger" aria-label="Delete">
      <span class="material-icons">delete</span>
    </button>

    <button mat-icon-button upovButton="accent" aria-label="Star">
      <span class="material-icons">star_border</span>
    </button>
  </div>

  <!-- Icon Only Buttons (Filled) -->
  <h3>Icon-Only Buttons (Filled)</h3>
  <div class="demo-row items-center">
    <button mat-icon-button upovButton iconFilled aria-label="Edit">
      <span class="material-icons">edit</span>
    </button>

    <button mat-icon-button upovButton="primary" iconFilled aria-label="Favorite">
      <span class="material-icons">favorite</span>
    </button>

    <button mat-icon-button upovButton="secondary" iconFilled aria-label="Share">
      <span class="material-icons">share</span>
    </button>

    <button mat-icon-button upovButton="danger" iconFilled aria-label="Delete">
      <span class="material-icons">delete</span>
    </button>

    <button mat-icon-button upovButton="accent" iconFilled aria-label="Star">
      <span class="material-icons">star</span>
    </button>
  </div>

  <!-- Icon Only Buttons - Settings Example -->
  <h3>Icon-Only Buttons – Settings</h3>
  <div class="demo-row items-center">
    <button mat-icon-button upovButton="primary" aria-label="Settings">
      <span class="material-icons">settings</span>
    </button>

    <button mat-icon-button upovButton="primary" aria-label="Settings">
      <span class="material-icons">settings</span>
    </button>

    <button mat-icon-button upovButton="primary" aria-label="Settings">
      <span class="material-icons">settings</span>
    </button>
  </div>



</section>


    <!-- Badge -->
<section class="section">
  <h2>Badge</h2>

  <!-- Basic variants -->
  <h3>Variants</h3>
  <div class="demo-row">
    <upov-badge-atom label="Updated" variant="success"></upov-badge-atom>
    <upov-badge-atom label="New" variant="info"></upov-badge-atom>
    <upov-badge-atom label="Pending" variant="warning"></upov-badge-atom>
    <upov-badge-atom label="Default" variant="default"></upov-badge-atom>
  </div>


  <!-- Sizes -->
  <h3>Sizes</h3>
  <div class="demo-row items-center">
    <upov-badge-atom label="Small" size="small" variant="success"></upov-badge-atom>
    <upov-badge-atom label="Medium" size="medium" variant="success"></upov-badge-atom>
  </div>


  <!-- In Header -->
  <h3>In Header</h3>
  <div
    style="padding:16px; background:white; border-radius:8px; max-width:400px;">
    <h3 style="margin:0; display:flex; gap:8px; align-items:center;">
      Species Name
      <upov-badge-atom label="Updated" variant="success"></upov-badge-atom>
    </h3>
    <p style="margin:4px 0 0; color:#666;">
      Botanical description here...
    </p>
  </div>

  <!-- List / Card usage -->
  <h3>List Usage</h3>
  <div class="demo-row" style="flex-direction:column; gap:12px;">
    <div class="list-item">
      <span>Rosa hybrida L.</span>
      <upov-badge-atom label="Updated" variant="success"></upov-badge-atom>
    </div>

    <div class="list-item">
      <span>Tulipa gesneriana</span>
      <upov-badge-atom label="New" variant="info"></upov-badge-atom>
    </div>

    <div class="list-item">
      <span>Malus domestica</span>
      <upov-badge-atom label="Pending" variant="warning"></upov-badge-atom>
    </div>

    <div class="list-item">
      <span>Solanum lycopersicum</span>
      <upov-badge-atom label="Draft" variant="default"></upov-badge-atom>
    </div>
  </div>

  <!-- Custom labels -->
  <h3>Custom Status Labels</h3>
  <div class="demo-row">
    <upov-badge-atom label="Verified" variant="success"></upov-badge-atom>
    <upov-badge-atom label="In Review" variant="warning"></upov-badge-atom>
    <upov-badge-atom label="Featured" variant="info"></upov-badge-atom>
    <upov-badge-atom label="Protected" variant="success"></upov-badge-atom>
    <upov-badge-atom label="Expired" variant="default"></upov-badge-atom>
    <upov-badge-atom label="Beta" variant="warning"></upov-badge-atom>
    <upov-badge-atom label="Premium" variant="info"></upov-badge-atom>
    <upov-badge-atom label="Archived" variant="default"></upov-badge-atom>
  </div>

  <!-- Size comparison -->
  <h3>Size Comparison</h3>
  <div style="display:flex; flex-direction:column; gap:16px;">
    <div style="display:flex; gap:12px; align-items:center;">
      <strong>Small:</strong>
      <upov-badge-atom label="Updated" size="small" variant="success"></upov-badge-atom>
      <upov-badge-atom label="New" size="small" variant="info"></upov-badge-atom>
      <upov-badge-atom label="Hot" size="small" variant="warning"></upov-badge-atom>
    </div>

    <div style="display:flex; gap:12px; align-items:center;">
      <strong>Medium:</strong>
      <upov-badge-atom label="Updated" size="medium" variant="success"></upov-badge-atom>
      <upov-badge-atom label="New" size="medium" variant="info"></upov-badge-atom>
      <upov-badge-atom label="Hot" size="medium" variant="warning"></upov-badge-atom>
    </div>
  </div>

  <!-- Table usage -->
  <h3>In Table</h3>
  <table class="badge-table">
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
        <td>
          <upov-badge-atom label="Updated" size="small" variant="success"></upov-badge-atom>
        </td>
        <td>2024-01-28</td>
      </tr>
      <tr>
        <td>Tulipa gesneriana</td>
        <td>
          <upov-badge-atom label="New" size="small" variant="info"></upov-badge-atom>
        </td>
        <td>2024-01-29</td>
      </tr>
      <tr>
        <td>Malus domestica</td>
        <td>
          <upov-badge-atom label="Pending" size="small" variant="warning"></upov-badge-atom>
        </td>
        <td>2024-01-25</td>
      </tr>
    </tbody>
  </table>
</section>


      <!-- Chip -->
      <section class="section">
        <h2>Chip</h2>
        <div class="demo-row">
          <upov-chip-atom label="Default"></upov-chip-atom>
          <upov-chip-atom label="Outlined" variant="outlined"></upov-chip-atom>
          <upov-chip-atom label="Tonal" variant="tonal"></upov-chip-atom>
        </div>
        <h3>With icon &amp; removable</h3>
        <div class="demo-row">
          <upov-chip-atom label="With icon" icon="star" iconPosition="left"></upov-chip-atom>
          <upov-chip-atom label="Removable" [removable]="true"></upov-chip-atom>
          <upov-chip-atom label="Disabled" [disabled]="true"></upov-chip-atom>
        </div>
        <h3>Sizes</h3>
        <div class="demo-row items-center">
          <upov-chip-atom label="Small" size="small"></upov-chip-atom>
          <upov-chip-atom label="Medium" size="medium"></upov-chip-atom>
          <upov-chip-atom label="Large" size="large"></upov-chip-atom>
        </div>
      </section>

      <!-- Toggle -->
      <section class="section">
        <h2>Toggle</h2>
        <div class="demo-row">
          <upov-toggle
            ariaLabel="View mode"
            name="view-toggle"
            [options]="toggleOptions">
          </upov-toggle>
        </div>
      </section>

      <!-- Input -->
      <section class="section">
        <h2>Input</h2>
        <div class="grid gap-md">
          <div class="col-12 md:col-6 lg:col-4">
            <upov-input-atom label="Text input" placeholder="Enter text"></upov-input-atom>
          </div>
          <div class="col-12 md:col-6 lg:col-4">
            <upov-input-atom label="Search" placeholder="Search..." type="search" icon="search" [clearable]="true"></upov-input-atom>
          </div>
          <div class="col-12 md:col-6 lg:col-4">
            <upov-input-atom label="Password" placeholder="Enter password" type="password"></upov-input-atom>
          </div>
          <div class="col-12 md:col-6 lg:col-4">
            <upov-input-atom label="With icon" placeholder="Email" type="email" icon="mail"></upov-input-atom>
          </div>
          <div class="col-12 md:col-6 lg:col-4">
            <upov-input-atom label="Disabled" placeholder="Cannot edit" [disabled]="true"></upov-input-atom>
          </div>
          <div class="col-12 md:col-6 lg:col-4">
            <upov-input-atom label="Required" placeholder="Required field" [required]="true"></upov-input-atom>
          </div>
        </div>
      </section>

      <!-- Icon -->
      <section class="section">
        <h2>Icon</h2>
        <div class="demo-row items-center">
          <upov-icon-atom icon="home" size="small" color="primary"></upov-icon-atom>
          <upov-icon-atom icon="settings" size="medium" color="accent"></upov-icon-atom>
          <upov-icon-atom icon="favorite" size="large" color="warn"></upov-icon-atom>
          <upov-icon-atom icon="search" size="medium" color="inherit"></upov-icon-atom>
          <upov-icon-atom icon="info" size="medium" color="primary"></upov-icon-atom>
        </div>
      </section>

      <!-- Flag -->
      <section class="section">
        <h2>Flag</h2>
        <h3>Rectangle</h3>
        <div class="demo-row items-center">
          <upov-flag-atom isoCode="ch" alt="Switzerland" size="small"></upov-flag-atom>
          <upov-flag-atom isoCode="fr" alt="France" size="medium"></upov-flag-atom>
          <upov-flag-atom isoCode="de" alt="Germany" size="large"></upov-flag-atom>
          <upov-flag-atom isoCode="jp" alt="Japan" size="medium"></upov-flag-atom>
          <upov-flag-atom isoCode="br" alt="Brazil" size="medium"></upov-flag-atom>
          <upov-flag-atom isoCode="ke" alt="Kenya" size="medium"></upov-flag-atom>
        </div>
        <h3>Circle</h3>
        <div class="demo-row items-center">
          <upov-flag-atom isoCode="ch" alt="Switzerland" shape="circle" size="small"></upov-flag-atom>
          <upov-flag-atom isoCode="fr" alt="France" shape="circle" size="medium"></upov-flag-atom>
          <upov-flag-atom isoCode="de" alt="Germany" shape="circle" size="large"></upov-flag-atom>
          <upov-flag-atom isoCode="jp" alt="Japan" shape="circle" size="medium"></upov-flag-atom>
          <upov-flag-atom isoCode="br" alt="Brazil" shape="circle" size="medium"></upov-flag-atom>
        </div>
      </section>

      <!-- Spinner -->
      <section class="section">
        <h2>Spinner</h2>
        <div class="demo-row items-center">
          <upov-spinner-atom mode="indeterminate" [diameter]="40" color="primary"></upov-spinner-atom>
          <upov-spinner-atom mode="indeterminate" [diameter]="40" color="accent"></upov-spinner-atom>
          <upov-spinner-atom mode="determinate" [diameter]="50" [value]="65" color="primary" message="65% loaded"></upov-spinner-atom>
          <upov-spinner-atom mode="indeterminate" [diameter]="30" color="warn" message="Loading..."></upov-spinner-atom>
        </div>
      </section>

      <!-- Truncated Text -->
      <section class="section">
        <h2>Truncated Text</h2>
        <div class="truncate-demo">
          <upov-truncated-text>
            This is a very long text that should be truncated when it exceeds the available width. Hover over it to see the full content in a tooltip.
          </upov-truncated-text>
        </div>
        <div class="truncate-demo">
          <upov-truncated-text>
            Short text
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
      padding-bottom: 0.5rem;
      border-bottom: 1px solid var(--color-border, #e0e0e0);
    }

    h3 {
      margin: 1rem 0 0.5rem;
    }

    .demo-row {
      display: flex;
      flex-wrap: wrap;
      gap: 5rem;
       margin-top: 1rem;
      align-items: flex-start;
    }

    .dark-bg {
      background: #1a1a2e;
      padding: 1rem;
      border-radius: 8px;
      margin-top: 3rem;
    }

    .truncate-demo {
      max-width: 300px;
      margin-bottom: 0.5rem;
    }

    //badge
    .list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: white;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}

.badge-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

.badge-table th,
.badge-table td {
  padding: 12px;
  text-align: left;
}

.badge-table thead {
  background: #f5f5f5;
}

.badge-table tbody tr {
  border-top: 1px solid #e0e0e0;
}


.dark-bg {
  background: #17423c;
  padding: 1.5rem;
  border-radius: 8px;
}



  `,
})
export class AtomsPage {
  toggleOptions: ToggleOption[] = [
    {label: 'List', value: 'list'},
    {label: 'Grid', value: 'grid'},
    {label: 'Table', value: 'table'},
  ];
}
