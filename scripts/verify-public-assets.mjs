import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

const projectRoot = process.cwd();
const publicRoot = join(projectRoot, "client", "public");
const scanRoots = [join(projectRoot, "client", "src"), join(projectRoot, "client", "index.html")];
const sourceExtensions = new Set([".html", ".ts", ".tsx", ".css"]);
const assetPattern = /["'`](\/(?!\/)[^"'`?#]+\.(?:avif|gif|jpe?g|png|svg|webp))["'`)]/gi;

function sourceFiles(path) {
  if (!existsSync(path)) return [];
  if (!statSync(path).isDirectory()) return sourceExtensions.has(extname(path)) ? [path] : [];
  return readdirSync(path, { withFileTypes: true }).flatMap((entry) =>
    sourceFiles(join(path, entry.name)),
  );
}

const files = scanRoots.flatMap(sourceFiles);
const missing = [];
const manuscriptReferences = [];
const checked = new Set();

for (const file of files) {
  const source = readFileSync(file, "utf8");
  if (source.includes("/manus-storage/")) {
    manuscriptReferences.push(relative(projectRoot, file));
  }

  for (const match of source.matchAll(assetPattern)) {
    const publicPath = match[1];
    if (checked.has(publicPath)) continue;
    checked.add(publicPath);
    if (!existsSync(join(publicRoot, publicPath.slice(1)))) missing.push(publicPath);
  }
}

if (manuscriptReferences.length || missing.length) {
  if (manuscriptReferences.length) {
    console.error(`Dead Manus storage references found in: ${manuscriptReferences.join(", ")}`);
  }
  if (missing.length) console.error(`Missing public assets: ${missing.join(", ")}`);
  process.exit(1);
}

console.log(`Verified ${checked.size} local image references; all files exist in client/public.`);
