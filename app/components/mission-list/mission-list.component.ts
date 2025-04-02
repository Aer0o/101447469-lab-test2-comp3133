import { Component, type OnInit } from "@angular/core"
import type { SpacexService } from "../../services/spacex.service"
import type { Mission } from "../../models/mission.model"

@Component({
  selector: "app-mission-list",
  templateUrl: "./mission-list.component.html",
  styleUrls: ["./mission-list.component.scss"],
})
export class MissionListComponent implements OnInit {
  missions: Mission[] = []
  filteredMissions: Mission[] = []
  loading = true
  error = ""

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.loadMissions()
  }

  loadMissions(): void {
    this.loading = true
    this.spacexService.getAllMissions().subscribe({
      next: (data) => {
        this.missions = data
        this.filteredMissions = data
        this.loading = false
      },
      error: (err) => {
        this.error = "Failed to load missions. Please try again later."
        this.loading = false
        console.error("Error fetching missions:", err)
      },
    })
  }

  onYearFilter(year: string): void {
    if (year) {
      this.spacexService.getMissionsByYear(year).subscribe({
        next: (data) => {
          this.filteredMissions = data
        },
        error: (err) => {
          console.error("Error filtering missions:", err)
        },
      })
    } else {
      this.filteredMissions = this.missions
    }
  }
}

