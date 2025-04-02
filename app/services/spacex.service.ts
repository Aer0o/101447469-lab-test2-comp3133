import { Injectable } from "@angular/core"
import type { HttpClient } from "@angular/common/http"
import type { Observable } from "rxjs"
import type { Mission } from "../models/mission.model"

@Injectable({
  providedIn: "root",
})
export class SpacexService {
  private apiUrl = "https://api.spacexdata.com/v3"

  constructor(private http: HttpClient) {}

  // Get all launches
  getAllMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.apiUrl}/launches`)
  }

  // Get mission by flight number
  getMissionById(flightNumber: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.apiUrl}/launches/${flightNumber}`)
  }

  // Get missions filtered by year
  getMissionsByYear(year: string): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.apiUrl}/launches?launch_year=${year}`)
  }
}

