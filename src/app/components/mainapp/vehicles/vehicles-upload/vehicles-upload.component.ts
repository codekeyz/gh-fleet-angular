import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgProgressRef, NgProgress } from '@ngx-progressbar/core';
import { DataService } from '../../../../providers/data.service';
import { ToastrService } from 'ngx-toastr';
import { Data, Vehicle } from '../../../../app.models';
import { FileUploader, FileLikeObject } from 'ng2-file-upload/ng2-file-upload';
import { TokenStorage } from '../../../../providers/token.storage';

@Component({
  selector: 'app-vehicles-upload',
  templateUrl: './vehicles-upload.component.html',
  styleUrls: ['./vehicles-upload.component.scss']
})
export class VehiclesUploadComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    authTokenHeader: 'Account-Token',
    authToken: this.TokenSto.getToken(),
    disableMultipart: false,
    autoUpload: false,
    method: 'post',
    itemAlias: 'images',
    allowedFileType: ['image']
  });

  reader = new FileReader();
  uploadForm: FormGroup;
  progressRef: NgProgressRef;

  constructor(
    private TokenSto: TokenStorage,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private progress: NgProgress,
    private dataSvc: DataService
  ) {}

  ngOnInit() {
    this.createForm();
    this.progressRef = this.progress.ref('masterProgress');
    this.uploader.onProgressItem = (progress: any) => {
      console.log(progress['progress']);
    };
    this.uploader.onBeforeUploadItem = item => {
      item.withCredentials = false;
    };
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
      license: [
        '',
        Validators.compose([
          Validators.pattern(/^([a-zA-Z]){2}(-| )[0-9]{4}(-| )[0-9]{2}$/)
        ])
      ],
      volume: ['Litres', Validators.compose([Validators.required])]
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
        this.uploader.setOptions({
          url: this.dataSvc.getUploadUrl(res.data.id)
        });
        this.uploadForm.reset();
        this.progressRef.complete();
        this.toastr.success(
          'Vehicle has been added\nStarting image upload now.',
          'Action completed Successfully',
          {
            closeButton: false,
            timeOut: 5000
          }
        );
        this.uploader.uploadAll();
      })
      .catch(err => {
        this.progressRef.complete();
        this.toastr.error(
          'Your Vehicle could not be added. Try again later',
          'Oops!'
        );
        console.log(err);
      });
  }

  public onFileSelected(event: EventEmitter<File[]>) {
    console.log(event);
  }
}
