import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicles-upload',
  templateUrl: './vehicles-upload.component.html',
  styleUrls: ['./vehicles-upload.component.scss']
})
export class VehiclesUploadComponent implements OnInit {
  uploadForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.uploadForm = this.fb.group({
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      type: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      model: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      color: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      license: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      volume: ['Litres', Validators.compose([Validators.required])]
    });
  }

  upload() {}
}
