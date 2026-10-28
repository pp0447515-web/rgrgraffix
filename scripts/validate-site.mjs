import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const appRoot = path.join(root, "app");
const imageRoot = path.join(root, "public", "images");
const routeFiles = [];
const sourceFiles = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(tsx|ts|css)$/.test(entry.name)) sourceFiles.push(full);
  }
}
walk(appRoot);

function routeFromPage(file) {
  const rel = path.relative(appRoot, path.dirname(file)).split(path.sep).filter(Boolean);
  if (path.basename(file) !== "page.tsx") return null;
  if (rel.length === 0) return "/";
  if (rel.some((segment) => segment.startsWith("(") && segment.endsWith(")"))) return null;
  return "/" + rel.join("/");
}
for (const file of sourceFiles) {
  const route = routeFromPage(file);
  if (route) routeFiles.push(route);
}
const routes = new Set(routeFiles);
const dynamicServiceFile = path.join(appRoot, "lib", "service-pages.ts");
const serviceData = fs.readFileSync(dynamicServiceFile, "utf8");
for (const match of serviceData.matchAll(/slug:\s*"([^"]+)"/g)) routes.add("/" + match[1]);

const allSource = sourceFiles.map((file) => ({ file, text: fs.readFileSync(file, "utf8") }));
const errors = [];
let linkCount = 0;
let imageCount = 0;

for (const { file, text } of allSource) {
  const relative = path.relative(root, file);
  for (const match of text.matchAll(/\bhref\s*=\s*["']([^"']+)["']/g)) {
    const href = match[1];
    linkCount++;
    if (href.startsWith("#")) {
      const allIds = new Set(allSource.flatMap(({ text: source }) => [...source.matchAll(/id=["']([^"']+)["']/g)].map((m) => m[1])));
      if (href.length > 1 && !allIds.has(href.slice(1))) errors.push(relative + ": anchor target " + href + " not found");
      continue;
    }
    if (/^(https?:|mailto:|tel:|sms:|#)/i.test(href)) continue;
    if (!href.startsWith("/") || href.startsWith("/images/") || href.startsWith("/_next/")) continue;
    const pathname = href.split(/[?#]/)[0].replace(/\/$/, "") || "/";
    const dynamicMatch = pathname.match(/^\/([^/]+)$/);
    if (routes.has(pathname) || (dynamicMatch && routes.has("/[slug]") && [...routes].includes("/" + dynamicMatch[1]))) continue;
    errors.push(relative + ": internal link " + href + " has no matching page route");
  }
  for (const match of text.matchAll(/["'`]([^"'\`]+\.(?:jpe?g|png|webp|avif|svg))["'`]/gi)) {
    const candidate = match[1].split("/").pop();
    if (!candidate || candidate.includes("$")) continue;
    const assetPath = path.join(imageRoot, candidate);
    if (fs.existsSync(assetPath)) imageCount++;
    else errors.push(relative + ": referenced image " + candidate + " is missing from public/images");
  }
  for (const match of text.matchAll(/\/images\/([^"'\` )}]+\.(?:jpe?g|png|webp|avif|svg))/gi)) {
    const candidate = match[1].split("/").pop();
    if (!candidate || candidate.includes("$")) continue;
    if (fs.existsSync(path.join(imageRoot, candidate))) imageCount++;
    else errors.push(relative + ": image URL /images/" + candidate + " is missing");
  }
}

const arrowFiles = allSource.filter(({ file, text }) => file.endsWith(".tsx") && text.includes("↗"));
if (arrowFiles.length) errors.push("CTA arrow glyph remains in: " + arrowFiles.map(({ file }) => path.relative(root, file)).join(", "));
if (errors.length) {
  console.error("Site validation failed:");
  for (const error of errors) console.error(" - " + error);
  process.exit(1);
}
console.log("Site validation passed: " + routes.size + " routes registered, " + linkCount + " static links inspected, " + imageCount + " image references verified, no upward diagonal arrows in TSX.");
