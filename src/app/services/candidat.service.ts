import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidat } from '../models/candidat.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  private apiUrl = '/assets/data/candidats.json';

  constructor(private http: HttpClient) {}

  getCandidats(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(this.apiUrl);
  }

  getCandidatById(id: number): Observable<Candidat> {
    return this.http.get<Candidat>(`${this.apiUrl}?id=${id}`);
  }
}
