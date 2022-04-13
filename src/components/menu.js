import React from 'react';
import PropTypes from 'prop-types';

const divider = `----------`;

export const menu = [
  {
    name: `cheeseburger`,
    num: 1,
    price: [`$4.75`, `$5.55`],
    desc: `meat and cheese`,
    category: `burgers`,
  },
  {
    name: `classic`,
    num: 2,
    price: [`$5.20`, `$5.99`],
    desc: `meat, cheese, lettuce, tomato, red onion and house mayo`,
    category: `burgers`,
  },
  {
    name: `power`,
    num: 3,
    price: [`$6.30`, `$6.75`],
    desc: `meat, cheese, onion rings, fried bacon and wasabi moinese.`,
    category: `burgers`,
  },
  {
    name: `cheddar`,
    num: 4,
    price: [`$5.99`, `$6.77`],
    desc: `meat, cheddar, caramelized onion on black bread.`,
    category: `burgers`,
  },
  {
    name: `italian`,
    num: 5,
    price: [`$5.40`, `$5.60`],
    desc: `meat, cheese and homemade tomato sauce`,
    category: `burgers`,
  },
  {
    name: `veggie`,
    num: 6,
    price: [`$6.10`, `$6.50`],
    desc: `hamburger made with chickpeas and shitake, cheese, arugula and tomato`,
    category: `burgers`,
  },
  {
    name: `salmon`,
    num: 7,
    price: [`$6.80`, `$7.60`],
    desc: `homemade hamburger, mozzarella cheese, arugula, onion and wasabi moinese`,
    category: `burgers`,
  },
  {
    name: `bacon`,
    num: 8,
    price: [`$6.50`, `$7.00`],
    desc: `meat, house bacon jam with cheese`,
    category: `burgers`,
  },
  {
    name: `beard jack`,
    num: 9,
    price: [`$6.50`, `$7.10`],
    desc: `meat, cheese, barbecue sauce with Jack Daniel's Whiskey, Onion Crispy and Wasabi Mayo Accompaniment.`,
    category: `burgers`,
  },
  {
    name: `Crispy Chicken`,
    num: 10,
    price: [`$5.98`],
    desc: `breaded chicken fillet with coleslaw and wasabi mayo`,
    category: `burgers`,
  },
  {
    name: `cheese bacon`,
    num: 11,
    price: [`$6.30`, `$7.00`],
    desc: `beef, cheddar, mozzarella, bacon and house sauce`,
    category: `burgers`,
  },
  {
    name: `green burger`,
    num: 12,
    price: [`$6.40`],
    desc: `Veggie burger of Pea and Beetroot, Lettuce, Tomato and Onion`,
    category: `burgers`,
  },
  {
    name: `kids`,
    num: 17,
    price: [`$6.50`],
    desc: `meat, cheese, 1/2 size wavy fries and small soda`,
    category: `kids`,
  },
  {
    name: `curly fries`,
    num: 28,
    price: [`$3.10`, `$4.60`],
    desc: `homemade with paprika`,
    category: `fries`,
  },
];

export const categories = [
  {
    name: `burgers`,
    icon: null,
    subHead: `Choose white or black brioche bread.  Burgers 100% natural, without preservatives, hormones or antibiotics.`,
    sizes: null,
  },
  {
    name: `fries`,
    icon: null,
    subHead: `Made from 100% natural oil. No Trans or gluten.`,
    sizes: `Half / Full`,
  },
  {
    name: `kids`,
    icon: null,
    subHead: null,
    sizes: null,
  },
];

export const highlights = [
  {
    category: getCategory(`fries`),
    menuItems: getMenuItems([`curly fries`]),
  },
  {
    category: getCategory(`kids`),
    menuItems: getMenuItems([`kids`]),
  },
];

export const combos = [
  {
    name: `Monday`,
    desc: [`Crispy Chicken`],
    price: [`$5.99`],
  },
  {
    name: `Tuesday`,
    desc: [`Classic`],
    price: [`$6.35`, `$7.35`],
  },
  {
    name: `Wednesday`,
    desc: [`Cheeseburger`],
    price: [`$6.75`, `$7.15`],
  },
  {
    name: `Thursday`,
    desc: [`Bacon Jelly`],
    price: [`$6.75`, `$7.15`],
  },
  {
    name: `Friday`,
    desc: [`Cheddar`],
    price: [`$5.99`, `$7.15`],
  },
  {
    name: `Saturday`,
    desc: [`Barbejack`],
    price: [`$7.15`, `$7.50`],
  },
  {
    name: `Sunday`,
    desc: [`Italian`],
    price: [`$6.15`, `$7.15`],
  },
  {
    name: `Salmon Combo`,
    desc: [null],
    price: [`$6.95`, `$7.75`],
  },
  {
    name: `Veggie Combo`,
    desc: [null],
    price: [`$6.15`, `$6.70`],
  },
  {
    name: `Green Combo (vegetable)`,
    desc: [null],
    price: [`$6.15`, `$6.70`],
  },
  {
    name: `Traditional Dog Combo`,
    desc: [`Fries & Drink`],
    price: [`$4.77`],
  },
  {
    name: `Include In Your Combo`,
    desc: [
      `Chocolate Mini Shake ${divider} $2.90`,
      `3 Mini Churros or Ice Cream ${divider} $1.50`,
      `Combo Coffee ${divider} $1.19`,
      `Juice (instead of soda) ${divider} $2.17 `,
    ],
    price: [`$3.99`],
  },
];

export function WeightSpan(props) {
  return <span className={`${props.comp}__weight`}>(1/4 lb) / (1/3 lb)</span>;
}

WeightSpan.propTypes = {
  comp: PropTypes.string,
};

export function ComboExtraInfo() {
  const item1 = `* All combos can be replaced by burger veggie without additional cost`;
  const item2 = `* Promotion not cumulative with other promotions`;
  const item3 = `Hours From 11:30 am to 4pm`;

  return (
    <div className="combo-item__extra-info-container">
      <span>{item1}</span>
      <br></br>
      <span>{item2}</span>
      <br></br>
      <span>{item3}</span>
      <br></br>
    </div>
  );
}

export function getCategory(name) {
  let [category] = categories.filter((category) => category.name === name);

  return category;
}

function getMenuItems(arr) {
  let returnArr = [];

  arr.forEach(function (name) {
    let [menuItem] = menu.filter((item) => item.name === name);
    // returnArr.push(menu.filter((item) => item.name === name));
    returnArr.push(menuItem);
  });
  console.log(returnArr);

  return returnArr;
}

export function getMenuItemsByRange(arr) {
  let returnArr = [];
  let startingMenuIndex = arr[0];
  let endingMenuIndex = arr[1];

  for (let i = startingMenuIndex; i <= endingMenuIndex; i++) {
    let [menuItem] = menu.filter((item) => item.num === i);
    returnArr.push(menuItem);
  }

  return returnArr;
}

// export function getHighlightItems() {
//   const highlightItems = [`curly fries`, `kids`];

//   let returnArr = [];

//   highlightItems.forEach(function (item) {
//     // if (arr.includes(menuItem.name)) returnArr.push(menuItem);
//     returnArr.push(menu.filter((obj) => obj.name === item));
//   });

//   return returnArr;
// }
