import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaginationService } from '../services/pagination.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  editForm!: FormGroup;
  userData: any;
  updatedData: any;
  userId = this.route.snapshot.paramMap.get('id');

  constructor(
    private formBuilder: FormBuilder,
    private paginationService: PaginationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.paginationService.getUserById(this.userId).subscribe({
      next: (data) => {
        this.userData = data;
      }
    });

    this.editForm = this.formBuilder.group({
      firstName: [''],
      age: [''],
      gender: ['']
    });
  }

  onSubmit(): void {
    this.updatedData = this.editForm.value;
  }
}
