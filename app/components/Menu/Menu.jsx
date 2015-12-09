import styles from './_Menu.scss';
import React from 'react';
import MenuItem from './MenuItem';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PureComponent from 'react-pure-render/component';

let { PropTypes } = React;

export default class Menu extends PureComponent {

  static defaultProps = {
    items: [],
    activeItem: null
  };

  static propTypes = {
    items: ImmutablePropTypes.list,
    activeItem: PropTypes.number
  };

  render() {
    console.log('Menu is being rendered');
    return (
      <ul className={styles.menu}>
        {this.props.items.map((item, index) => {
          return (
            <MenuItem
              key={index}
              item={item}
              className={(this.props.activeItem === item.get("id"))
                ? styles.activeMenuItem 
                : styles.menuItem} />);
        }, this)}
      </ul>
    );
  }
}
