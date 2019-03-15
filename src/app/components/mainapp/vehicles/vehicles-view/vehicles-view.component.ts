import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { DataList, Vehicle } from '../../../../app.models';
import { startWith, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { DataService } from '../../../../providers/data.service';

@Component({
  selector: 'app-vehicles-view',
  templateUrl: './vehicles-view.component.html',
  styleUrls: ['./vehicles-view.component.scss']
})
export class VehiclesViewComponent implements OnInit {
  vehicles$: Observable<DataList<Vehicle>>;

  constructor(private dataSvc: DataService) {}

  ngOnInit() {
    this.vehicles$ = interval(10000).pipe(
      startWith(0),
      switchMap(() => this.dataSvc.getMyVehicles<DataList<Vehicle>>()),
      distinctUntilChanged((x, y) => {
        return JSON.stringify(x.data) === JSON.stringify(y.data);
      })
    );
  }
}
