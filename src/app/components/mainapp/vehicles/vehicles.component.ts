import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../providers/data.service';
import { Observable, interval } from 'rxjs';
import { DataList, Vehicle } from '../../../app.models';
import { startWith, switchMap, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  vehicles$: Observable<DataList<Vehicle>>;

  constructor(private dataSvc: DataService) {}

  ngOnInit() {
    this.vehicles$ = interval(5000).pipe(
      startWith(0),
      switchMap(() => this.dataSvc.getMyVehicles()),
      distinctUntilChanged((x, y) => {
        return JSON.stringify(x.data) === JSON.stringify(y.data);
      })
    );
  }
}
