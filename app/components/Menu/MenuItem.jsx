import React from 'react';
import AppActions from '../../actions/AppActions';
import PureComponent from 'react-pure-render/component';

let { PropTypes } = React;

export default class MenuItem extends PureComponent {

  static propTypes = {
    item: PropTypes.object.isRequired,
    className: PropTypes.string
  };

  static defaultProps = {
    className: undefined
  }

  onItemClick = (e) => {
    e.preventDefault();
    AppActions.makeActive(this.props.item.get("id"));
  }

  render() {
    return (
      <li className={this.props.className}>
        <span onClick={this.onItemClick}>{this.props.item.get("label")}</span>
      </li>
    );
  }
}
