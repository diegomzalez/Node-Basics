const sharp = require('sharp');

sharp('Screenshot_2021-10-01_14-52-57.png')
    .resize(80)
    .toFile('resized.png');
