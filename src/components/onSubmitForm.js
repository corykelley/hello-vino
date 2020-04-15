/* eslint-disable default-case */
export const onSubmitForm = (food, occasion, season) => {
  switch (food) {
    case 'nothing':
      switch (occasion) {
        case 'yes':
          switch (season) {
            case 'spring':
              return 'Cabernet Sauvignon';
            case 'summer':
              return 'Chardonnay';
            case 'fall':
              return 'Zinfandel';
            case 'winter':
              return 'Cabernet Sauvignon';
          }
          break;
        case 'no':
          switch (season) {
            case 'spring':
              return 'Syrah';
            case 'summer':
              return 'Pinot Gris';
            case 'fall':
              return 'Riesling';
            case 'winter':
              return 'Cabernet Sauvignon';
          }
      }
      break;
    case 'fowl':
      switch (occasion) {
        case 'yes':
          switch (season) {
            case 'spring':
              return 'Chardonnay';
            case 'summer':
              return 'Pinot Gris';
            case 'fall':
              return 'Riesling';
            case 'winter':
              return 'Chardonnay';
          }
          break;
        case 'no':
          switch (season) {
            case 'spring':
              return 'Chardonnay';
            case 'summer':
              return 'Sauvignon Blanc';
            case 'fall':
              return 'Riesling';
            case 'winter':
              return 'Chardonnay';
          }
      }
      break;
    case 'red meat':
      switch (occasion) {
        case 'yes':
          switch (season) {
            case 'spring':
              return 'Cabernet Sauvignon';
            case 'summer':
              return 'Pinot Noir';
            case 'fall':
              return 'Zinfandel';
            case 'winter':
              return 'Cabernet Sauvignon';
          }
          break;
        case 'no':
          switch (season) {
            case 'spring':
              return 'Cabernet Sauvignon';
            case 'summer':
              return 'Pinot Noir';
            case 'fall':
              return 'Pinot Noir';
            case 'winter':
              return 'Syrah';
          }
      }
      break;
    case 'fish':
      switch (occasion) {
        case 'yes':
          switch (season) {
            case 'spring':
              return 'Sauvignon Blanc';
            case 'summer':
              return 'Pinot Gris';
            case 'fall':
              return 'Pinot Gris';
            case 'winter':
              return 'Chardonnay';
          }
          break;
        case 'no':
          switch (season) {
            case 'spring':
              return 'Pinot Gris';
            case 'summer':
              return 'Pinot Gris';
            case 'fall':
              return 'Pinot Gris';
            case 'winter':
              return 'Chardonnay';
          }
      }
      break;
    case 'cheese':
      switch (occasion) {
        case 'yes':
          switch (season) {
            case 'spring':
              return 'Chardonnay';
            case 'summer':
              return 'Sauvignon Blanc';
            case 'fall':
              return 'Pinot Noir';
            case 'winter':
              return 'Cabernet Sauvignon';
          }
          break;
        case 'no':
          switch (season) {
            case 'spring':
              return 'Chardonnay';
            case 'summer':
              return 'Pinot Gris';
            case 'fall':
              return 'Riesling';
            case 'winter':
              return 'Chardonnay';
          }
      }
      break;
    case 'something spicy':
      switch (occasion) {
        case 'yes':
          switch (season) {
            case 'spring':
              return 'Riesling';
            case 'summer':
              return 'Riesling';
            case 'fall':
              return 'Riesling';
            case 'winter':
              return 'Chardonnay';
          }
          break;
        case 'no':
          switch (season) {
            case 'spring':
              return 'Riesling';
            case 'summer':
              return 'Pinot Gris';
            case 'fall':
              return 'Riesling';
            case 'winter':
              return 'Chardonnay';
          }
      }
      break;
    case 'pasta':
      switch (occasion) {
        case 'yes':
          switch (season) {
            case 'spring':
              return 'Cabernet Sauvignon';
            case 'summer':
              return 'Pinot Noir';
            case 'fall':
              return 'Pinot Noir';
            case 'winter':
              return 'Zinfandel';
          }
          break;
        case 'no':
          switch (season) {
            case 'spring':
              return 'Cabernet Sauvignon';
            case 'summer':
              return 'Pinot Noir';
            case 'fall':
              return 'Pinot Noir';
            case 'winter':
              return 'Zinfandel';
          }
      }
  }
};
