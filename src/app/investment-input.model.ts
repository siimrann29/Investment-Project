export interface InvestmentInputModel {
  initialInvestment:number,
  duration:number,
  expectedReturn:number,
  annualInvestment:number
}
 export interface AnnualResultModel {

  year: number,
  interest: number,
  valueEndOfYear: number,
  annualInvestment: number,
  totalInterest: number,
  totalAmountInvested: number,

}
export type Result = AnnualResultModel[];
