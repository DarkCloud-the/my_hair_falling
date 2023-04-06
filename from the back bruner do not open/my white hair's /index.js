const axios = require('axios');
const cheerio = require('cheerio');
const query = 'hentai images ';

axios.get('https://www.google.com/search?q-${query}Stbm-isch')
    .then (response => {
        const $ = cheerio. load (response.data);
        const images = $('div.rg_meta').map((i, el) => {
        // Get the image URL and link
            const imageUrl = JSON.parse($(el).text( )).ou; 
            const linkUrl = JSON.parse($(el).text( )). ru;
            return { imageUrl, linkurl };
        }).get();

        // PrintIout the results in a table
        console, log(' Image\tLink');
        images, forEach( image => 
    console, Log(' $(image, imageUrl)\t$(image.LinkUrl)'));
});