export type Rule = {
  ruleCode: string;
  name: string;
  category: "Earning" | "Deduction";
  type?: "Statutory" | "Custom";
  description?: string;
  version?: string;
  condition?: string;
  monthlyFormula?: string;
  annualFormula?: string;
};

export type EvaluationContext = {
  basic?: number;
  hra?: number;
  da?: number;
  specialAllowance?: number;
  conveyance?: number;
  gross?: number;
  grossEarnings?: number;
  ctc?: number;
  lopDays?: number;
  workedDays?: number;
  payableDays?: number;
  dailyWages?: number;
  totalDaysInMonth?: number;
  workingDaysInMonth?: number;
  noOfHolidays?: number;
  employeeCategory?: "HSW" | "SW" | "SSW";
  isPfApplicable?: boolean;
  isEsiApplicable?: boolean;
  isMetro?: boolean;
  pfWageLimit?: number;
  esiWageLimit?: number;
  state?: string;
  taxRegime?: "old" | "new";
  [key: string]: any;
};

export type EvaluationResult = {
  applies: boolean;
  value: number | null;
  ruleCode: string;
  name: string;
  category: string;
};
