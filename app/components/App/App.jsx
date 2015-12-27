import styles from './_App.scss';

import React from 'react';
import AppActions from '../../actions/AppActions';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import PureComponent from 'react-pure-render/component';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';


class App extends PureComponent {

  /**
  *
  */
  componentDidMount() {
    if(this.props.getItems) this.props.getItems();
  }

  /**
  *
  */
  render() {
    return (
      <div className={styles.app}>
        <Body
          onItemClick={this.props.onItemClick}
          items={this.props.items}
          activeItem={this.props.activeItem} />
        <Footer />
      </div>
    );
  }
}

/**
*
*/
App.propTypes = {
  items: ImmutablePropTypes.list,
  activeItem: React.PropTypes.number,
  getItems: React.PropTypes.func,
  onItemClick: React.PropTypes.func
};

/**
*
*/
function select(state){
  return {
    onItemClick: AppActions.makeActive,
    getItems: AppActions.getItems,
    items: state.get('items'),
    activeItem: state.get('activeItem')
  };
}

export default connect(select)(App)
