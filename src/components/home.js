import React from 'react';
import {
  SectionHeading,
  SectionHeadingWithDeco,
  SectionSubheading,
} from './headings.js';
import { highlights, combos, WeightSpan, ComboExtraInfo } from './menu.js';
import Footer from './footer.js';
import PropTypes from 'prop-types';

export function Home() {
  return (
    <div>
      <HeaderImage />
      <MenuHighlightSection />
      <ComboOfDaySection />
      <Footer />
    </div>
  );
}

function HeaderImage() {
  return (
    <div className="home-header">
      <img
        src="https://via.placeholder.com/2800x1800"
        className="home-header__img"
        alt="Home Page Header Image"
      />
    </div>
  );
}

function MenuHighlightSection() {
  let highlightElems = highlights.map((item, index) => (
    <HighlightItem key={index} item={item} />
  ));

  return (
    <div className="home-menu-highlights">
      <SectionHeading comp="home-menu-highlights" text="Menu Highlights" />;
      <div className="home-menu-highlights__item-container">
        {highlightElems}
      </div>
    </div>
  );
}

function HighlightItem(props) {
  const menuElements = props.item.menuItems.map((item, index) => (
    <MenuItem key={index} item={item} />
  ));

  return (
    <div className="highlight-item">
      <div className="menu__icon-heading-box">
        <div className="menu__icon-container">
          <img
            src="https://via.placeholder.com/40"
            className="menu__icon"
            alt={`${props.item.category.name} Icon`}
          />
        </div>
        <div className="menu__heading-container">
          <h2 className="menu__heading--highlight">
            {props.item.category.name}
          </h2>
        </div>
      </div>
      <div className="menu__sub-head-container">
        <h3 className="menu__sub-head">{props.item.category.subHead}</h3>
      </div>
      {menuElements}
    </div>
  );
}

HighlightItem.propTypes = {
  item: PropTypes.object,
};

function MenuItem(props) {
  const price =
    props.item.price.length === 1
      ? props.item.price[0]
      : `${props.item.price[0]} / ${props.item.price[1]}`;

  return (
    <div className="menu-item">
      <div className="menu-item__num-container">
        <span className="menu-item__num">{props.item.num}</span>
      </div>
      <div className="menu-item__info-container">
        <span className="menu-item__name">{props.item.name}</span>
        <span className="menu-item__price">{price}</span>
      </div>
      <div className="menu-item__text">{props.item.desc}</div>
    </div>
  );
}

MenuItem.propTypes = {
  item: PropTypes.object,
};

function ComboOfDaySection() {
  const subtext = `* All burgers can be replaced with veggie at no additional cost`;
  const sectionHeadingElem = (
    <SectionHeading comp="home-combo-of-day" text="Combo of the Day" />
  );
  return (
    <div className="home-combo-of-day">
      <SectionHeadingWithDeco
        comp="home-combo-of-day"
        text={sectionHeadingElem}
      />
      <SectionSubheading comp="home-combo-of-day" text={subtext} />
      <div className="home-combo-of-day__combo-container">
        <ComboSection
          combos={combos}
          range={[1, 7]}
          addWeight={true}
          addExtraInfo={false}
        />
        <ComboSection
          combos={combos}
          range={[8, 12]}
          addWeight={false}
          addExtraInfo={true}
        />
      </div>
    </div>
  );
}

function ComboSection(props) {
  const comboElements = props.combos.map(function (item, index) {
    if (index + 1 >= props.range[0] && index + 1 <= props.range[1])
      return <ComboItem key={index} item={item} />;
  });

  const weightElem = props.addWeight ? <WeightSpan comp="combo-item" /> : null;

  const extraInfoElem = props.addExtraInfo ? <ComboExtraInfo /> : null;

  console.log(comboElements);

  return (
    <div className="home-combo-of-day__combo-section">
      {weightElem}
      {comboElements}
      {extraInfoElem}
    </div>
  );
}

ComboSection.propTypes = {
  combos: PropTypes.array,
  range: PropTypes.array,
  addWeight: PropTypes.bool,
  addExtraInfo: PropTypes.bool,
};

function ComboItem(props) {
  const price =
    props.item.price.length === 1
      ? props.item.price[0]
      : `${props.item.price[0]} / ${props.item.price[1]}`;

  const comboDescElems = props.item.desc.map((item, index) => (
    <ComboDescElem key={index} text={item} />
  ));

  return (
    <div className="combo-item">
      <div className="combo-item__info-container">
        <span className="combo-item__name">{props.item.name}</span>
        <span className="combo-item__price">{price}</span>
      </div>
      <div className="combo-item__desc-container">{comboDescElems}</div>
    </div>
  );
}

ComboItem.propTypes = {
  item: PropTypes.object,
};

function ComboDescElem(props) {
  return (
    <div>
      <span className="combo-item__desc">{props.text}</span>
      <br></br>
    </div>
  );
}

ComboDescElem.propTypes = {
  text: PropTypes.string,
};

export default Home;
