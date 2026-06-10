export type Severity = "critical" | "high" | "medium" | "info";

/** Maps a severity to its chip class (color carries the meaning). */
export const sevClass: Record<Severity, string> = {
  critical: "sev sev-critical",
  high: "sev sev-high",
  medium: "sev sev-medium",
  info: "sev sev-info",
};

export const sevLabel: Record<Severity, string> = {
  critical: "Critical",
  high: "High",
  medium: "Medium",
  info: "Info",
};
