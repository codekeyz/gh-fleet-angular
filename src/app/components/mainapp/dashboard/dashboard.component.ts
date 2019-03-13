import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../../../app.models';
import { DataService } from '../../../providers/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  vehicles$: Observable<Vehicle[]>;

  constructor(private dataSvc: DataService) {}

  ngOnInit() {
    this.dataSvc.getMyVehicles<Vehicle[]>().subscribe(res => {
      console.log(res);
    });
  }
}
