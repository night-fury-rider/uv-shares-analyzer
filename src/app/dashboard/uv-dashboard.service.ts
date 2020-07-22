import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class UvDashboardService {

  constructor() { }

  private sectorSubject = new BehaviorSubject<number>(0);   // Value in brackets is default value of subject

  sectorSubscriber$ = this.sectorSubject.asObservable();

  updateSector(sectorId: number): void {	  // Whenever this method is called, it's  handler function will be called.
    this.sectorSubject.next(sectorId);
  }
}
