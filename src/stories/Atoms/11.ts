import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
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
    MatExpansionModule,
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


        <!-- LOGO -->
        <mat-expansion-panel expanded>
          <mat-expansion-panel-header>
            <mat-panel-title>Logo</mat-panel-title>
          </mat-expansion-panel-header>

          <div class="section">
            <div class="demo-row items-center">
              <upov-logo size="small"></upov-logo>
              <upov-logo size="medium"></upov-logo>
              <upov-logo size="large"></upov-logo>
              <upov-logo [size]="100"></upov-logo>
            </div>

            <div class="demo-row items-center dark-bg">
              <upov-logo [size]="100" light></upov-logo>
            </div>
          </div>
        </mat-expansion-panel>


            <mat-expansion-panel>
 <mat-expansion-panel-header>
   <mat-panel-title>Button</mat-panel-title>
  </mat-expansion-panel-header>


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

</mat-expansion-panel>
    <!-- Badge -->

 <mat-expansion-panel>
 <mat-expansion-panel-header>
   <mat-panel-title>Badge</mat-panel-title>
  </mat-expansion-panel-header>

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

</mat-expansion-panel>

<!-- Chip -->
 <mat-expansion-panel>
 <mat-expansion-panel-header>
   <mat-panel-title>Chip</mat-panel-title>
  </mat-expansion-panel-header>

<section class="section">
  <h2>Chip</h2>

  <!-- Variants -->
  <h3>Variants</h3>
  <div class="demo-row">
    <upov-chip-atom label="Default"></upov-chip-atom>
    <upov-chip-atom label="Outlined" variant="outlined"></upov-chip-atom>
    <upov-chip-atom label="Tonal" variant="tonal"></upov-chip-atom>
  </div>

  <!-- Fixed & Disabled -->
  <h3>Fixed & Disabled</h3>
  <div class="demo-row">
    <upov-chip-atom label="Fixed Filter" [removable]="false"></upov-chip-atom>
    <upov-chip-atom label="Disabled Chip" [disabled]="true"></upov-chip-atom>
  </div>

  <!-- LEFT ICON POSITION -->
  <h3>Left Icon Position</h3>
  <div class="demo-row">
    <upov-chip-atom
      label="Public"
      icon="public"
      iconPosition="left"
      [removable]="true">
    </upov-chip-atom>

    <upov-chip-atom
      label="Eco"
      icon="eco"
      iconPosition="left"
      variant="outlined"
      [removable]="true">
    </upov-chip-atom>

    <upov-chip-atom
      label="Star"
      icon="star"
      iconPosition="left"
      variant="tonal"
      [removable]="true">
    </upov-chip-atom>
  </div>

  <!-- RIGHT ICON POSITION (NON-REMOVABLE) -->
  <h3>Right Icon Position (Non-removable)</h3>
  <div class="demo-row">
    <upov-chip-atom
      label="Public"
      icon="public"
      iconPosition="right"
      [removable]="false">
    </upov-chip-atom>

    <upov-chip-atom
      label="Eco"
      icon="eco"
      iconPosition="right"
      variant="outlined"
      [removable]="false">
    </upov-chip-atom>

    <upov-chip-atom
      label="Star"
      icon="star"
      iconPosition="right"
      variant="tonal"
      [removable]="false">
    </upov-chip-atom>
  </div>

  <!-- COMMON ICONS -->
  <h3>Common Icons</h3>
  <div class="demo-row">
    <upov-chip-atom label="Location" icon="location_on"></upov-chip-atom>
    <upov-chip-atom label="Filter" icon="filter_list"></upov-chip-atom>
    <upov-chip-atom label="Category" icon="category"></upov-chip-atom>
    <upov-chip-atom label="Label" icon="label"></upov-chip-atom>
    <upov-chip-atom label="Flag" icon="flag"></upov-chip-atom>
  </div>

  <!-- TEXT TRUNCATION -->
  <h3>Text Truncation (250px width)</h3>
  <div style="width:250px">
    <upov-chip-atom
      label="This is a very long label that will be truncated with ellipsis"
      [removable]="true">
    </upov-chip-atom>
  </div>

  <!-- PLAYGROUND -->
  <h3>Playground</h3>
  <div class="demo-row">
    <upov-chip-atom
      label="Customize Me"
      [removable]="true">
    </upov-chip-atom>
  </div>

</section>

</mat-expansion-panel>
     <!-- Toggle -->


  <mat-expansion-panel>
 <mat-expansion-panel-header>
   <mat-panel-title>Toggle</mat-panel-title>
  </mat-expansion-panel-header>
<section class="section">
  <h2>Toggle</h2>

  <!-- Default (Option 1 selected) -->
  <h3>Default</h3>
  <div class="demo-row">
    <upov-toggle
      ariaLabel="Options"
      name="options-default"
      [options]="toggleOptionsDefault"
      value="option1">
    </upov-toggle>
  </div>

  <!-- Status Toggle (All selected) -->
  <h3>Status</h3>
  <div class="demo-row">
    <upov-toggle
      ariaLabel="Status"
      name="status-toggle"
      [options]="toggleOptionsStatus"
      value="all">
    </upov-toggle>
  </div>

  <!-- View Toggle (Grid selected) -->
  <h3>View Mode</h3>
  <div class="demo-row">
    <upov-toggle
      ariaLabel="View mode"
      name="view-toggle"
      [options]="toggleOptionsView"
      value="grid">
    </upov-toggle>
  </div>

  <!-- Middle Selected -->
  <h3>Middle Selected</h3>
  <div class="demo-row">
    <upov-toggle
      ariaLabel="Options middle"
      name="options-middle"
      [options]="toggleOptionsDefault"
      value="option2">
    </upov-toggle>
  </div>
</section>
</mat-expansion-panel>


    <!-- Input -->

 <mat-expansion-panel>
 <mat-expansion-panel-header>
   <mat-panel-title>Input</mat-panel-title>
  </mat-expansion-panel-header>
<section class="section">
  <h2>Input</h2>

  <!-- Basic Inputs -->
  <h3>Basic Inputs</h3>
  <div class="grid gap-md">
    <div class="col-12">
      <upov-input-atom
        label="Species Name"
        placeholder="Species Name">
      </upov-input-atom>
    </div>

    <div class="col-12">
      <upov-input-atom
        placeholder="Authority name or ISO code"
        type="search"
        icon="search"
        [clearable]="true">
      </upov-input-atom>
    </div>

    <div class="col-12">
      <upov-input-atom
        label="Email Address"
        type="email"
        icon="email"
        [required]="true">
      </upov-input-atom>
    </div>

    <div class="col-12">
      <upov-input-atom
        label="Password"
        type="password"
        [required]="true">
      </upov-input-atom>
    </div>

    <div class="col-12">
      <upov-input-atom
        label="Disabled Input"
        placeholder="Disabled Input"
        [disabled]="true">
      </upov-input-atom>
    </div>
  </div>

  <!-- Search Variants -->
  <h3>Search Variants</h3>
  <div class="grid gap-md">
    <div class="col-12 md:col-6">
      <upov-input-atom
        placeholder="Search Species"
        icon="search"
        [clearable]="true">
      </upov-input-atom>
    </div>

    <div class="col-12 md:col-6">
      <upov-input-atom
        placeholder="Filter by Authority"
        icon="public"
        [clearable]="true">
      </upov-input-atom>
    </div>
  </div>

  <!-- Add New Species Form -->
  <h3>Add New Species</h3>
  <div style="max-width:420px; background:white; padding:20px; border-radius:12px;">
    <div class="grid gap-md">
      <div class="col-12">
        <upov-input-atom
          label="UPOV Code"
          [required]="true">
        </upov-input-atom>
      </div>

      <div class="col-12">
        <upov-input-atom
          label="Botanical Name"
          icon="spa"
          [required]="true">
        </upov-input-atom>
      </div>

      <div class="col-12">
        <upov-input-atom
          label="Common Name">
        </upov-input-atom>
      </div>

      <div class="col-12">
        <upov-input-atom
          label="Family"
          icon="eco">
        </upov-input-atom>
      </div>

      <div class="col-12">
        <button matButton upovButton="primary" style="width:100%">
          Add Species
        </button>
      </div>
    </div>
  </div>

  <!-- Search Blocks -->
  <h3>Search Blocks</h3>
  <div style="max-width:480px" class="grid gap-md">
    <div class="col-12">
      <p class="input-label">SPECIES SEARCH</p>
      <upov-input-atom
        placeholder="Search by UPOV code or botanical name..."
        icon="search"
        [clearable]="true">
      </upov-input-atom>
    </div>

    <div class="col-12">
      <p class="input-label">AUTHORITY SEARCH</p>
      <upov-input-atom
        placeholder="Authority name or ISO code..."
        icon="public"
        [clearable]="true">
      </upov-input-atom>
    </div>

    <div class="col-12">
      <p class="input-label">GUIDELINE SEARCH</p>
      <upov-input-atom
        placeholder="Search test guidelines..."
        icon="menu_book"
        [clearable]="true">
      </upov-input-atom>
    </div>
  </div>

  <!-- Contact Authority -->
  <h3>Contact Authority</h3>
  <div style="max-width:420px; background:white; padding:20px; border-radius:12px;">
    <div class="grid gap-md">
      <div class="col-12">
        <upov-input-atom
          label="Full Name"
          [required]="true">
        </upov-input-atom>
      </div>

      <div class="col-12">
        <upov-input-atom
          label="Email Address"
          type="email"
          icon="email"
          [required]="true">
        </upov-input-atom>
      </div>

      <div class="col-12">
        <upov-input-atom
          label="Organization"
          icon="business">
        </upov-input-atom>
      </div>

      <div class="col-12">
        <button matButton upovButton="primary" style="width:100%">
          Send Message
        </button>
      </div>
    </div>
  </div>

  <!-- Validation Example -->
  <h3>Validation</h3>
  <div style="max-width:400px" class="grid gap-md">
    <div class="col-12">
      <upov-input-atom
        label="Email (Required)"
        type="email"
        icon="email"
        [required]="true">
      </upov-input-atom>
    </div>

    <div class="col-12">
      <upov-input-atom
        label="Password (Required)"
        type="password"
        [required]="true">
      </upov-input-atom>
    </div>

   <p style="font-size:12px; color:#666; width:500px; margin:0 auto;">
  * Required fields must be filled
</p>

  </div>
</section>
  <section class="section">
          <h2>Input</h2>

          <!-- Simple text -->
          <h3>Simple Text</h3>
          <div style="max-width:600px">
            <upov-input-atom placeholder="Enter text..."></upov-input-atom>
          </div>

          <!-- Search -->
          <h3>Search Input</h3>
          <div style="max-width:600px">
            <upov-input-atom
              placeholder="Authority name or ISO code"
              icon="search"
              [clearable]="true">
            </upov-input-atom>
          </div>

          <!-- Required inputs -->
          <h3>Required Fields</h3>
          <div class="grid gap-md" style="max-width:600px">
            <upov-input-atom
              label="Email Address"
              type="email"
              icon="email"
              [required]="true">
            </upov-input-atom>

            <upov-input-atom
              label="Password"
              type="password"
              [required]="true">
            </upov-input-atom>


          </div>

          <!-- Disabled -->
          <h3>Disabled</h3>
          <div style="max-width:600px">
            <upov-input-atom
              label="Disabled Input"
              placeholder="Disabled Input"
              [disabled]="true">
            </upov-input-atom>
          </div>

          <!-- Filter panel -->
           <h2>Filter Options</h2>

  <div
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      background: white;
      padding: 24px;
      border-radius: 16px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.08);
      max-width: 300px;
    "
  >
    <!-- Inputs row -->
    <div
      style="
        display: flex;
        flex-direction: column;
        gap: 16px;
        flex: 1;
      "
    >
      <upov-input-atom
        label="Authority"
        icon="public">
      </upov-input-atom>

      <upov-input-atom
        label="Family"
        icon="eco">
      </upov-input-atom>

      <upov-input-atom
        label="Crop Type"
        icon="spa">
      </upov-input-atom>
    </div>

    <!-- Actions -->
    <div
      style="
        display: flex;
        gap: 12px;
        align-items: flex-end;
      "
    >
  <button
  matButton
  upovButton="primary"
  style="
    padding: 10px 32px;
    border-radius: 12px;
  ">
  Apply
</button>



      <button
        matButton
        upovButton
        style="padding: 12px 28px">
        Reset
      </button>
    </div>
  </div>

          <!-- Hero search -->
          <h3>Hero Search</h3>
          <div
            style="
              background:#1f4e45;
              padding:48px;
              border-radius:16px;
            "
          >
            <h2 style="color:white;text-align:center;margin:0 0 24px">
              Search UPOV Database
            </h2>

            <div style="max-width:600px;margin:0 auto">
              <upov-input-atom
                placeholder="Search for species, authorities, or guidelines..."
                icon="search"
                [clearable]="true">
              </upov-input-atom>
            </div>
          </div>

          <!-- Inline search -->
          <h3>Inline Search</h3>
          <div style="display:flex; gap:12px; max-width:700px">
            <upov-input-atom
              placeholder="Quick search..."
              icon="search"
              [clearable]="true"
              style="flex:1">
            </upov-input-atom>

            <button matButton upovButton="primary">
              Search
            </button>
          </div>
        </section>
</mat-expansion-panel>






      <!-- Icon -->
       <mat-expansion-panel>
  <mat-expansion-panel-header>
    <mat-panel-title>Icons</mat-panel-title>
  </mat-expansion-panel-header>
      <section class="section">
        <h2>Icon</h2>
        <div class="demo-row items-center">
          <upov-icon-atom icon="home" size="small" color="primary"></upov-icon-atom>
          <upov-icon-atom icon="settings" size="medium" color="accent"></upov-icon-atom>
          <upov-icon-atom icon="favorite" size="large" color="warn"></upov-icon-atom>
          <upov-icon-atom icon="search" size="medium" color="inherit"></upov-icon-atom>
          <upov-icon-atom icon="info" size="medium" color="primary"></upov-icon-atom>
        </div>

          <!-- 1. Sizes -->
    <h3>Sizes</h3>
    <div class="demo-row items-center">
      <upov-icon-atom icon="info" size="small"></upov-icon-atom>
      <upov-icon-atom icon="info" size="medium"></upov-icon-atom>
      <upov-icon-atom icon="info" size="large"></upov-icon-atom>
    </div>

    <!-- 2. Outline / Filled feel (same icon) -->
    <h3>Outline vs Filled</h3>
    <div class="demo-row items-center">
      <upov-icon-atom icon="info"></upov-icon-atom>
      <upov-icon-atom icon="info" class="material-icons"></upov-icon-atom>
    </div>

    <!-- 3. Common Icons -->
    <h3>Common Icons</h3>
    <div class="demo-row items-center">
      <upov-icon-atom icon="search"></upov-icon-atom>
      <upov-icon-atom icon="spa"></upov-icon-atom>
      <upov-icon-atom icon="menu_book"></upov-icon-atom>
      <upov-icon-atom icon="language"></upov-icon-atom>
      <upov-icon-atom icon="gavel"></upov-icon-atom>
      <upov-icon-atom icon="public"></upov-icon-atom>
      <upov-icon-atom icon="location_on"></upov-icon-atom>
      <upov-icon-atom icon="filter_list"></upov-icon-atom>
      <upov-icon-atom icon="expand_more"></upov-icon-atom>
      <upov-icon-atom icon="close"></upov-icon-atom>
      <upov-icon-atom icon="arrow_back_ios_new"></upov-icon-atom>
      <upov-icon-atom icon="business"></upov-icon-atom>
    </div>

    <!-- 4. Colors -->
    <h3>Colors</h3>
    <div
      style="
        display:flex;
        gap:32px;
        align-items:center;
        background:#f5f5f5;
        padding:24px;
        border-radius:12px;
      "
    >
      <div style="text-align:center">
        <upov-icon-atom icon="check_circle" size="large" color="primary"></upov-icon-atom>
        <p style="font-size:12px">Primary</p>
      </div>

      <div style="text-align:center">
        <upov-icon-atom icon="favorite" size="large" color="accent"></upov-icon-atom>
        <p style="font-size:12px">Accent</p>
      </div>

      <div style="text-align:center">
        <upov-icon-atom icon="warning" size="large" color="warn"></upov-icon-atom>
        <p style="font-size:12px">Warn</p>
      </div>

      <div
        style="
          text-align:center;
          background:#1f4e45;
          padding:16px;
          border-radius:8px;
        "
      >
        <upov-icon-atom
          icon="star"
          size="large"
          color="inherit"
          style="color:white">
        </upov-icon-atom>
        <p style="font-size:12px;color:white">Inherit</p>
      </div>
    </div>

    <!-- 5. Status Icons -->
    <h3>Status Icons</h3>
    <div class="demo-row items-center">
      <div style="display:flex;gap:8px;align-items:center">
        <upov-icon-atom icon="check_circle" color="primary"></upov-icon-atom>
        <span>Success</span>
      </div>

      <div style="display:flex;gap:8px;align-items:center">
        <upov-icon-atom icon="error" color="warn"></upov-icon-atom>
        <span>Error</span>
      </div>

      <div style="display:flex;gap:8px;align-items:center">
        <upov-icon-atom icon="warning" color="accent"></upov-icon-atom>
        <span>Warning</span>
      </div>

      <div style="display:flex;gap:8px;align-items:center">
        <upov-icon-atom icon="info" color="primary"></upov-icon-atom>
        <span>Info</span>
      </div>
    </div>

    <!-- 6. Navigation Icons -->
    <h3>Navigation Icons</h3>
    <div class="demo-row items-center">
      <upov-icon-atom icon="home"></upov-icon-atom>
      <upov-icon-atom icon="arrow_back"></upov-icon-atom>
      <upov-icon-atom icon="arrow_forward"></upov-icon-atom>
      <upov-icon-atom icon="menu"></upov-icon-atom>
      <upov-icon-atom icon="more_vert"></upov-icon-atom>
      <upov-icon-atom icon="settings"></upov-icon-atom>
      <upov-icon-atom icon="help"></upov-icon-atom>
      <upov-icon-atom icon="logout"></upov-icon-atom>
    </div>

    <!-- 7. Action Icons -->
    <h3>Action Icons</h3>
    <div class="demo-row items-center">
      <upov-icon-atom icon="edit"></upov-icon-atom>
      <upov-icon-atom icon="delete" color="warn"></upov-icon-atom>
      <upov-icon-atom icon="add"></upov-icon-atom>
      <upov-icon-atom icon="remove"></upov-icon-atom>
      <upov-icon-atom icon="save"></upov-icon-atom>
      <upov-icon-atom icon="download"></upov-icon-atom>
      <upov-icon-atom icon="upload"></upov-icon-atom>
      <upov-icon-atom icon="share"></upov-icon-atom>
    </div>

    <!-- 8. Icons inside Buttons -->
    <h3>Icons in Buttons</h3>
    <div class="demo-row items-center">
      <button matButton upovButton="primary" style="border-radius:12px">
        <upov-icon-atom icon="search" size="small" color="inherit"></upov-icon-atom>
        Search
      </button>

      <button matButton upovButton="primary" style="border-radius:12px">
        <upov-icon-atom icon="download" size="small" color="inherit"></upov-icon-atom>
        Download
      </button>

      <button matButton upovButton="primary" style="border-radius:12px">
        <upov-icon-atom icon="filter_list" size="small" color="inherit"></upov-icon-atom>
        Filter
      </button>

      <button matButton upovButton style="border-radius:12px">
        Add Species
        <upov-icon-atom icon="add" size="small"></upov-icon-atom>
      </button>
    </div>

    <!-- 9. Icon-only Buttons -->
    <h3>Icon-only Buttons</h3>
    <div class="demo-row items-center">
      <button mat-icon-button upovButton>
        <upov-icon-atom icon="edit"></upov-icon-atom>
      </button>

      <button mat-icon-button upovButton="primary">
        <upov-icon-atom icon="favorite"></upov-icon-atom>
      </button>

      <button mat-icon-button upovButton="danger">
        <upov-icon-atom icon="delete"></upov-icon-atom>
      </button>
    </div>


      </section>
</mat-expansion-panel>



<!-- Flag -->
<mat-expansion-panel>
  <mat-expansion-panel-header>
    <mat-panel-title>Flag</mat-panel-title>
  </mat-expansion-panel-header>

  <section class="section">
    <h2>Flag</h2>

    <!-- 1. Rectangle Flags -->
    <h3>Rectangle</h3>
    <div class="demo-row items-center">
      <upov-flag-atom isoCode="NL" size="small"></upov-flag-atom>
      <upov-flag-atom isoCode="NL" size="medium"></upov-flag-atom>
      <upov-flag-atom isoCode="NL" size="large"></upov-flag-atom>
      <upov-flag-atom isoCode="GB" size="large"></upov-flag-atom>
    </div>

    <!-- 2. Circle Flags -->
    <h3>Circle</h3>
    <div class="demo-row items-center">
      <upov-flag-atom isoCode="NL" shape="circle" size="small"></upov-flag-atom>
      <upov-flag-atom isoCode="FR" shape="circle" size="medium"></upov-flag-atom>
      <upov-flag-atom isoCode="DE" shape="circle" size="large"></upov-flag-atom>
    </div>

    <!-- 3. Sizes Comparison -->
    <h3>Sizes</h3>
    <div class="demo-row items-center">
      <upov-flag-atom isoCode="FR" size="small"></upov-flag-atom>
      <upov-flag-atom isoCode="FR" size="medium"></upov-flag-atom>
      <upov-flag-atom isoCode="FR" size="large"></upov-flag-atom>
    </div>

    <!-- 4. Fallback / Invalid -->
    <h3>Fallback</h3>
    <div class="demo-row items-center">
      <upov-flag-atom isoCode="XX" size="medium"></upov-flag-atom>
      <upov-flag-atom isoCode="" size="medium"></upov-flag-atom>
    </div>

    <!-- 5. Country Grid -->
    <h3>Country Grid</h3>
    <div
      style="
        display:grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap:16px;
      "
    >
      <div class="flag-card">
        <upov-flag-atom isoCode="NL" size="large"></upov-flag-atom>
        <p>Netherlands</p>
        <span>NL</span>
      </div>

      <div class="flag-card">
        <upov-flag-atom isoCode="FR" size="large"></upov-flag-atom>
        <p>France</p>
        <span>FR</span>
      </div>

      <div class="flag-card">
        <upov-flag-atom isoCode="DE" size="large"></upov-flag-atom>
        <p>Germany</p>
        <span>DE</span>
      </div>

      <div class="flag-card">
        <upov-flag-atom isoCode="BE" size="large"></upov-flag-atom>
        <p>Belgium</p>
        <span>BE</span>
      </div>

      <div class="flag-card">
        <upov-flag-atom isoCode="ES" size="large"></upov-flag-atom>
        <p>Spain</p>
        <span>ES</span>
      </div>

      <div class="flag-card">
        <upov-flag-atom isoCode="IT" size="large"></upov-flag-atom>
        <p>Italy</p>
        <span>IT</span>
      </div>

      <div class="flag-card">
        <upov-flag-atom isoCode="PL" size="large"></upov-flag-atom>
        <p>Poland</p>
        <span>PL</span>
      </div>

      <div class="flag-card">
        <upov-flag-atom isoCode="AT" size="large"></upov-flag-atom>
        <p>Austria</p>
        <span>AT</span>
      </div>
    </div>

    <!-- 6. Authority Card -->
    <h3>In Authority Card</h3>
    <div class="authority-card">
      <upov-flag-atom isoCode="NL" shape="circle" size="medium"></upov-flag-atom>
      <div>
        <strong>Netherlands</strong>
        <p>(NL)</p>
        <span>Board for Plant Varieties</span>
      </div>
    </div>

    <!-- 7. Flags in Table -->
    <h3>In Table</h3>
    <table class="flag-table">
      <thead>
        <tr>
          <th>Country</th>
          <th>ISO</th>
          <th>Species</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="flag-row">
              <upov-flag-atom isoCode="NL" size="small"></upov-flag-atom>
              Netherlands
            </div>
          </td>
          <td>NL</td>
          <td>1,234</td>
        </tr>
        <tr>
          <td>
            <div class="flag-row">
              <upov-flag-atom isoCode="FR" size="small"></upov-flag-atom>
              France
            </div>
          </td>
          <td>FR</td>
          <td>987</td>
        </tr>
        <tr>
          <td>
            <div class="flag-row">
              <upov-flag-atom isoCode="DE" size="small"></upov-flag-atom>
              Germany
            </div>
          </td>
          <td>DE</td>
          <td>856</td>
        </tr>
      </tbody>
    </table>

    <!-- 8. Flags inside Chips -->
    <h3>In Filter Chips</h3>
    <div class="demo-row">
      <div class="flag-chip">
        <upov-flag-atom isoCode="NL" size="small" shape="circle"></upov-flag-atom>
        Netherlands
        <span>×</span>
      </div>

      <div class="flag-chip">
        <upov-flag-atom isoCode="FR" size="small" shape="circle"></upov-flag-atom>
        France
        <span>×</span>
      </div>

      <div class="flag-chip">
        <upov-flag-atom isoCode="DE" size="small" shape="circle"></upov-flag-atom>
        Germany
        <span>×</span>
      </div>
    </div>


    <!-- UPOV Member States -->
<h3>UPOV Member States</h3>

<div
  style="
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 16px;
  "
>
  <div class="member-card">
    <upov-flag-atom isoCode="US" size="medium"></upov-flag-atom>
    <span>United States</span>
  </div>

  <div class="member-card">
    <upov-flag-atom isoCode="CA" size="medium"></upov-flag-atom>
    <span>Canada</span>
  </div>

  <div class="member-card">
    <upov-flag-atom isoCode="JP" size="medium"></upov-flag-atom>
    <span>Japan</span>
  </div>

  <div class="member-card">
    <upov-flag-atom isoCode="AU" size="medium"></upov-flag-atom>
    <span>Australia</span>
  </div>

  <div class="member-card">
    <upov-flag-atom isoCode="NZ" size="medium"></upov-flag-atom>
    <span>New Zealand</span>
  </div>

  <div class="member-card">
    <upov-flag-atom isoCode="KR" size="medium"></upov-flag-atom>
    <span>South Korea</span>
  </div>

  <div class="member-card">
    <upov-flag-atom isoCode="BR" size="medium"></upov-flag-atom>
    <span>Brazil</span>
  </div>

  <div class="member-card">
    <upov-flag-atom isoCode="CN" size="medium"></upov-flag-atom>
    <span>China</span>
  </div>
</div>


<!-- Flag States -->
<h3>Flag States</h3>

<div
  style="
    background: #f7f7f7;
    padding: 20px;
    border-radius: 12px;
    display: flex;
    justify-content: space-around;
    text-align: center;
    gap: 24px;
  "
>
  <div>
    <upov-flag-atom isoCode="NL" size="medium"></upov-flag-atom>
    <p style="margin-top: 8px; font-size: 13px;">Valid (NL)</p>
  </div>

  <div>
    <upov-flag-atom isoCode="XX" size="medium"></upov-flag-atom>
    <p style="margin-top: 8px; font-size: 13px;">Invalid (XX)</p>
  </div>

  <div>
    <upov-flag-atom isoCode="QZ" size="medium"></upov-flag-atom>
    <p style="margin-top: 8px; font-size: 13px;">Special (QZ)</p>
  </div>

  <div>
    <upov-flag-atom isoCode="" size="medium"></upov-flag-atom>
    <p style="margin-top: 8px; font-size: 13px;">Empty</p>
  </div>
</div>


  </section>


</mat-expansion-panel>

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
  padding-bottom: 2rem;
  border-bottom: 3px solid #e0e0e0;
}

.section:last-of-type {
  border-bottom: none;
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



.flag-card {
  text-align: center;
  padding: 12px;
  background: white;
  border-radius: 6px;
}

.flag-card p {
  margin: 8px 0 2px;
  font-size: 13px;
  font-weight: 500;
}

.flag-card span {
  font-size: 11px;
  color: #666;
}

.authority-card {
  display: flex;
  gap: 12px;
  align-items: center;
  background: white;
  padding: 16px;
  border-radius: 8px;
  max-width: 320px;
}

.authority-card p {
  margin: 2px 0;
  font-size: 12px;
  color: #666;
}

.authority-card span {
  font-size: 13px;
}

.flag-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

.flag-table th,
.flag-table td {
  padding: 12px;
  text-align: left;
}

.flag-table thead {
  background: #f5f5f5;
}

.flag-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.flag-chip {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #f5f5f5;
  border-radius: 16px;
  font-size: 13px;
}

.flag-chip span {
  cursor: pointer;
}
.member-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  padding: 14px 16px;
  border-radius: 8px;
  font-size: 14px;
}




  `,
})
export class AtomsPage {
  toggleOptions: ToggleOption[] = [
    {label: 'List', value: 'list'},
    {label: 'Grid', value: 'grid'},
    {label: 'Table', value: 'table'},
  ];


   toggleOptionsDefault: ToggleOption[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  toggleOptionsStatus: ToggleOption[] = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
  ];

  toggleOptionsView: ToggleOption[] = [
    { label: 'List', value: 'list' },
    { label: 'Grid', value: 'grid' },
    { label: 'Table', value: 'table' },
  ];

}

