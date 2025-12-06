import { Parser } from "expr-eval";
import { Rule, EvaluationContext, EvaluationResult } from "./types";

const parser = new Parser();

const safeFunctions: Record<string, Function> = {
  round: (v: number, d = 2) =>
    Math.round(v * Math.pow(10, d)) / Math.pow(10, d),
  min: Math.min,
  max: Math.max,
  abs: Math.abs,
};

export function evaluateRule(
  rule: Rule,
  context: EvaluationContext,
  mode: "monthly" | "annual" = "monthly"
): EvaluationResult {
  const formula = mode === "annual" ? rule.annualFormula : rule.monthlyFormula;

  if (!formula) {
    return {
      applies: false,
      value: null,
      ruleCode: rule.ruleCode,
      name: rule.name,
      category: rule.category,
    };
  }

  const conditionAst = rule.condition ? parser.parse(rule.condition) : null;
  const formulaAst = parser.parse(formula);

  const ctx = { ...context, ...safeFunctions };
  const applies = conditionAst ? Boolean(conditionAst.evaluate(ctx)) : true;
  const value = applies ? Number(formulaAst.evaluate(ctx)) : null;

  return {
    applies,
    value,
    ruleCode: rule.ruleCode,
    name: rule.name,
    category: rule.category,
  };
}
