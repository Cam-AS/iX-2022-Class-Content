import { Component, OnInit } from '@angular/core';
import { InterestForm } from 'src/app/models/interest-form';

@Component({
  selector: 'app-interest-calculator',
  templateUrl: './interest-calculator.component.html',
  styleUrls: ['./interest-calculator.component.css']
})
export class InterestCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  interestForm: InterestForm = new InterestForm();

  totalReturn?: string;
  totalInterest?: string;

  calculateInterest() {
    let loan = this.interestForm.loan;
    let interest = this.interestForm.interest;
    let years = this.interestForm.years;

    if(loan != null && interest != null && years != null) {
      this.totalReturn = (loan * (1 + (interest * years) / 100)).toFixed(2);
      this.totalInterest = (Number(this.totalReturn)-loan).toFixed(2);
    }

    console.log('Your total return on investment: ' + this.totalReturn);
    console.log('Your total interest received: ' + this.totalInterest);
  }

}
