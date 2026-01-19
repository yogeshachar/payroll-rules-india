import { Rule } from "../../utils/types";

// LEAVE: Basic * 5%
export const leaveBasic5Rule: Rule = {
  ruleCode: "LEAVE_BASIC_5",
  name: "Leave Allowance - 5% of Basic",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Leave Allowance = Basic * 5%",
  condition: "basic > 0",
  monthlyFormula: "round(basic * 0.05, 2)",
  annualFormula: "round(basic * 0.05 * 12, 2)",
};

// LEAVE: Basic * 4.8%
export const leaveBasic4_8Rule: Rule = {
  ruleCode: "LEAVE_BASIC_4_8",
  name: "Leave Allowance - 4.8% of Basic",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Leave Allowance = Basic * 4.8%",
  condition: "basic > 0",
  monthlyFormula: "round(basic * 0.048, 2)",
  annualFormula: "round(basic * 0.048 * 12, 2)",
};
