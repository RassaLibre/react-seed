import styles from './_App.scss';

import React from 'react';
import AppActions from '../../actions/AppActions';
import ItemsReducer from '../../reducers/ItemsReducer';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

function getAppState() {
  return ItemsReducer.getState();
}

export default class App extends React.Component {

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
    return (
      <div className={styles.app}>
        <Body items={this.state.items} activeItem={this.state.activeItem} />
        <Footer />
      </div>
    );
  }
}
