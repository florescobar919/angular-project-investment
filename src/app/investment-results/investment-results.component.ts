import { Component, input } from '@angular/core';
import { type InvestmentResultModel } from '../interfaces/investment-result.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  //@Input() results? : InvestmentResultModel[]
  results = input<InvestmentResultModel[]>()
}
