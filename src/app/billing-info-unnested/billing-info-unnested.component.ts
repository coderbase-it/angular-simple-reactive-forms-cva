import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-billing-info-unnested',
  templateUrl: './billing-info-unnested.component.html',
  styleUrls: ['./billing-info-unnested.component.css'],
})
export class BillingInfoUnnestedComponent implements OnInit {
  // public nestedForm: FormGroup = new FormGroup({
  //   fname: new FormControl("", [Validators.required]),
  //   email: new FormControl("", [Validators.required, Validators.email]),
  // addressLine: new FormControl("", [Validators.required]),
  // areacode: new FormControl("", [Validators.required, Validators.maxLength(5)])
  // })

  public nestedForm: FormGroup = new FormGroup({
    basicInfo: new FormControl(''),
    address: new FormControl(''),
  });
  constructor() {}

  ngOnInit() {
    this.nestedForm
      .get('address')
      .valueChanges.pipe(pluck('areacode'), distinctUntilChanged())
      .subscribe((data) => console.log(data));
  }

  public onSubmit() {
    // if(this.nestedForm.invalid){
    //   return
    // }

    console.log(' Billing Form', this.nestedForm);
  }

  ngAfterViewInit() {
    
  }

  removeControlEmail() {
    this.nestedForm.removeControl('email');
  }
}
