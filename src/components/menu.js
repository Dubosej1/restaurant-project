import React from 'react';
import PropTypes from 'prop-types';

const divider = `----------`;

export const menu = [
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

function getCategory(name) {
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

// export function getHighlightItems() {
//   const highlightItems = [`curly fries`, `kids`];

//   let returnArr = [];

//   highlightItems.forEach(function (item) {
//     // if (arr.includes(menuItem.name)) returnArr.push(menuItem);
//     returnArr.push(menu.filter((obj) => obj.name === item));
//   });

//   return returnArr;
// }
