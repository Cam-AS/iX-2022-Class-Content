import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private calculatorService: CalculatorService
  ) { }

  ngOnInit(): void {
  }

  addPost() {
    this.calculatorService.addPost();
  }

  addTwoNumbers() {
    this.calculatorService.addTwoNumbers();
  }

}
