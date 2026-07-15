// Build-blocking content validation. Run via `npm run validate:content`
// (also chained ahead of `npm run build`). Exits non-zero on any issue so a
// broken exercise pool can never ship.
//
// Run with tsx (see package.json). Uses relative imports so no path-alias
// resolution is required.
import { exercises } from '../content/exercises';
import { techniques } from '../content/techniques';
import { validateExercises } from '../content/validate';

const issues = validateExercises(
  exercises,
  techniques.map((technique) => technique.id)
);

if (issues.length === 0) {
  console.log(`✓ content: ${exercises.length} exercises passed validation`);
  process.exit(0);
}

// Group issues by exercise id for readable output.
const byId = new Map<string, typeof issues>();
for (const issue of issues) {
  const bucket = byId.get(issue.id) ?? [];
  bucket.push(issue);
  byId.set(issue.id, bucket);
}

console.error(`\n✗ content validation failed: ${issues.length} issue(s) across ${byId.size} exercise(s)\n`);
for (const [id, bucket] of byId) {
  console.error(`  ${id}`);
  for (const issue of bucket) {
    console.error(`    [${issue.rule}] ${issue.message}`);
  }
}
console.error('');
process.exit(1);
