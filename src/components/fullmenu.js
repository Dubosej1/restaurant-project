import React from 'react';
import PropTypes from 'prop-types';
import Footer from './footer.js';
import {
  SectionHeading,
  SectionSubheading,
  MenuItemDivider,
} from './headings.js';
import { getCategory, getMenuItemsByRange } from './menu.js';

export default function FullMenu() {
  const subheading = `We have the option of executive combos during the week`;
  return (
    <div className="full-menu">
      <SectionHeading comp="full-menu" text="Menu" />
      <SectionSubheading comp="full-menu" text={subheading} />
      <div className="full-menu__menu">
        <FullMenuColumn1 />
        <FullMenuColumn2 />
      </div>

      <Footer />
    </div>
  );
}

function FullMenuColumn1() {
  return (
    <div className="full-menu__subsection">
      <SaladSection />
      <MenuSection category="burgers" range={[1, 12]} addDivider={true} />
      <MenuSection category="dogs" range={[13, 14]} addDivider={true} />
      <MenuSection category="kids" range={[17, 18]} addDivider={true} />
      <MenuSection category="drinks" range={[51, 56]} addDivider={false} />
    </div>
  );
}

function FullMenuColumn2() {
  return (
    <div className="full-menu__subsection">
      <MenuSection category="fries" range={[28, 31]} addDivider={true} />
      <MenuSection category="extras" range={[37, 40]} addDivider={true} />
      <MenuSection category="shakes" range={[41, 43]} addDivider={true} />
      <MenuSection category="sweets" range={[44, 50]} addDivider={true} />
      <MenuSection category="beer" range={[70, 71]} addDivider={false} />
    </div>
  );
}

function MenuSection(props) {
  const category = getCategory(props.category);
  const menuItems = getMenuItemsByRange(props.range);
  const menuElems = menuItems.map((item, index) => (
    <MenuItem key={index} item={item} />
  ));

  const divider = props.addDivider ? <MenuItemDivider /> : null;
  return (
    <div className="full-menu__menu-section-spacing">
      <MenuCategory item={category} />
      {menuElems}
      {divider}
    </div>
  );
}

MenuSection.propTypes = {
  category: PropTypes.string,
  range: PropTypes.array,
  addDivider: PropTypes.bool,
};

function MenuCategory(props) {
  return (
    <div className="full-menu__category">
      <div className="category__icon-heading-box">
        <div className="category__icon-container">
          <img
            src="https://via.placeholder.com/40"
            className="category__icon"
            alt={`${props.item.name} Icon`}
          />
        </div>
        <div className="category__heading-container">
          <h2 className="category__heading--full-menu">{props.item.name}</h2>
        </div>
      </div>
      <div className="category__sub-head-container">
        <h3 className="category__sub-head--full-menu">{props.item.subHead}</h3>
      </div>
      <div className="category__sizes-container">
        <h4 className="category__sizes--full-menu">{props.item.sizes}</h4>
      </div>
    </div>
  );
}

MenuCategory.propTypes = {
  item: PropTypes.object,
};

function MenuItem(props) {
  const price =
    props.item.price.length === 1
      ? props.item.price[0]
      : `${props.item.price[0]} / ${props.item.price[1]}`;

  return (
    <div className="menu-item--full-menu">
      <div className="menu-item__num-container">
        <span className="menu-item__num--full-menu">{props.item.num}</span>
      </div>
      <div className="menu-item__info-container">
        <span className="menu-item__name--full-menu">{props.item.name}</span>
        <span className="menu-item__price--full-menu">{price}</span>
      </div>
      <div className="menu-item__text--full-menu">{props.item.desc}</div>
    </div>
  );
}

MenuItem.propTypes = {
  item: PropTypes.object,
};

function SaladSection() {
  return (
    <div className="salad-section">
      <MenuSection category="salad" range={[15, 15]} addDivider={false} />
      <div className="salad-section__optional">
        <span>Choice Optional</span>
        <br />
        <span>Veggie $6.70 / Salmon $6.99</span>
      </div>
    </div>
  );
}
