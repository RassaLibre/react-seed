import React from 'react';
import PureComponent from 'react-pure-render/component';

let { PropTypes } = React;

export default class MenuItem extends PureComponent {

  /**
  *
  */
  static propTypes = {
    item: PropTypes.object.isRequired,
    className: PropTypes.string,
    onItemClick: PropTypes.func
  };

  /**
  *
  */
  static defaultProps = {
    className: undefined,
    onItemClick: null
  }

  /**
  *
  */
  onItemClick = (e) => {
    e.preventDefault();
    this.props.onItemClick(this.props.item.get("id"));
  }

  /**
  *
  */
  render() {
    return (
      <li className={this.props.className}>
        <span onClick={this.onItemClick}>{this.props.item.get("label")}</span>
      </li>
    );
  }
}
