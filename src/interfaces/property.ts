export interface Property{
    id: string;
    name: string;
    totalValue:number;
    loan:Loan;
    income: number;
    expenses: number;
    isPPR: boolean;
}

interface Loan{
    downPayment:number;
    loanAmountRemaining: number;
    interestRate: number;
    startMonth: number;
}