import cabPhoto from '../photos/cab_grape.jpg';
import syrahPhoto from '../photos/syrah_grape.jpg';
import zinPhoto from '../photos/zin_grape.jpg';
import pnPhoto from '../photos/pinotnoir_grape.jpg';
import chardPhoto from '../photos/chard_grape.jpg';
import sbPhoto from '../photos/sb_grape.jpg';
import pgPhoto from '../photos/pinotgris_grape.jpg';
import riesPhoto from '../photos/ries_grape.jpg';

const varietalData = [
  //
  // Red Varietals
  //
  {
    name: 'Cabernet Sauvignon',
    color: 'Red',
    pronunciation: '“Kab-er-nay Saw-vin-yawn”',
    taste: [
      'Black Cherry',
      'Black Currant',
      'Baking Spices',
      'Cedar (from Oak)',
    ],
    style: 'Full-Bodied Red Wine',
    countryOfOrigin: 'France',
    description:
      'Cabernet Sauvignon is a full-bodied red grape first heavily planted in the Bordeaux region. Today, it’s the most popular wine variety in the world! Cabernets (cabs for short) are full-bodied with bold tannins and a long persistent finish driven mostly by the higher levels of alcohol and tannin that often accompany these wines.',
    foodPairing: [
      'Lamb',
      'Beef',
      'Smoked Meats',
      'Firm cheeses like Aged Cheddar or Pecorino',
    ],
    funFact:
      'There’s a reason why Cab tastes great with steak! Researchers studying the effects of certain foods on the tongue found that the tannins in Cabernet Sauvignon act as “scrapers” to fats and proteins that collect on your tongue from the food you eat. Steak has higher levels of proteins and fats and thus needs a wine with higher tannin.',
    img: cabPhoto,
  },
  {
    name: 'Syrah',
    color: 'Red',
    pronunciation: '“Sear-ah” (aka Shiraz)',
    taste: [
      'Blueberry',
      'Plum',
      'Tobacco',
      'Cured meat',
      'Black Pepper',
      'Violet',
    ],
    style: 'Full-Bodied Red Wine',
    countryOfOrigin: 'France',
    description:
      'Syrah (aka Shiraz) is a full-bodied red wine that’s heavily planted in the Rhône Valley in France and Australia. The wines have intense fruit flavors and medium-weight tannins. Syrah is commonly blended with Grenache and Mourvèdre to create the red Rhône blend. The wine often has a meaty (beef broth, jerky) quality.',
    foodPairing: [
      'Lamb',
      'Beef',
      'Smoked meats',
      'French and American firm cheeses like White Cheddar',
      'Hard cheeses like Spanish Manchego',
    ],
    funFact:
      'Syrah and Shiraz are the same grape! Known as Syrah in France (its country of origin) as well as in the rest of Europe and most of the United States, it is referred to as Shiraz in Australia, New Zealand, South Africa, and Canada. The name “Shiraz” may have originated from ancient Persia.',
    img: syrahPhoto,
  },
  {
    name: 'Zinfandel',
    color: 'Red',
    pronunciation: '“Zin-fan-dell”',
    taste: [
      'A broad, exotic array of fruits from stone (overripe nectarine), to red (raspberry, sour cherry), to blue (plum, blueberry), to black (blackberry, boysenberry)',
      'Asian 5 Spice Powder',
      'Sweet Tobacco',
    ],
    style: 'Medium-bodied to full-bodied Red Wine',
    countryOfOrigin: 'Croatia (Tribidrag grape)',
    description:
      'Zinfandel (aka Primitivo) is a medium-bodied red wine that originated in Croatia. Wines are fruit-forward and spicy with a medium length finish. Zinfandel is a red grape that may be better known in its pink variation, White Zinfandel.',
    foodPairing: [
      'Chicken',
      'Pork',
      'Cured meat',
      'Lamb',
      'Beef',
      'Barbecue',
      'Italian, American, Chinese, Thai and Indian foods',
      'Full-flavored cheeses like Cheddar and firm cheeses such as Manchego',
    ],
    funFact:
      'In 1972, Sutter Home famously created their extremely popular White Zinfandel. While some wine lovers consider this an “entry level” wine, we have this pink pleaser to thank for today’s wonderful old-vine Zins. Its popularity ensured that Zinfandel vines were not grafted over when red Zin fell out of favor in the late 70s.',
    img: zinPhoto,
  },
  {
    name: 'Pinot Noir',
    color: 'Red',
    pronunciation: '“Pee-no Nwar”',
    taste: [
      'Very red fruited (cherry, cranberry) and red-floral (rose)',
      'Often with appealing vegetal notes of beet',
      'Rhubarb',
      'Mushroom',
    ],
    style: 'Lighter-bodied Red Wine',
    countryOfOrigin: 'France',
    description:
      'Pinot Noir is a dry, light-bodied red that was first widely planted in France. The wines typically have higher acidity and soft a soft, smooth, low-tannin finish.',
    foodPairing: [
      'Chicken',
      'Pork',
      'Veal',
      'Duck',
      'Cured meat',
      'Cream sauces',
      'Soft cheeses',
      'Nutty medium-firm cheeses like Gruyère',
    ],
    funFact:
      'Chardonnay is related to Pinot Noir. It’s a natural crossing of Pinot Noir and Gouais Blanc (the near-extinct variety mentioned above!). This is why Chardonnay and Pinot Noir always seem to grow together (such as in Oregon, Burgundy, and Chile). While I’m rambling on this topic, the same relationship is true between Sauvignon Blanc and Cabernet Sauvignon, which is why regions like Bordeaux and Napa both grow Cabernet and Sauvignon Blanc. Aha!',
    img: pnPhoto,
  },
  //
  // White Varietals
  //
  {
    name: 'Chardonnay',
    color: 'White',
    pronunciation: '“Shar-dun-nay”',
    taste: [
      'Yellow citrus (Meyer lemon)',
      'Yellow pomaceous fruits (like yellow pear and apple)',
      'Tropical fruits like banana or pineapple',
      'Butterscotch',
      'Vanilla or toasted caramel notes from oak',
    ],
    style: 'Medium to Full-Bodied White Wine',
    countryOfOrigin: 'France',
    description:
      'Chardonnay is a dry full-bodied white wine that was planted in large quantities for the first time in France. When oak-aged, Chardonnay will have spicy, bourbon-y notes. Unoaked wines are lighter and zesty with apple and citrus flavors. Chardonnay is the white grape of Burgundy.',
    foodPairing: [
      'Lobster',
      'Crab',
      'Shrimp',
      'Chicken',
      'Pork',
      'Mushroom',
      'French cream sauces',
      'Soft cheeses such as triple cream brie and medium-firm cheeses like Gruyère',
    ],
    funFact:
      'Chardonnay achieved its reputation for greatness in the Burgundy region of France over 1200 years ago. Around 800 A.D. the wife of the Emperor Charlemagne, disgusted by the red wine that stained her husband’s white beard, ordered that white grapes be planted in their Burgundy vineyard, which is now called Corton-Charlemagne.',
    img: chardPhoto,
  },
  {
    name: 'Sauvignon Blanc',
    color: 'White',
    pronunciation: '“Saw-vin-yawn Blonk”',
    taste: [
      'Aggressively-citrus-driven (grapefruit pith)',
      'Exotic fruits (honeydew melon, passion fruit, kiwi)',
      'Always an herbaceous quality (grass, mint, green pepper)',
    ],
    style: 'Light to Medium-Bodied White Wine',
    countryOfOrigin: 'France',
    description:
      'Sauvignon Blanc is a dry white grape first widely planted in France. Wines are tart, typically with herbal, “green” fruit flavors.',
    foodPairing: [
      'Fish',
      'Chicken',
      'Pork',
      'Veal',
      'Mexican, Vietnamese and French foods',
      'Herb-crusted goat cheese and nutty cheeses such as Gruyère',
    ],
    funFact:
      'More New Zealand Sauvignon Blanc, led by the wines from the Marlborough region, is imported into Australia than any other wine style. More than one third of all wines produced in New Zealand is Marlborough Sauvignon Blanc.',
    img: sbPhoto,
  },
  {
    name: 'Pinot Gris',
    color: 'White',
    pronunciation: '“Pee-no Gree” (aka Pinot Grigio)',
    taste: [
      'Delicate citrus (lime water, orange zest)',
      'Pomaceous fruits (apple skin, pear sauce)',
      'White floral notes',
      'Cheese rind',
    ],
    style: 'Light-Bodied White Wine',
    countryOfOrigin: 'France',
    description:
      'Pinot Gris is a dry light-bodied white grape that is planted heavily in Italy, but also in France and Germany. Wines are light to middle-weight and easy drinking, often with some bitter flavor on the palate (bitter almond, quinine).',
    foodPairing: ['Salad', 'Delicate poached fish', 'Light and mild cheeses'],
    funFact:
      "It's all about location. Pinot Gris is from France, while Pinot Grigio is from Italy. Same wine variety, different names based on where it is produced. In the U.S., you'll see both names used interchangeably.",
    img: pgPhoto,
  },
  {
    name: 'Riesling',
    color: 'White',
    pronunciation: '“Reese-ling”',
    taste: [
      'Citrus (kefir lime, lemon juice) and stone-fruit (white peach, nectarine) always feature prominently',
      'Floral and sweet herbal elements',
      'Rock candy',
      'Honeysuckle',
    ],
    style:
      'Floral and fruit-driven aromatic white that comes in variable sweetness. Some producers choose not to ferment all the grape sugar and therefore make the wine in an “off-dry” style.',
    countryOfOrigin: 'Germany',
    description:
      'Always very high in acid, when made as a table wine Rieslings can be harmoniously sweet (sweet and sour) or dry (very acidic). The wine is polarizing because some people find dry styles too acidic and sweet styles too cloying, but sweetness is always a wine making decision and not inherent to the grape.',
    foodPairing: [
      'Chicken',
      'Pork',
      'Duck',
      'Turkey (Thanksgiving Dinner)',
      'Cured meat',
      'Indian, Thai, Vietnamese, Moroccan and German foods',
      'Washed-rind cheeses and fondue',
    ],
    funFact:
      'Seldom oaked, Riesling grapes can be used to make dry, semi-sweet, sweet and sparkling white wines. Riesling makes excellent dessert wines and is typically thought of in the US as a sweeter white wine. But that there are many “dry Rieslings” that are in fact very crisp and food-friendly, similar in body and style to a light, aromatic Sauvignon Blanc.',
    img: riesPhoto,
  },
];

export default varietalData;
