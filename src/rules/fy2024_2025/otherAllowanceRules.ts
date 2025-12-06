import { Rule } from "../../utils/types";

// Other Allowances: IF((Basic Wage+Daily wage)>20,2000,ROUND((2000/26)*(Basic Wage+Daily wage),0))
export const otherAllowanceRule: Rule = {
  ruleCode: "OTHER_ALLOWANCE",
  name: "Other Allowances",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Other Allowances = IF((Basic Wage+Daily wage)>20,2000,ROUND((2000/26)*(Basic Wage+Daily wage),0))",
  condition: "basic > 0 || dailyWages > 0",
  monthlyFormula: "round((basic + dailyWages) > 20 ? 2000 : ((2000 / 26) * (basic + dailyWages)), 0)",
  annualFormula: "round(((basic + dailyWages) > 20 ? 2000 : ((2000 / 26) * (basic + dailyWages))) * 12, 0)",
};

