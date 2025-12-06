import { Rule } from "../../utils/types";

export const gratuityRule: Rule = {
  ruleCode: "GRATUITY",
  name: "Gratuity",
  category: "Earning",
  version: "FY2024-2025",
  description: "4.81% of Basic (15/26 rule)",
  condition: "basic > 0",
  monthlyFormula: "round(basic * 0.0481, 2)",
  annualFormula: "round(basic * 0.0481 * 12, 2)",
};
