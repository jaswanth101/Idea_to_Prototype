const https = require('https');
const fs = require('fs');
const path = require('path');

const fonts = [
    { name: 'RecifeText-Regular.woff2', url: 'https://framerusercontent.com/assets/czRdVt9KYAAxi44Z6a3AWE.woff2' },
    { name: 'RecifeDisplay-SemiBold.ttf', url: 'https://framerusercontent.com/assets/NzryJlEMKHNS3wKLsE2zK61f8bM.ttf' },
    { name: 'Plain-Regular.otf', url: 'https://framerusercontent.com/assets/dLXUbsx7fjRTQYb0gNWF7jax2c.otf' },
    { name: 'Plain-Bold.otf', url: 'https://framerusercontent.com/assets/zecHNuQRxdvG1VAQId6Y9fDOsGQ.otf' },
    { name: 'Inter-Regular.woff2', url: 'https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2' }, // Latin subset
    { name: 'Inter-Bold.woff2', url: 'https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2' }, // Latin subset
];

const destDir = path.join(__dirname, 'src', 'assets', 'fonts');

// Ensure directory exists
if (!fs.existsSync(destDir)) {
    console.log(`Creating directory: ${destDir}`);
    fs.mkdirSync(destDir, { recursive: true });
}

// Download fonts
fonts.forEach(font => {
    const filePath = path.join(destDir, font.name);
    const file = fs.createWriteStream(filePath);

    console.log(`Downloading ${font.name}...`);
    https.get(font.url, response => {
        if (response.statusCode !== 200) {
            console.error(`Failed to download ${font.name}: status ${response.statusCode}`);
            file.close();
            fs.unlink(filePath, () => { }); // Delete failed file
            return;
        }

        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Successfully downloaded ${font.name}`);
        });
    }).on('error', err => {
        fs.unlink(filePath, () => { }); // Delete partial file
        console.error(`Error downloading ${font.name}: ${err.message}`);
    });
});
