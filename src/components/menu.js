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
    name: `traditional dog`,
    num: 13,
    price: [`$4.20`],
    desc: `sausage, mayonaise, ketchup, mustard, potato sticks`,
    category: `dogs`,
  },
  {
    name: `Bacon Dog`,
    num: 14,
    price: [`$4.40`],
    desc: `sausage, bacon, melted cheddar`,
    category: `dogs`,
  },
  {
    name: `burger w/ Salad`,
    num: 15,
    price: [`$6.30`],
    desc: `Without bread, lettuce, tomato, carrot, red onion, parmesean, potato sticks and homemade sauce`,
    category: `salad`,
  },
  {
    name: `kids`,
    num: 17,
    price: [`$6.50`],
    desc: `meat, cheese, 1/2 size wavy fries and small soda`,
    category: `kids`,
  },
  {
    name: `3 chickens`,
    num: 18,
    price: [`$6.50`],
    desc: `white rice and wavy fries`,
    category: `kids`,
  },
  {
    name: `curly fries`,
    num: 28,
    price: [`$3.10`, `$4.60`],
    desc: `homemade with paprika`,
    category: `fries`,
  },
  {
    name: `parmesean truffle fries`,
    num: 29,
    price: [`$4.40`, `$5.70`],
    desc: `truffle with parmesean`,
    category: `fries`,
  },
  {
    name: `wavy fries`,
    num: 30,
    price: [`$2.70`, `$3.60`],
    desc: `with paprika seasoning and spices`,
    category: `fries`,
  },
  {
    name: `rustic fries`,
    num: 31,
    price: [`$3.10`, `$4.10`],
    desc: `rosemary and garlic or with cheddar`,
    category: `fries`,
  },
  {
    name: `onion rings`,
    num: 32,
    price: [`$4.20`],
    desc: ``,
    category: `fries`,
  },
  {
    name: `breaded chicken`,
    num: 28,
    price: [`$5.10`],
    desc: `with barbejack sauce`,
    category: `fries`,
  },
  {
    name: `extra cheese, bacon jelly or house mayo`,
    num: 37,
    price: [`$0.99`],
    desc: ``,
    category: `extras`,
  },
  {
    name: `extra burger`,
    num: 38,
    price: [`$2.40`, `$2.75`],
    desc: `1 Extra Burger: (1/4 lb) / (1/3 lb)`,
    category: `extras`,
  },
  {
    name: `extra house mayo or wasabi`,
    num: 39,
    price: [`$3.60`],
    desc: `8 oz jar`,
    category: `extras`,
  },
  {
    name: `extra barbejack sauce`,
    num: 40,
    price: [`$5.40`],
    desc: `8 oz jar`,
    category: `extras`,
  },
  {
    name: `nutella`,
    num: 41,
    price: [`$3.70`, `$5.30`],
    desc: ``,
    category: `shakes`,
  },
  {
    name: `chocolate and caramel`,
    num: 42,
    price: [`$3.50`, `$4.50`],
    desc: ``,
    category: `shakes`,
  },
  {
    name: `hazelnut cream with kinder bueno`,
    num: 43,
    price: [`$4.10`, `$5.50`],
    desc: ``,
    category: `shakes`,
  },
  {
    name: `petti gateau`,
    num: 44,
    price: [`$4.10`],
    desc: `comes with 1 scoop of ice cream`,
    category: `sweets`,
  },
  {
    name: `churritos`,
    num: 45,
    price: [`$3.50`],
    desc: `with caramel`,
    category: `sweets`,
  },
  {
    name: `small brownie`,
    num: 46,
    price: [`$2.10`],
    desc: `cream flavored ice cream and topping`,
    category: `sweets`,
  },
  {
    name: `brownie with ice cream`,
    num: 47,
    price: [`$4.99`],
    desc: `cream flavored ice cream and topping`,
    category: `sweets`,
  },
  {
    name: `belgian brigadier`,
    num: 48,
    price: [`$2.90`],
    desc: `in the 2 oz pan`,
    category: `sweets`,
  },
  {
    name: `carrot cake`,
    num: 49,
    price: [`$4.70`],
    desc: `homemade, belgian brigadeiro syrup and cream flavored ice cream`,
    category: `sweets`,
  },
  {
    name: `small or large cookie`,
    num: 50,
    price: [`$2.30`, `$3.30`],
    desc: ``,
    category: `sweets`,
  },
  {
    name: `water`,
    num: 51,
    price: [`$1`],
    desc: ``,
    category: `drinks`,
  },
  {
    name: `soda`,
    num: 52,
    price: [`$1.40`],
    desc: ``,
    category: `drinks`,
  },
  {
    name: `natural orange juice`,
    num: 53,
    price: [`$2.20`],
    desc: ``,
    category: `drinks`,
  },
  {
    name: `pink lemonade`,
    num: 54,
    price: [`$2.79`],
    desc: ``,
    category: `drinks`,
  },
  {
    name: `mint iced tea`,
    num: 55,
    price: [`$2.79`],
    desc: ``,
    category: `drinks`,
  },
  {
    name: `espresso coffee`,
    num: 56,
    price: [`$1.20`],
    desc: ``,
    category: `drinks`,
  },
  {
    name: `stella, heineken or original`,
    num: 70,
    price: [`$2.20`],
    desc: ``,
    category: `beer`,
  },
  {
    name: `appia colorado`,
    num: 71,
    price: [`$3.99`],
    desc: ``,
    category: `beer`,
  },
];

export const categories = [
  {
    name: `beer`,
    icon: null,
    subHead: null,
    sizes: null,
  },
  {
    name: `burgers`,
    icon: null,
    subHead: `Choose white or black brioche bread.  Burgers 100% natural, without preservatives, hormones or antibiotics.`,
    sizes: null,
  },
  {
    name: `drinks`,
    icon: null,
    subHead: null,
    sizes: null,
  },
  {
    name: `dogs`,
    icon: null,
    subHead: null,
    sizes: null,
  },
  {
    name: `extras`,
    icon: null,
    subHead: null,
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
  {
    name: `salad`,
    icon: null,
    subHead: `(1/3 lb burger)`,
    sizes: null,
  },
  {
    name: `shakes`,
    icon: null,
    subHead: null,
    sizes: null,
  },
  {
    name: `sweets`,
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
