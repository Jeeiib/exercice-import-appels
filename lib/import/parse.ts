import type { FundingCall } from "./types";

export function parseFundingCalls(
  input: Buffer,
  filename: string,
): { valid: FundingCall[]; rejected: { line: number; reason: string }[] } {
  void input;
  void filename;
  throw new Error("À implémenter");
}
