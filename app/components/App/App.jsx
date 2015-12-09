import styles from './_App.scss';

import React from 'react';
import AppActions from '../../actions/AppActions';
import ItemsReducer from '../../reducers/ItemsReducer';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import PureComponent from 'react-pure-render/component';

function getAppState() {
  let state = ItemsReducer.getState();
  console.log(ItemsReducer);
  return {
    items: state.get('items'),
    activeItem: state.get('activeItem')
  };
}

export default class App extends PureComponent {

  state = getAppState()

  componentDidMount() {
    ItemsReducer.subscribe(this.onChange);
    AppActions.getItems();
  }

  componentWillUnmount() {
    ItemsReducer.unsubscribe(this.onChange);
  }

  onChange = () => {
    this.setState(getAppState());
  }

  render() {
    console.log(this.state, "current state");
    console.log('App is being rendered');
    return (
      <div className={styles.app}>
        <Body
          items={this.state.items}
          activeItem={this.state.activeItem} />
        <Footer />
      </div>
    );
  }
}
