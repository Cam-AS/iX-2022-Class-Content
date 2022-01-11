import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest-calculator',
  templateUrl: './interest-calculator.component.html',
  styleUrls: ['./interest-calculator.component.css'],
})
export class InterestCalculatorComponent implements OnInit {
  amount?: number;
  interestRate?: number;
  years?: number;

  totalReturn?: any;
  totalInterest?: any;

  constructor() {}

  ngOnInit(): void {}

  calculateInterest() {
    // if(!this.isValid()) {
    //   return;
    // }

    if (
      this.amount != null &&
      this.interestRate != null &&
      this.years != null
    ) {
      this.totalReturn = (
        (this.amount * (1 + (this.interestRate * this.years)/100))
      ).toFixed(2);

      this.totalInterest = this.totalReturn - this.amount;
    }

    // this.resetForm();
  }

  // resetForm() {
  //   this.amount = '';
  //   this.interestRate = '';
  //   this.years = '';
  // }

  isValid() {
    return (
      this.amount != null && this.interestRate != null && this.years != null
    );
  }
}
