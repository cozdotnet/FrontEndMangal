
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  expense: string= '';
  goal: string = '';

  addExpense() {
    this.expenses.push(this.expense);
    this.expense = ''; 

    this.expenseService.addExpense(this.expense).subscribe(
      response => {
        console.log('Expense added successfully:', response);
      },
      error => {
        
        console.error('Failed to add expense:', error);
        
      }
    );
  }
  setGoal() {
    // Perform logic to set user's financial goal
  }

  generateReport() {
    // Perform logic to generate a report at the end of the month
  }
}
