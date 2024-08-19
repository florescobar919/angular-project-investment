import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type InvestmentInputModel } from '../interfaces/investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() calculate = new EventEmitter<InvestmentInputModel>();

  txtInitialInvestment = '0';
  txtAnnualInvestment = '0';
  txtExpectedReturn = '0';
  txtDuration = '0';

  onSubmit() {
    console.log("submitted");
    this.calculate.emit({
      initialInvestment: +this.txtInitialInvestment,
      duration: +this.txtDuration,
      expectedReturn: +this.txtExpectedReturn,
      annualInvestment: +this.txtAnnualInvestment
    })
    
  }
}
