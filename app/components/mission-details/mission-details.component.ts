import { Component, type OnInit } from "@angular/core"
import type { ActivatedRoute, Router } from "@angular/router"
import type { SpacexService } from "../../services/spacex.service"
import type { Mission } from "../../models/mission.model"

@Component({
  selector: "app-mission-details",
  templateUrl: "./mission-details.component.html",
  styleUrls: ["./mission-details.component.scss"],
})
export class MissionDetailsComponent implements OnInit {
  mission: Mission | null = null
  loading = true
  error = ""

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spacexService: SpacexService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const flightNumber = params.get("id")
      if (flightNumber) {
        this.loadMissionDetails(+flightNumber)
      } else {
        this.router.navigate(["/"])
      }
    })
  }

  loadMissionDetails(flightNumber: number): void {
    this.loading = true
    this.spacexService.getMissionById(flightNumber).subscribe({
      next: (data) => {
        this.mission = data
        this.loading = false
      },
      error: (err) => {
        this.error = "Failed to load mission details. Please try again later."
        this.loading = false
        console.error("Error fetching mission details:", err)
      },
    })
  }

  goBack(): void {
    this.router.navigate(["/"])
  }
}

