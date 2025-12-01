/**
 * Validate chapter frontmatter metadata against JSON Schema
 * Uses ajv to validate all markdown files in docs/ against chapter-metadata-schema.json
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Ajv from 'ajv';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load the JSON Schema
const schemaPath = path.join(__dirname, '../contracts/chapter-metadata-schema.json');
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));

// Initialize Ajv
const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(schema);

// Function to recursively find all markdown files
function findMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findMarkdownFiles(filePath, fileList);
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Main validation function
function validateMetadata() {
  const docsDir = path.join(__dirname, '../docs');

  if (!fs.existsSync(docsDir)) {
    console.log('✓ No docs directory found - skipping validation');
    return true;
  }

  const markdownFiles = findMarkdownFiles(docsDir);

  if (markdownFiles.length === 0) {
    console.log('✓ No markdown files found - skipping validation');
    return true;
  }

  let errors = [];
  let validated = 0;

  console.log(`\nValidating ${markdownFiles.length} markdown files...\n`);

  markdownFiles.forEach(filePath => {
    const content = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter } = matter(content);

    // Skip files without frontmatter
    if (Object.keys(frontmatter).length === 0) {
      console.log(`⊘ Skipped ${path.relative(docsDir, filePath)} (no frontmatter)`);
      return;
    }

    const valid = validate(frontmatter);

    if (!valid) {
      errors.push({
        file: path.relative(docsDir, filePath),
        errors: validate.errors
      });
      console.log(`✗ ${path.relative(docsDir, filePath)}`);
    } else {
      validated++;
      console.log(`✓ ${path.relative(docsDir, filePath)}`);
    }
  });

  // Report results
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Validation Results:`);
  console.log(`  Total files: ${markdownFiles.length}`);
  console.log(`  Valid: ${validated}`);
  console.log(`  Invalid: ${errors.length}`);
  console.log(`${'='.repeat(60)}\n`);

  if (errors.length > 0) {
    console.log('Validation Errors:\n');
    errors.forEach(({ file, errors: fileErrors }) => {
      console.log(`File: ${file}`);
      fileErrors.forEach(err => {
        console.log(`  - ${err.instancePath || '/'}: ${err.message}`);
        if (err.params) {
          console.log(`    ${JSON.stringify(err.params)}`);
        }
      });
      console.log('');
    });

    process.exit(1);
  }

  console.log('✓ All markdown files have valid frontmatter metadata\n');
  return true;
}

// Run validation
try {
  validateMetadata();
} catch (error) {
  console.error('Error during validation:', error);
  process.exit(1);
}
