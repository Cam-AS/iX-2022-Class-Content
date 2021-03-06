import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

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

  constructor(
    private calculatorService: CalculatorService
  ) {}

  ngOnInit(): void {}

  uploadPost() {
    this.calculatorService.addPost();
  }

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
