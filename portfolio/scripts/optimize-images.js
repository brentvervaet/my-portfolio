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
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;
    
    await sharp(inputPath)
      .webp({
        quality: 85,
        effort: 6
      })
      .toFile(outputPath);
    
    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    console.log(`   ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024 / 1024).toFixed(2)}MB (${savings}% smaller)`);
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
  await processDirectory(PUBLIC_IMAGES_DIR);
  const endTime = Date.now();
  
  console.log(`\n✨ Image optimization completed in ${((endTime - startTime) / 1000).toFixed(2)}s`);
  console.log(`📁 Optimized images saved to: ${OPTIMIZED_DIR}`);
}

main().catch(console.error);