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
