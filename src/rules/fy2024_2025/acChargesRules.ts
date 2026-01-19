import { Rule } from "../../utils/types";

export const acChargesRule: Rule = {
  ruleCode: "AC_CHARGES",
  name: "AC Charges",
  category: "Deduction",
  type: "Fixed",
  version: "FY2024-2025",
  description: "Fixed monthly AC charges deduction of Rs.1625.",
  condition: "true",
  monthlyFormula: "1625",
};
