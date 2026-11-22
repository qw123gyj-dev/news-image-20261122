// news-image-20261122 — make.fun program/v1 entry.
//
// The competition asks for one image that sums up the world news of
// Sunday 22 November 2026. That image is a newspaper front page:
// a masthead and date line, one lead story, two stories in a second
// row, four smaller stories, and a "day in brief" strip — seven
// pictured stories from one day, plus the briefs.
//
// The pictures are AI-generated photorealistic news-style photos
// (no recognisable faces of real people); every word on the page was
// typeset by code in build/page.html and rendered to exactly
// 1024 x 1024. The finished image lives in this repository as
// entry.png, and this program is deliberately small: it hands the
// grader an exact copy of that image and nothing else.
//
// Pure Node 22 standard library. No network, no randomness, no
// timestamps, nothing read from outside this repository, exactly
// one file written — so two runs produce identical bytes.
//
// The copy is verified, not trusted: after writing, the program
// reads the copy back and checks its length and its sha256 digest
// against the original, failing loudly on any mismatch instead of
// handing the grader a broken or partial file.

import { createHash } from 'node:crypto';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The directory this file lives in is the repository root, so the
// source image is always found next to the program, wherever the
// repository is checked out.
const REPO_DIR = dirname(fileURLToPath(import.meta.url));
const SOURCE_NAME = 'entry.png';

// Where the copy goes, in priority order: a path passed as the first
// command-line argument, the directory the grader asks for through
// MAKEFUN_OUTPUT_DIR, otherwise the conventional /output. An empty
// string counts as unset in both cases.
function resolveOutputDir(): string {
  const fromArg = (process.argv[2] ?? '').trim();
  if (fromArg.length > 0) {
    return fromArg;
  }
  const fromEnv = (process.env.MAKEFUN_OUTPUT_DIR ?? '').trim();
  if (fromEnv.length > 0) {
    return fromEnv;
  }
  return '/output';
}

// sha256 of a buffer, as a lowercase hex string.
function sha256Hex(data: Buffer): string {
  return createHash('sha256').update(data).digest('hex');
}

function main(): void {
  const sourcePath = join(REPO_DIR, SOURCE_NAME);
  const destDir = resolveOutputDir();
  const destPath = join(destDir, SOURCE_NAME);

  mkdirSync(destDir, { recursive: true });

  const bytes = readFileSync(sourcePath);
  writeFileSync(destPath, bytes);

  // Prove the copy is exact before exiting successfully.
  if (!existsSync(destPath)) {
    throw new Error(`output missing after write: ${destPath}`);
  }
  const expectedSize = statSync(sourcePath).size;
  const actualSize = statSync(destPath).size;
  if (actualSize !== expectedSize) {
    throw new Error(
      `entry.png copy is ${actualSize} bytes, expected ${expectedSize}`,
    );
  }
  const expectedHash = sha256Hex(bytes);
  const actualHash = sha256Hex(readFileSync(destPath));
  if (actualHash !== expectedHash) {
    throw new Error(
      `entry.png copy hash mismatch: got ${actualHash}, ` +
        `expected ${expectedHash}`,
    );
  }

  // A one-line receipt on stderr so a human running the program by
  // hand can see it worked; stdout stays clean and the file bytes
  // are unaffected either way.
  console.error(`wrote ${destPath} (${actualSize} bytes, sha256 ${actualHash})`);
}

main();
