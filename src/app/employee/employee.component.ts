import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    street: [''],
    city: [''],
    state: [''],
    zip: [''],
    workDept: [''],
    salary: [''],
    bonus: [''],
    mobile: [''],
    employeeNum: [''],
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  employee = {
    firstName: {
      value: '',
      show: true,
      editable: true
    },
    lastName: {
      value: '',
      show: true,
      editable: true
    },
    street: {
      value: '',
      show: true,
      editable: true
    },
    city: {
      value: '',
      show: true,
      editable: true
    },
    state: {
      value: '',
      show: true,
      editable: true
    },
    zip: {
      value: '',
      show: true,
      editable: true
    },
    workDept: {
      value: '',
      show: true,
      editable: true
    },
    salary: {
      value: '',
      show: true,
      editable: true
    },
    bonus: {
      value: '',
      show: true,
      editable: true
    },
    mobile: {
      value: '',
      show: true,
      editable: true
    },
    employeeNum: {
      value: '',
      show: true,
      editable: true
    }

  };

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) { }


  updateProfile() {
    this.showOrHideFields(true);
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.showOrHideFields(false);
  }

  showOrHideFields(value: boolean) {
    for (let prop in this.employee) {
      if (!value) {
        if (this.profileForm.value[prop]) {
          this.employee[prop]['show'] = true;
        } else {
          this.employee[prop]['show'] = false;
        }
      } else {
        this.employee[prop]['show'] = true;
      }
      this.employee[prop]['editable'] == value;
    }
  }

}