import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule,ValidatorFn, AbstractControl } from '@angular/forms';


// function dateRangeValidator():ValidatorFn {
//   return (control: AbstractControl): { [key: string]: any } | null => {
//     const form = control.parent as FormGroup;
//     if (!form) {
//       return null;
//     }

//     const startDate = form.get('startDate')?.value;
//     const endDate = form.get('endDate')?.value;

//     if (startDate && endDate) {
//       const start = new Date(startDate);
//       const end = new Date(endDate);
//       var validity = true;
//       console.log(validity);

//       if (end > start) {
//         validity = false;
//         console.log(validity);
//         return { 'dateInvalid': true };
//       }


//       const minimumEndDate = new Date(start);
//       minimumEndDate.setDate(start.getDate() + 1);

//       if (end > minimumEndDate) {
//         validity = false;
//         console.log(validity);
//         return { 'dateTooClose': true };
//       }
//     }

//     return null;
//   };
// }


@Component({
  selector: 'app-book',
  standalone: true,
  imports: [ ReactiveFormsModule ,CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit{
  bookForm : FormGroup;
  minEndDate : Date;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      startDate: [null, Validators.required],
      endDate: [null, [Validators.required, this.endDateValidator.bind(this)]],
      startPosition: [null, Validators.required],
      endPosition: [null, Validators.required]
    });

    this.bookForm.get('startDate')?.valueChanges.subscribe(startDate => {
      if (startDate) {
        this.minEndDate = new Date(startDate);
        this.bookForm.get('endDate')?.updateValueAndValidity();
      }
    });
  }

  endDateValidator(control: any): { [key: string]: any } | null {
    if (control.value && this.minEndDate && new Date(control.value) < this.minEndDate) {
      return { 'endDateInvalid': true };
    }
    return null;
  }

  get endDateMin(): string {
    return this.minEndDate ? this.minEndDate.toISOString().split('T')[0] : '';
  }

  onSubmit(): void {
    if (this.bookForm.valid) {

      console.log(this.bookForm.value);
    }
  }
}
