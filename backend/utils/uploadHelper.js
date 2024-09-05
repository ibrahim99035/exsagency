// Convert an image file to a base64 string
const imageToBase64 = (imagePath) => {
    const fs = require('fs');
    const image = fs.readFileSync(imagePath);
    return Buffer.from(image).toString('base64');
};

// Convert a base64 string to an image file
const base64ToImage = (base64String, outputPath) => {
    const fs = require('fs');
    const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
    fs.writeFileSync(outputPath, base64Data, 'base64');
};

module.exports = {
    imageToBase64,
    base64ToImage
};