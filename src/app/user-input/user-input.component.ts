import { Component, output, signal } from '@angular/core';
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
  
  calculate = output<InvestmentInputModel>();

  txtInitialInvestment = signal('0');
  txtAnnualInvestment = signal('0');
  txtExpectedReturn = signal('0');
  txtDuration = signal('0');

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.txtInitialInvestment(),
      duration: +this.txtDuration(),
      expectedReturn: +this.txtExpectedReturn(),
      annualInvestment: +this.txtAnnualInvestment()
    })
    this.txtInitialInvestment.set('0');
    this.txtAnnualInvestment.set('0');
    this.txtExpectedReturn.set('0');
    this.txtDuration.set('0');
    
  }
}
