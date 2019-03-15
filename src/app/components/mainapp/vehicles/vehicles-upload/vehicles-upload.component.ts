import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgProgressRef, NgProgress } from '@ngx-progressbar/core';
import { DataService } from '../../../../providers/data.service';
import { ToastrService } from 'ngx-toastr';
import { Data, Vehicle } from '../../../../app.models';

@Component({
  selector: 'app-vehicles-upload',
  templateUrl: './vehicles-upload.component.html',
  styleUrls: ['./vehicles-upload.component.scss']
})
export class VehiclesUploadComponent implements OnInit {
  uploadForm: FormGroup;
  uploadImageForm: FormGroup;
  progressRef: NgProgressRef;

  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private progress: NgProgress,
    private dataSvc: DataService
  ) {}

  ngOnInit() {
    this.createForm();

    this.progressRef = this.progress.ref('masterProgress');
  }

  createForm() {
    this.uploadForm = this.fb.group({
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      type: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      model: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      color: [''],
      license: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^([a-zA-Z]){2}(-| )[0-9]{4}(-| )[0-9]{2}$/)
        ])
      ],
      volume: ['Litres', Validators.compose([Validators.required])]
    });

    this.uploadImageForm = this.fb.group({
      imageOne: ['', Validators.required]
    });
  }

  upload() {
    const name = this.uploadForm.value.name;
    const license_plate = this.uploadForm.value.license;
    const fuel_volume_units = (this.uploadForm.value.volume as string)
      .toLocaleLowerCase()
      .split(' ')
      .join('_');
    const color = this.uploadForm.value.color;
    const vehicle_type_model = this.uploadForm.value.model;
    const vehicle_type_name = this.uploadForm.value.type;
    this.progressRef.start();
    this.dataSvc
      .addVehicle<Data<Vehicle>>({
        name,
        license_plate,
        fuel_volume_units,
        color,
        vehicle_type_model,
        vehicle_type_name
      })
      .toPromise()
      .then(res => {
        this.uploadForm.reset();
        this.progressRef.complete();
        this.toastr.success('Your Vehicle has been added successfully', null, {
          closeButton: true,
          timeOut: 3000
        });
      })
      .catch(err => {
        this.uploadForm.reset();
        this.progressRef.complete();
        this.toastr.error(
          'Your Vehicle could not be added. Try again later',
          'Oops!'
        );
        console.log(err);
      });
  }

  uploadImages() {}
}
