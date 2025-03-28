import axios from 'axios'

const BASE_URL = 'https://molodost.club/_next/image';
const QUALITY = 75;

const sleep = ms => new Promise(res => setTimeout(res, ms));

async function generateOptimizedImages(imageUrls, widths) {
  try {
    for (const url of imageUrls) {
      for (const width of widths) {
        const { status, headers } = await axios.get(BASE_URL, {
          params: {
            url,
            w: width.toString(),
            q: QUALITY,
          },
          headers: {
            Accept: 'image/webp,image/avif,image/apng,image/svg+xml,image/*,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        });

        const dt = new Date().toLocaleString('en-GB', {
          timeZone: 'UTC',
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        });

        console.log(`[${dt}] [${status}] ${url} - ${width}`);
        console.log(headers);

        await sleep(100);
      }
    }

    console.log('Image generation request sent for all images.');
  } catch (error) {
    console.error('Error occurred while sending image generation requests:', error);

    throw error;
  }
}

const imageUrls = [
  '/images/main-cover.jpg',
  '/images/our-philosophy-cover.jpg',
  '/images/baza/baza1.jpg',
  '/images/baza/baza2.jpg',
];

const widths = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

(async () => {
  try {
    // await sleep(1000 * 60);
    await generateOptimizedImages(imageUrls, widths);

    console.log('Done');
    process.exit(0);
  } catch (error) {
    console.error('Fatal', error);
    process.exit(1);
  }
})();