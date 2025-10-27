# 📸 Image Optimization Guide

## Current Image Sizes

| Image | Current Size | Optimized Target | Savings |
|-------|-------------|------------------|---------|
| logos-empresas.webp | 601 KB | 150 KB | -75% |
| Andres Bilbao.webp | 438 KB | 110 KB | -75% |
| Dylan Rosemberg.webp | 424 KB | 106 KB | -75% |
| Daniel Bilbao.webp | 385 KB | 96 KB | -75% |
| Programa Ejecutivo.webp | 379 KB | 95 KB | -75% |
| Everybody AI Asset.webp | 334 KB | 84 KB | -75% |

**Total Current**: ~2.5 MB  
**Total Optimized**: ~640 KB  
**Total Savings**: ~1.9 MB (-76%)

---

## 🛠️ Optimization Methods

### Method 1: Online Tools (Easiest)
1. **Squoosh** (https://squoosh.app/)
   - Upload image
   - Select WebP format
   - Quality: 75-80
   - Download optimized version

2. **TinyPNG** (https://tinypng.com/)
   - Supports batch processing
   - Automatic optimization
   - Maintains quality

### Method 2: CLI Tools (Recommended for Batch)

#### Install cwebp (WebP encoder)
```bash
# Windows (via Chocolatey)
choco install webp

# macOS
brew install webp

# Linux
sudo apt-get install webp
```

#### Optimize Images
```bash
# Single image
cwebp -q 80 input.webp -o output.webp

# Batch optimize all WebP images
for file in public/assets/*.webp; do
  cwebp -q 80 "$file" -o "${file%.webp}-optimized.webp"
done
```

### Method 3: Node.js Script (Automated)

Create `optimize-images.js`:
```javascript
import sharp from 'sharp';
import { readdirSync } from 'fs';
import { join } from 'path';

const assetsDir = './public/assets';
const files = readdirSync(assetsDir).filter(f => f.endsWith('.webp'));

for (const file of files) {
  const input = join(assetsDir, file);
  const output = join(assetsDir, file.replace('.webp', '-opt.webp'));
  
  await sharp(input)
    .webp({ quality: 80 })
    .toFile(output);
  
  console.log(`Optimized: ${file}`);
}
```

Run with:
```bash
npm install sharp
node optimize-images.js
```

---

## 📋 Optimization Checklist

- [ ] Backup original images
- [ ] Optimize logos-empresas.webp (601 KB → 150 KB)
- [ ] Optimize Andres Bilbao.webp (438 KB → 110 KB)
- [ ] Optimize Dylan Rosemberg.webp (424 KB → 106 KB)
- [ ] Optimize Daniel Bilbao.webp (385 KB → 96 KB)
- [ ] Optimize Programa Ejecutivo.webp (379 KB → 95 KB)
- [ ] Optimize Everybody AI Asset.webp (334 KB → 84 KB)
- [ ] Replace original files
- [ ] Test on staging
- [ ] Deploy to production

---

## 🎯 Expected Performance Impact

### Before Optimization
- Total image weight: 2.5 MB
- Mobile load time: ~4-5s (3G)
- LCP: ~3.5s

### After Optimization
- Total image weight: 640 KB (-76%)
- Mobile load time: ~1.5-2s (3G)
- LCP: ~1.5s (-57%)

### Lighthouse Score Impact
- Performance: +15-20 points
- Best Practices: +5 points
- SEO: +3 points

---

## 💡 Best Practices

1. **Quality Settings**
   - Photos: 75-80 quality
   - Graphics/Logos: 85-90 quality
   - Screenshots: 80-85 quality

2. **Responsive Images**
   - Generate multiple sizes: 320w, 640w, 1024w, 1280w
   - Use `srcset` attribute
   - Let browser choose best size

3. **Lazy Loading**
   - Already implemented ✅
   - `loading="lazy"` on all images

4. **Format Selection**
   - WebP: Best compression, wide support ✅
   - AVIF: Better compression, limited support
   - Fallback to JPEG/PNG for old browsers

---

## 🚀 Quick Start

**Fastest method** (using Squoosh):
1. Go to https://squoosh.app/
2. Upload each image
3. Set quality to 80
4. Download and replace

**Estimated time**: 10-15 minutes for all images
