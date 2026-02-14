const fs = require('fs');
const path = require('path');

const sourceDirImages = 'c:/Ottobon/Ex/framerusercontent.com/images';
const sourceDirRoot = 'c:/Ottobon/Ex';
const destDir = 'c:/Ottobon/Framer/src/assets';

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// Copy images from framerusercontent.com/images
try {
    const files = fs.readdirSync(sourceDirImages);
    files.forEach(file => {
        if (['.png', '.jpg', '.jpeg', '.svg', '.webp'].includes(path.extname(file).toLowerCase())) {
            fs.copyFileSync(path.join(sourceDirImages, file), path.join(destDir, file));
            console.log(`Copied ${file}`);
        }
    });
} catch (e) {
    console.error('Error reading images dir:', e);
}

// Copy gifs from root
try {
    const rootFiles = fs.readdirSync(sourceDirRoot);
    rootFiles.forEach(file => {
        if (path.extname(file).toLowerCase() === '.gif') {
            fs.copyFileSync(path.join(sourceDirRoot, file), path.join(destDir, file));
            console.log(`Copied ${file}`);
        }
    });
} catch (e) {
    console.error('Error reading root dir:', e);
}
