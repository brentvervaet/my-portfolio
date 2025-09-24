#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_IMAGES_DIR = path.join(__dirname, '../public/images');
const OPTIMIZED_DIR = path.join(PUBLIC_IMAGES_DIR, 'optimized');

// Ensure optimized directory exists
if (!fs.existsSync(OPTIMIZED_DIR)) {
  fs.mkdirSync(OPTIMIZED_DIR, { recursive: true });
}

async function optimizeImage(inputPath, outputPath) {
  try {
    // Check if WebP version already exists and is newer than source
    if (fs.existsSync(outputPath)) {
      const inputStats = fs.statSync(inputPath);
      const outputStats = fs.statSync(outputPath);

      if (outputStats.mtime >= inputStats.mtime) {
        console.log(`⏭️  Skipped ${path.basename(inputPath)} (already optimized)`);
        return;
      }
    }

    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;

    await sharp(inputPath)
      .webp({
        quality: 85,
        effort: 6,
      })
      .toFile(outputPath);

    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const savings = (((originalSize - newSize) / originalSize) * 100).toFixed(1);

    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    console.log(
      `   ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024 / 1024).toFixed(2)}MB (${savings}% smaller)`
    );
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

async function processDirectory(dir) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory() && !itemPath.includes('optimized')) {
      // Recursively process subdirectory
      await processDirectory(itemPath);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();

      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const relativePath = path.relative(PUBLIC_IMAGES_DIR, itemPath);
        const outputPath = path.join(OPTIMIZED_DIR, relativePath.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

        // Create directory if it doesn't exist
        const outputDir = path.dirname(outputPath);
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }

        await optimizeImage(itemPath, outputPath);
      }
    }
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');

  const startTime = Date.now();
  let processedCount = 0;
  let skippedCount = 0;

  // Override console.log to count operations
  const originalLog = console.log;
  console.log = (...args) => {
    if (args[0]?.includes('✅')) processedCount++;
    if (args[0]?.includes('⏭️')) skippedCount++;
    originalLog(...args);
  };

  await processDirectory(PUBLIC_IMAGES_DIR);

  // Restore original console.log
  console.log = originalLog;

  const endTime = Date.now();

  console.log(`\n✨ Image optimization completed in ${((endTime - startTime) / 1000).toFixed(2)}s`);
  console.log(`📊 Processed: ${processedCount} images, Skipped: ${skippedCount} images`);
  console.log(`📁 Optimized images saved to: ${OPTIMIZED_DIR}`);
}

main().catch(console.error);
