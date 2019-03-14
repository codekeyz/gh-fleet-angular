import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
    this.uploadForm = this.fb.group({});
  }

  upload() {
    
  }
}
