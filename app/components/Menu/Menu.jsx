import styles from './_Menu.scss';
import React from 'react';
import MenuItem from './MenuItem';

let { Component, PropTypes } = React;

export default class Menu extends Component {

  static defaultProps = {
    items: [],
    activeItem: null
  };

  static propTypes = {
    items: PropTypes.array.isRequired,
    activeItem: PropTypes.number
  };

  render() {
    return (
      <ul className={styles.menu}>
        {this.props.items.map((item, index) => {
          return (
            <MenuItem
              key={index}
              item={item}
              className={(this.props.activeItem === item.id)
                ? styles.activeMenuItem 
                : styles.menuItem} />);
        }, this)}
      </ul>
    );
  }
}
