import { Rule } from "../../utils/types";

export const geyserChargeRuleTierA: Rule = {
  ruleCode: "GEYSER_CHARGE",
  name: "Geyser Charge",
  category: "Deduction",
  type: "Fixed",
  version: "FY2024-2025",
  description: "Fixed monthly geyser charge deduction of Rs.91.",
  condition: "true",
  monthlyFormula: "91",
  annualFormula: "91 * 12",
};
