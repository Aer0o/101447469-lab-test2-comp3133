import type { Routes } from "@angular/router"
import { MissionListComponent } from "./components/mission-list/mission-list.component"
import { MissionDetailsComponent } from "./components/mission-details/mission-details.component"

export const routes: Routes = [
  { path: "", component: MissionListComponent },
  { path: "mission/:id", component: MissionDetailsComponent },
  { path: "**", redirectTo: "" },
]

