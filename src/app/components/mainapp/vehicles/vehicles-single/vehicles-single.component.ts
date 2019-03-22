import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../providers/data.service';
import { Vehicle, Data } from '../../../../app.models';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-vehicles-single',
  templateUrl: './vehicles-single.component.html',
  styleUrls: ['./vehicles-single.component.scss']
})
export class VehiclesSingleComponent implements OnInit {
  vehicle$: Observable<Vehicle>;

  constructor(private dataSvc: DataService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.vehicle$ = this.dataSvc
      .getVehicle<Data<Vehicle>>(this.route.snapshot.params.id)
      .pipe(map(res => res.data));
  }
}
