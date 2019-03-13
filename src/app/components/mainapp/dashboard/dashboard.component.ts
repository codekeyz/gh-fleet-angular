import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { Vehicle, DataList } from '../../../app.models';
import { DataService } from '../../../providers/data.service';
import {
  startWith,
  switchMap,
  distinctUntilChanged,
  map
} from 'rxjs/operators';

@Component({
  selector: 'app-dashyboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  vehicles$: Observable<DataList<Vehicle>>;

  constructor(private dataSvc: DataService) {}

  ngOnInit() {
    this.vehicles$ = interval(5000).pipe(
      startWith(0),
      switchMap(() => this.dataSvc.getMyVehicles<DataList<Vehicle>>()),
      distinctUntilChanged((x, y) => {
        return JSON.stringify(x.data) === JSON.stringify(y.data);
      })
    );
  }
}
