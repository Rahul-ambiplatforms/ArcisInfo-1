// Yield to the browser so the current task can paint before more work runs.
// Per web.dev/articles/optimize-long-tasks, scheduler.yield() is the modern,
// prioritized way; fall back to setTimeout for unsupported browsers (Safari,
// older Chrome). Use this inside click handlers right before heavy work
// (router.push, fetch kickoff, etc.) so the press visually commits first.
export function yieldToMain() {
  if (typeof globalThis !== "undefined" && globalThis.scheduler?.yield) {
    return globalThis.scheduler.yield();
  }
  return new Promise((resolve) => setTimeout(resolve, 0));
}
