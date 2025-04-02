import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { HttpClientModule } from "@angular/common/http"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { RouterModule, type Routes } from "@angular/router"

// Angular Material Imports
import { MatCardModule } from "@angular/material/card"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { MatSelectModule } from "@angular/material/select"
import { MatChipsModule } from "@angular/material/chips"
import { MatDividerModule } from "@angular/material/divider"
import { MatExpansionModule } from "@angular/material/expansion"

import { AppComponent } from "./app.component"
import { MissionListComponent } from "./components/mission-list/mission-list.component"
import { MissionDetailsComponent } from "./components/mission-details/mission-details.component"
import { MissionFilterComponent } from "./components/mission-filter/mission-filter.component"

const routes: Routes = [
  { path: "", component: MissionListComponent },
  { path: "mission/:id", component: MissionDetailsComponent },
  { path: "**", redirectTo: "" },
]

@NgModule({
  declarations: [AppComponent, MissionListComponent, MissionDetailsComponent, MissionFilterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

