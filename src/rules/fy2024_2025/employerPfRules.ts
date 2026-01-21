import { Rule } from "../../utils/types";

export const employeerPfRule: Rule = {
  ruleCode: "EMPLOYEER_PF",
  name: "Employeer Provident Fund",
  category: "Deduction",
  type: "Statutory",
  version: "FY2024-2025",
  description: "PF = 13% of Basic",
  condition: "basic > 0",
  monthlyFormula: "round(basic * 0.13, 0)",
  annualFormula: "round(basic * 0.13, 0) * 12",
};
