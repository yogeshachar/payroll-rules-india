import { Rule } from "../../utils/types";

// Bonus: Basic * 8.33%
export const bonusRule: Rule = {
  ruleCode: "BONUS",
  name: "Bonus",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Bonus = Basic * 8.33%",
  condition: "basic > 0",
  monthlyFormula: "round(basic * 0.0833, 2)",
  annualFormula: "round(basic * 0.0833 * 12, 2)",
};

export const bonusBasicPlusDARule: Rule = {
  ruleCode: "BONUS_BASIC_DA",
  name: "Bonus - 8.33% of Basic + DA",
  category: "Earning",
  type: "Custom",
  version: "FY2024-2025",
  description: "Bonus = (Basic + DA) × 8.33%",
  condition: "basicPlusDA > 0",
  monthlyFormula: "round(basicPlusDA * 0.0833, 2)",
  annualFormula: "round(basicPlusDA * 0.0833 * 12, 2)",
};
