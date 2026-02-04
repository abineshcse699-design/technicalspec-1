import {Component} from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import {
  AuthorityCard,
  AutocompleteList,
  type AutocompleteItem,
  type AutocompleteOption,
  EmptyStateComponent,
  FilterButtonComponent,
  FilterSelect,
  type FilterSelectOption,
  PaginationComponent,
  SearchInput,
  SpeciesCard,
  type ToggleOption,
} from 'upov-ui';

@Component({
  selector: 'app-molecules',
  imports: [
    AuthorityCard,
    AutocompleteList,
  MatExpansionModule,
    EmptyStateComponent,
    FilterButtonComponent,
    FilterSelect,
    PaginationComponent,
    SearchInput,
    SpeciesCard,
  ],
  template: `
    <div class="grid-container">
      <h1>Molecules</h1>

      <!-- Search Input -->

      <!-- SEARCH INPUT PLAYGROUND -->


<mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>Search Input</mat-panel-title>
          </mat-expansion-panel-header>
   <section class="section">
        <h2>Search Input</h2>

        <!-- Simple -->
        <h3>Simple</h3>
        <div class="demo-constrained">
          <upov-search-input
            placeholder="Search..."
            [clereable]="true">
          </upov-search-input>
        </div>

        <!-- Autocomplete Strings -->
        <h3>Autocomplete (Strings)</h3>
        <div class="demo-constrained">
          <upov-search-input
            placeholder="Search countries..."
            [clereable]="true"
            [autocomplete]="countryStrings">
          </upov-search-input>
        </div>

        <!-- Autocomplete Objects -->
        <h3>Autocomplete (Objects)</h3>
        <div class="demo-constrained">
          <upov-search-input
            placeholder="Search programming languages..."
            [clereable]="true"
            [autocomplete]="languageOptions">
          </upov-search-input>
        </div>

        <!-- Auto Submit -->
        <h3>Auto submit on select</h3>
        <div class="demo-constrained">
          <upov-search-input
            placeholder="Quick search..."
            [clereable]="true"
            [submitOnOptionSelect]="true"
            [autocomplete]="fruitOptions">
          </upov-search-input>
        </div>

        <!-- Toggle Options -->
        <h3>With Toggle Options</h3>
        <div class="demo-constrained">
          <upov-search-input
            placeholder="Search products..."
            [clereable]="true"
            [toggleOptions]="productToggleOptions"
            [autocomplete]="productOptions">
          </upov-search-input>
        </div>

        <!-- Full Featured -->
        <h3>Full Featured</h3>
        <div class="demo-constrained">
          <upov-search-input
            placeholder="Search users..."
            [clereable]="true"
            [toggleOptions]="userToggleOptions"
            [autocomplete]="userOptions">
          </upov-search-input>
        </div>

        <!-- Not Clearable -->
        <h3>Not Clearable</h3>
        <div class="demo-constrained">
          <upov-search-input
            placeholder="Search..."
            [clereable]="false"
            [autocomplete]="simpleOptions">
          </upov-search-input>
        </div>

        <!-- Accent Insensitive -->
        <h3>Accent Insensitive Search</h3>
        <div class="demo-constrained">
          <upov-search-input
            placeholder="Search cities..."
            [clereable]="true"
            [autocomplete]="cityOptions">
          </upov-search-input>
        </div>
    </section>

    </mat-expansion-panel >


      <!-- AUTHORITY CARD -->
       <mat-expansion-panel >
          <mat-expansion-panel-header>
            <mat-panel-title>Authority Card</mat-panel-title>
          </mat-expansion-panel-header>
<section class="section">
  <h2>Authority Card</h2>


  <div class="grid authority-grid">
        <!-- France (Image version) -->
    <upov-authority-card
      countryName="France"
      countryIso="FR"
      flagUrl="https://flagcdn.com/w80/fr.png"
      authorityName="INOV"
      phone="+33 1 23 45 67 89"
      email="contact@inov.fr"
      coverageType="All genera and species">
    </upov-authority-card>

    <!-- Germany (Image version) -->
    <upov-authority-card
      countryName="Germany"
      countryIso="DE"
      flagUrl="https://flagcdn.com/w80/de.png"
      authorityName="Bundessortenamt"
      phone="+49 511 9566 50"
      email="info@bundessortenamt.de"
      coverageType="All genera and species">
    </upov-authority-card>

     <!-- Japan (Image version with contact) -->
    <upov-authority-card
      countryName="Japan"
      countryIso="JP"
      flagUrl="https://flagcdn.com/w80/jp.png"
      authorityName="MAFF"

      coverageType="All genera and species">
    </upov-authority-card>

    <!-- European Union -->
    <upov-authority-card
      countryName="European Union"
      countryIso="EU"
      authorityName="CPVO"
      department="Community Plant Variety Office"
      phone="+33 4 90 14 81 00"
      email="cpvo@cpvo.europa.eu"
      website="https://www.cpvo.europa.eu"
      coverageType="All genera and species"
      memberSince="2005">
    </upov-authority-card>

    <!-- United Kingdom -->
    <upov-authority-card
      countryName="United Kingdom of Great Britain and Northern Ireland"
      countryIso="GB"
      flagUrl="https://flagcdn.com/w80/gb.png"
      authorityName="Animal and Plant Health Agency"
      department="Plant Varieties and Seeds Department of the Environment, Food and Rural Affairs"
      phone="+44 1223 342 350"
      email="plant.varieties@apha.gov.uk"
      website="https://www.gov.uk/government/organisations/animal-and-plant-health-agency"
      coverageType="All genera and species of agricultural crops, vegetables, fruits, and ornamental plants"
      memberSince="1968">
    </upov-authority-card>

    <!-- France (Image version) -->
    <upov-authority-card
      countryName="France"
      countryIso="FR"
      flagUrl="https://flagcdn.com/w80/fr.png"
      authorityName="INOV"
      phone="+33 1 23 45 67 89"
      email="contact@inov.fr"
      coverageType="All genera and species">
    </upov-authority-card>

    <!-- Germany (Image version) -->
    <upov-authority-card
      countryName="Germany"
      countryIso="DE"
      flagUrl="https://flagcdn.com/w80/de.png"
      authorityName="Bundessortenamt"
      phone="+49 511 9566 50"
      email="info@bundessortenamt.de"
      coverageType="All genera and species">
    </upov-authority-card>

    <!-- Japan (Image version with contact) -->
    <upov-authority-card
      countryName="Japan"
      countryIso="JP"
      flagUrl="https://flagcdn.com/w80/jp.png"
      authorityName="MAFF"
      phone="+81 3 3502 8111"
      email="info@maff.go.jp"
      coverageType="All genera and species">
    </upov-authority-card>

  </div>
</section>
</mat-expansion-panel >


   <!-- Species Card -->
<mat-expansion-panel >
  <mat-expansion-panel-header>
    <mat-panel-title>Species Card</mat-panel-title>
  </mat-expansion-panel-header>

  <section class="section">
    <h2>Species Card – List View</h2>

    <div class="species-stack">

      <!-- Rosa -->
      <upov-species-card
        speccyIcon="eco"
        speccyTitle="Rosa"
        speccyImage="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=400&fit=crop"
        family="Rosaceae"
        title="Rosa chinensis"
        subtitle="Chinese Rose"
        badge="Updated"
        variants="Old Blush, Mutabilis, Viridiflora, and many other cultivated varieties">
      </upov-species-card>

      <!-- Tomato – no image -->
      <upov-species-card
        family="Solanaceae"
        title="Solanum lycopersicum"
        variants="Cherry, Beefsteak, Roma, Heirloom varieties">
      </upov-species-card>

      <!-- Tulip – no image + badge -->
      <upov-species-card
        speccyIcon="local_florist"
        speccyTitle="Tulipa"
        family="Liliaceae"
        title="Tulipa gesneriana"
        subtitle="Garden Tulip"
        badge="Updated"
        variants="Darwin Hybrid, Triumph, Parrot, Fringed, decorative types">
      </upov-species-card>

      <!-- Sunflower -->
      <upov-species-card
        speccyIcon="yard"
        speccyTitle="Helianthus"
        speccyImage="https://images.unsplash.com/photo-1597848212624-e053fd0b2e46?w=400&h=400&fit=crop"
        family="Asteraceae"
        title="Helianthus annuus"
        subtitle="Common Sunflower"
        badge="Updated"
        variants="Mammoth Russian, Autumn Beauty, Velvet Queen, Teddy Bear">
      </upov-species-card>

      <!-- Oak – long text -->
      <upov-species-card
        speccyIcon="forest"
        speccyTitle="Quercus"
        speccyImage="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&h=400&fit=crop"
        family="Fagaceae"
        title="Quercus robur"
        subtitle="English Oak, European Oak"
        badge="Updated"
        variants="Atropurpurea, Concordia, Fastigiata, Pendula, Argenteomarginata, and many other selected cultivars">
      </upov-species-card>

      <!-- Lavender – no icon -->
      <upov-species-card
        speccyImage="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&h=400&fit=crop"
        family="Lamiaceae"
        title="Lavandula angustifolia"
        subtitle="English Lavender"
        badge="Updated"
        variants="Hidcote, Munstead, Royal Velvet, Melissa Lilac">
      </upov-species-card>

      <!-- Strawberry -->
      <upov-species-card
        speccyIcon="grass"
        speccyTitle="Fragaria"
        speccyImage="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop"
        family="Rosaceae"
        title="Fragaria × ananassa"
        badge="Updated"
        variants="Albion, Chandler, Seascape, Festival, Camarosa varieties">
      </upov-species-card>

      <!-- Mint – no badge -->
      <upov-species-card
        speccyIcon="spa"
        speccyTitle="Mentha"
        speccyImage="https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400&h=400&fit=crop"
        family="Lamiaceae"
        title="Mentha × piperita"
        subtitle="Peppermint"
        variants="Black Mitcham, White Peppermint, Chocolate Mint hybrids">
      </upov-species-card>

    </div>

    <h2>Species Card – Grid View</h2>

    <div class="species-grid">
      <upov-species-card
        speccyIcon="eco"
        speccyTitle="Rosa"
        speccyImage="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=400&fit=crop"
        family="Rosaceae"
        title="Rosa chinensis"
        subtitle="Chinese Rose"
        badge="Updated"
        variants="Old Blush, Mutabilis, Viridiflora varieties">
      </upov-species-card>

      <upov-species-card
        speccyIcon="local_florist"
        speccyTitle="Tulipa"
        family="Liliaceae"
        title="Tulipa gesneriana"
        subtitle="Garden Tulip"
        badge="Updated"
        variants="Darwin Hybrid, Triumph, Parrot types">
      </upov-species-card>
    </div>

    <h2>Species Card – Narrow Container</h2>

    <div class="species-narrow">
      <upov-species-card
        speccyIcon="eco"
        speccyTitle="Rosa"
        speccyImage="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=400&fit=crop"
        family="Rosaceae"
        title="Rosa chinensis"
        subtitle="Chinese Rose"
        badge="12"
        variants="Old Blush, Mutabilis, Viridiflora, and many other cultivated varieties">
      </upov-species-card>
    </div>




       <h2>Species Card</h2>

    <div class="species-stack">

      <!-- Complete with image + badge number -->
      <upov-species-card
        speccyIcon="eco"
        speccyTitle="ROSA"
        speccyImage="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=400&fit=crop"
        family="Rosaceae"
        title="Rosa chinensis"
        subtitle="Chinese Rose"
        badge="12"
        variants="Old Blush, Mutabilis, Viridiflora, and many other cultivated varieties">
      </upov-species-card>

      <!-- Broken image fallback -->
      <upov-species-card
        speccyIcon="bug_report"
        speccyTitle="TEST SPECIES"
        speccyImage="noImageAvailable.jpg"
        family="Testaceae"
        title="Testus brokenimgus"
        subtitle="Broken Image Test"
        badge="0"
        variants="This demonstrates the fallback when image fails to load">
      </upov-species-card>

        <h2>Different Icons</h2>
      <!-- Eco icon – no image -->
      <upov-species-card
        speccyIcon="eco"
        speccyTitle="ECO ICON"
        family="Rosaceae"
        title="Species with eco icon"
        variants="Demonstrating eco icon">
      </upov-species-card>

      <!-- Flower icon -->
      <upov-species-card
        speccyIcon="local_florist"
        speccyTitle="FLOWER ICON"
        family="Asteraceae"
        title="Species with flower icon"
        variants="Demonstrating local_florist icon">
      </upov-species-card>

      <!-- Yard icon -->
      <upov-species-card
        speccyIcon="yard"
        speccyTitle="YARD ICON"
        family="Fabaceae"
        title="Species with yard icon"
        variants="Demonstrating yard icon">
      </upov-species-card>

      <!-- Forest icon -->
      <upov-species-card
        speccyIcon="forest"
        speccyTitle="FOREST ICON"
        family="Pinaceae"
        title="Species with forest icon"
        variants="Demonstrating forest icon">
      </upov-species-card>

    </div>


  </section>
</mat-expansion-panel>


      <!-- Filter Button -->
   <!-- Filter Button -->

 <mat-expansion-panel >
          <mat-expansion-panel-header>
            <mat-panel-title>Filter Button</mat-panel-title>
          </mat-expansion-panel-header>

<section class="section">
  <h2>Filter Button</h2>

  <div class="demo-row">

    <!-- Default -->
    <upov-filter-button
      [active]="false"
      label="Show filters">
    </upov-filter-button>

    <!-- Active (Hide filters) -->
    <upov-filter-button
      [active]="true"
      label="Show filters">
    </upov-filter-button>

    <!-- Custom label -->
    <upov-filter-button
      [active]="false"
      label="Advanced filters">
    </upov-filter-button>

    <!-- Interactive -->
    <upov-filter-button
      [active]="filtersOpen"
      label="Show filters"
      (toggle)="onFilterToggle($event)">
    </upov-filter-button>

  </div>
</section>
</mat-expansion-panel >


     <!-- Filter Select -->

 <mat-expansion-panel >
          <mat-expansion-panel-header>
            <mat-panel-title>Filter Select</mat-panel-title>
          </mat-expansion-panel-header>
<section class="section">
  <h2>Filter Select</h2>

  <div class="grid gap-md">

    <!-- Simple -->
    <div class="col-12 md:col-6 lg:col-4">
      <h3>Simple</h3>
      <upov-filter-select
        placeholder="Family"
        [options]="familyOptions">
      </upov-filter-select>
    </div>

    <!-- With preselected values -->
    <div class="col-12 md:col-6 lg:col-4">
      <h3>With preselected values</h3>
      <upov-filter-select
        placeholder="Authority"
        [options]="authorityOptions"
        [value]="selectedAuthorities">
      </upov-filter-select>
    </div>

    <!-- Single select -->
    <div class="col-12 md:col-6 lg:col-4">
      <h3>Single select</h3>
      <upov-filter-select
        placeholder="Crop type"
        [multiple]="false"
        [options]="cropTypeOptions">
      </upov-filter-select>
    </div>

    <!-- Many selected -->
    <div class="col-12 md:col-6 lg:col-4">
      <h3>Many selected</h3>
      <upov-filter-select
        placeholder="Authority"
        [options]="authorityOptionsExtended"
        [value]="manySelectedAuthorities">
      </upov-filter-select>
    </div>

    <!-- Empty options -->
    <div class="col-12 md:col-6 lg:col-4">
      <h3>Empty options</h3>
      <upov-filter-select
        placeholder="Family"
        [options]="[]">
      </upov-filter-select>
    </div>

    <!-- Large dataset -->
    <div class="col-12 md:col-6 lg:col-4">
      <h3>Large dataset</h3>
      <upov-filter-select
        placeholder="Countries"
        [options]="largeCountryOptions">
      </upov-filter-select>
    </div>

  </div>
</section>
</mat-expansion-panel >


<!-- Pagination -->
  <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>Pagination</mat-panel-title>
          </mat-expansion-panel-header>
<section class="section">
  <h2>Pagination</h2>

  <div class="pagination-stack">

    <!-- Basic -->
    <div class="pagination-item">
      <h3>Basic</h3>
      <upov-pagination
        [currentPage]="pageBasic"
        [totalItems]="120"
        [itemsPerPage]="15"
        (pageChange)="pageBasic = $event">
      </upov-pagination>
    </div>

    <!-- Middle Page -->
    <div class="pagination-item">
      <h3>Middle Page</h3>
      <upov-pagination
        [currentPage]="pageMiddle"
        [totalItems]="120"
        [itemsPerPage]="15"
        (pageChange)="pageMiddle = $event">
      </upov-pagination>
    </div>

    <!-- Last Page -->
    <div class="pagination-item">
      <h3>Last Page</h3>
      <upov-pagination
        [currentPage]="pageLast"
        [totalItems]="120"
        [itemsPerPage]="15"
        (pageChange)="pageLast = $event">
      </upov-pagination>
    </div>

    <!-- Few Pages -->
    <div class="pagination-item">
      <h3>Few Pages</h3>
      <upov-pagination
        [currentPage]="pageFew"
        [totalItems]="30"
        [itemsPerPage]="15"
        (pageChange)="pageFew = $event">
      </upov-pagination>
    </div>

  </div>
</section>

</mat-expansion-panel >

<!-- Autocomplete List -->
   <mat-expansion-panel >
          <mat-expansion-panel-header>
            <mat-panel-title>Autocomplete List</mat-panel-title>
          </mat-expansion-panel-header>
<section class="section">
  <h2>Autocomplete List</h2>

  <div class="autocomplete-stack">

    <!-- Default with results -->
    <div class="autocomplete-item">
      <h3>Default (Species)</h3>
      <upov-autocomplete-list
        [items]="autoSpeciesItems">
      </upov-autocomplete-list>
    </div>

    <!-- Authority results -->
    <div class="autocomplete-item">
      <h3>Authority Results</h3>
      <upov-autocomplete-list
        [items]="autoAuthorityItems">
      </upov-autocomplete-list>
    </div>

    <!-- Empty state -->
    <div class="autocomplete-item">
      <h3>Empty State</h3>
      <upov-autocomplete-list
        [items]="[]"
        emptyText="No matches found"
        emptyHint="Try a different search term">
      </upov-autocomplete-list>
    </div>

    <!-- Loading -->
    <div class="autocomplete-item">
      <h3>Loading</h3>
      <upov-autocomplete-list
        [items]="[]"
        [loading]="true">
      </upov-autocomplete-list>
    </div>

    <!-- Long text stress -->
    <div class="autocomplete-item">
      <h3>Long Text</h3>
      <upov-autocomplete-list
        [items]="autoLongTextItems">
      </upov-autocomplete-list>
    </div>

    <!-- Only main text -->
    <div class="autocomplete-item">
      <h3>Main Text Only</h3>
      <upov-autocomplete-list
        [items]="autoMainOnlyItems">
      </upov-autocomplete-list>
    </div>

    <!-- Authority without ISO -->
    <div class="autocomplete-item">
      <h3>Authority (No ISO)</h3>
      <upov-autocomplete-list
        [items]="autoUnknownAuthorityItems">
      </upov-autocomplete-list>
    </div>

  </div>
</section>
  </mat-expansion-panel >


  <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>Empty State</mat-panel-title>
          </mat-expansion-panel-header>
<section class="section">
  <h2>Empty State</h2>

  <div class="empty-state-stack">

    <div class="empty-state-item">
      <h3>No search results</h3>
      <upov-empty-state
        icon="assets/icons/flower-no-results.svg"
        title='No results found for "<strong>rose</strong>"'
        subtitle="Try searching with different keywords or adjusting your filters.">
      </upov-empty-state>
    </div>

    <div class="empty-state-item">
      <h3>No results after filtering</h3>
      <upov-empty-state
        icon="assets/icons/flower-no-results.svg"
        title="No results match your filters"
        subtitle="Remove one or more filters to see available results.">
      </upov-empty-state>
    </div>

    <div class="empty-state-item">
      <h3>Before search</h3>
      <upov-empty-state
        title="Nothing to show yet"
        subtitle="Start by entering a search term above.">
      </upov-empty-state>
    </div>

    <div class="empty-state-item">
      <h3>Start search</h3>
      <upov-empty-state
        icon="assets/icons/flower-no-results.svg"
        title="Start your search"
        subtitle="Enter at least 3 characters to search for species.">
      </upov-empty-state>
    </div>

    <div class="empty-state-item">
      <h3>Search too short</h3>
      <upov-empty-state
        icon="assets/icons/flower-no-results.svg"
        title="Search term too short"
        subtitle="Please enter at least 3 characters to see results.">
      </upov-empty-state>
    </div>

    <div class="empty-state-item">
      <h3>No results with filters</h3>
      <upov-empty-state
        icon="assets/icons/flower-no-results.svg"
        title="No results with current filters"
        subtitle="Clear or change filters to broaden your results.">
      </upov-empty-state>
    </div>

    <div class="empty-state-item">
      <h3>Error state</h3>
      <upov-empty-state
        icon="assets/icons/flower-no-results.svg"
        title="Something went wrong"
        subtitle="We couldn’t load results. Please try again later.">
      </upov-empty-state>
    </div>

  </div>
</section>
</mat-expansion-panel >

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
      margin: 0.5rem 0;
    }

    .demo-row {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: flex-start;
    }

    .demo-constrained {
      max-width: 600px;
    }

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

    .authority-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(520px, 1fr));
      gap: 1.5rem;
    }


    .autocomplete-demo {
      border: 1px solid var(--color-border, #e0e0e0);
      border-radius: 4px;
      max-height: 250px;
      overflow: auto;
    }

    .authority-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(520px, 1fr));
  gap: 1.5rem;
}


.pagination-stack {
  display: flex;
  flex-direction: column;
  gap: 3rem; /* space between paginations */
}

.pagination-item {
  display: flex;
  flex-direction: column;
  align-items: center; /* pagination center */
}


.empty-state-stack {
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: center;
  margin-right:40px;
  gap: 3.5rem; /* space between empty states */
}

.empty-state-item {
  display: flex;
  flex-direction: column;

  // align-items: center;
  margin-left:20px;

}


.species-stack {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.species-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.species-narrow {
  max-width: 520px;
  padding: 1rem;
  border: 1px dashed #ccc;
  margin-top: 1.5rem;
}




  `,
})

export class MoleculesPage {
  currentPage = 1;


  // 🔥 Filter Button interactive state
  filtersOpen = false;

  onFilterToggle(state: boolean) {
    this.filtersOpen = state;
    console.log('Filter toggled:', state);
  }

  countryStrings: string[] = [
    'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Australia',
    'Austria', 'Belgium', 'Brazil', 'Canada', 'Chile', 'China',
    'Denmark', 'Egypt', 'Finland', 'France', 'Germany', 'India',
    'Italy', 'Japan', 'Mexico', 'Netherlands', 'Norway',
    'Spain', 'Sweden', 'Switzerland', 'United Kingdom', 'United States'
  ];

    languageOptions: AutocompleteOption[] = [
    { value: 'TypeScript', description: 'Typed superset of JavaScript' },
    { value: 'JavaScript', description: 'High-level programming language' },
    { value: 'Python', description: 'General-purpose language' },
    { value: 'Java', description: 'Object-oriented language' },
    { value: 'C#', description: '.NET ecosystem language' },
    { value: 'Go', description: 'Compiled, statically typed language' },
    { value: 'Rust', description: 'Systems programming language' },
  ];

   fruitOptions: string[] = [
    'Apple', 'Banana', 'Cherry', 'Date',
    'Elderberry', 'Fig', 'Grape', 'Honeydew'
  ];

  productOptions: string[] = [
    'Product A', 'Product B', 'Product C',
    'Product D', 'Product E'
  ];

  userOptions: AutocompleteOption[] = [
    { value: 'John Doe', description: 'Admin - john.doe@example.com' },
    { value: 'Jane Smith', description: 'Member - jane.smith@example.com' },
    { value: 'Bob Johnson', description: 'Member - bob.j@example.com' },
    { value: 'Alice Williams', description: 'Admin - alice.w@example.com' },
    { value: 'Charlie Brown', description: 'Guest - charlie.b@example.com' },
  ];

  simpleOptions: string[] = ['Option 1', 'Option 2', 'Option 3'];

  cityOptions: string[] = [
    'São Paulo', 'México City', 'Zürich', 'Montréal',
    'København', 'Kraków', 'Malmö', 'Łódź',
    'Bogotá', 'Córdoba'
  ];

  productToggleOptions: ToggleOption[] = [
    { label: 'All', value: 'all', active: true },
    { label: 'Active', value: 'active' },
    { label: 'Archived', value: 'archived' },
  ];

  userToggleOptions: ToggleOption[] = [
    { label: 'All Users', value: 'all', active: true },
    { label: 'Admins', value: 'admin' },
    { label: 'Members', value: 'member' },
    { label: 'Guests', value: 'guest' },
  ];



  autocompleteOptions: AutocompleteOption[] = [
    {value: 'Rosa', description: 'Rose'},
    {value: 'Triticum', description: 'Wheat'},
    {value: 'Zea mays', description: 'Maize'},
    {value: 'Solanum tuberosum', description: 'Potato'},
    {value: 'Malus domestica', description: 'Apple'},
  ];

  searchToggleOptions: ToggleOption[] = [
    {label: 'All', value: 'all'},
    {label: 'Genus', value: 'genus'},
    {label: 'Species', value: 'species'},
  ];

  autocompleteItems: AutocompleteItem[] = [
    {main: 'Rosa hybrida', sub: 'Hybrid rose'},
    {main: 'Rosa canina', sub: 'Dog rose'},
    {main: 'Rosa gallica', sub: 'French rose'},
    {main: 'Rosa damascena', sub: 'Damask rose'},
  ];

  filterCountryOptions: FilterSelectOption[] = [
    {value: 'ch', label: 'Switzerland'},
    {value: 'fr', label: 'France'},
    {value: 'de', label: 'Germany'},
    {value: 'jp', label: 'Japan'},
    {value: 'br', label: 'Brazil'},
  ];

  filterFamilyOptions: FilterSelectOption[] = [
    {value: 'rosaceae', label: 'Rosaceae'},
    {value: 'poaceae', label: 'Poaceae'},
    {value: 'solanaceae', label: 'Solanaceae'},
    {value: 'fabaceae', label: 'Fabaceae'},
  ];


  // ----- FILTER SELECT DATA -----

familyOptions: FilterSelectOption[] = [
  { value: 'rosaceae', label: 'Rosaceae' },
  { value: 'poaceae', label: 'Poaceae' },
  { value: 'fabaceae', label: 'Fabaceae' },
];

authorityOptions: FilterSelectOption[] = [
  { value: 'EU', label: 'European Union' },
  { value: 'US', label: 'United States' },
  { value: 'JP', label: 'Japan' },
];

selectedAuthorities: string[] = ['EU', 'US'];

cropTypeOptions: FilterSelectOption[] = [
  { value: 'fruit', label: 'Fruit' },
  { value: 'vegetable', label: 'Vegetable' },
  { value: 'ornamental', label: 'Ornamental' },
];

authorityOptionsExtended: FilterSelectOption[] = [
  { value: 'EU', label: 'European Union' },
  { value: 'US', label: 'United States' },
  { value: 'JP', label: 'Japan' },
  { value: 'CN', label: 'China' },
  { value: 'BR', label: 'Brazil' },
  { value: 'AU', label: 'Australia' },
];

manySelectedAuthorities: string[] = ['EU', 'US', 'JP', 'CN'];

largeCountryOptions: FilterSelectOption[] = Array.from(
  { length: 30 },
  (_, i) => ({
    value: `c${i}`,
    label: `Country ${i + 1}`,
  })
);


// ----- PAGINATION STATES -----
pageBasic = 1;
pageMiddle = 4;
pageLast = 8;
pageFew = 1;



// ----- AUTOCOMPLETE LIST DATA -----

autoSpeciesItems: AutocompleteItem[] = [
  { main: 'Triticum aestivum', sub: 'Wheat' },
  { main: 'Oryza sativa', sub: 'Rice' },
  { main: 'Zea mays', sub: 'Maize' },
];

autoAuthorityItems: AutocompleteItem[] = [
  { main: 'European Union', sub: 'EU' },
  { main: 'United States', sub: 'US' },
  { main: 'Japan', sub: 'JP' },
];

autoLongTextItems: AutocompleteItem[] = [
  {
    main: 'Extremely long species name that should be truncated properly',
    sub: 'Very long botanical description that must not break layout',
  },
];

autoMainOnlyItems: AutocompleteItem[] = [
  { main: 'ABCD123' },
  { main: 'EFGH456' },
  { main: 'IJKL789' },
];

autoUnknownAuthorityItems: AutocompleteItem[] = [
  { main: 'Unknown Authority' },
];



}
