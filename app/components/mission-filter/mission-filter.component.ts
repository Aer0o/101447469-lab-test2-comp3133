import { Component, EventEmitter, type OnInit, Output } from "@angular/core"
import { FormControl } from "@angular/forms"
import type { SpacexService } from "../../services/spacex.service"

@Component({
  selector: "app-mission-filter",
  templateUrl: "./mission-filter.component.html",
  styleUrls: ["./mission-filter.component.scss"],
})
export class MissionFilterComponent implements OnInit {
  @Output() yearSelected = new EventEmitter<string>()

  yearControl = new FormControl("")
  availableYears: string[] = []

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.loadAvailableYears()
  }

  loadAvailableYears(): void {
    this.spacexService.getAllMissions().subscribe((missions) => {
      // Extract unique years from missions
      const years = missions.map((mission) => mission.launch_year)
      this.availableYears = Array.from(new Set(years)).sort((a, b) => b.localeCompare(a)) // Sort descending
    })
  }

  onYearChange(): void {
    this.yearSelected.emit(this.yearControl.value || "")
  }

  clearFilter(): void {
    this.yearControl.setValue("")
    this.yearSelected.emit("")
  }
}

