import { Rule } from "../../utils/types";

// RB: Basic * 4.81%
export const rbBasic4_81Rule: Rule = {
  ruleCode: "RB_BASIC_4_81",
  name: "Retention Bonus - 4.81% of Basic",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Retention Bonus = Basic * 4.81%",
  condition: "basic > 0",
  monthlyFormula: "round(basic * 0.0481, 2)",
  annualFormula: "round(basic * 0.0481 * 12, 2)",
};
export const rbEarningRule492: Rule = {
  ruleCode: "RB_4_92_PERCENT",
  name: "RB Allowance",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Retention Bonus = Basic * 4.92%",
  condition: "basic > 0",
  monthlyFormula: "round(basic * 0.0492, 2)",
  annualFormula: "round(basic * 0.0492 * 12, 2)",
};

// RB: Basic * 5%
export const rbBasic5Rule: Rule = {
  ruleCode: "RB_BASIC_5",
  name: "Retention Bonus - 5% of Basic",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Retention Bonus = Basic * 5%",
  condition: "basic > 0",
  monthlyFormula: "round(basic * 0.05, 2)",
  annualFormula: "round(basic * 0.05 * 12, 2)",
};

// RB: Basic * 10%
export const rbBasic10Rule: Rule = {
  ruleCode: "RB_BASIC_10",
  name: "Retention Bonus - 10% of Basic",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Retention Bonus = Basic * 10%",
  condition: "basic > 0",
  monthlyFormula: "round(basic * 0.1, 2)",
  annualFormula: "round(basic * 0.1 * 12, 2)",
};
export const rbBasic4_11Rule: Rule = {
  ruleCode: "RB_BASIC_4_11",
  name: "Retention Bonus - 4.11% of Basic",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Retention Bonus = Basic * 4.11%",
  condition: "basic > 0",
  monthlyFormula: "round(basic * 0.0411, 2)",
  annualFormula: "round(basic * 0.0411 * 12, 2)",
};

export const rbBasicPlusDA4_11Rule: Rule = {
  ruleCode: "RB_BASIC_DA_4_11",
  name: "Retention Bonus - 4.11% of Basic + DA",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Retention Bonus = (Basic + DA) × 4.11%",
  condition: "basicPlusDA > 0",
  monthlyFormula: "round(basicPlusDA * 0.0411, 2)",
  annualFormula: "round(basicPlusDA * 0.0411 * 12, 2)",
};
