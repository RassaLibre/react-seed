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

  /**
  * because I am sick and tired of not seing what exactly is in my state
  * when I use ImmutableJS
  */
  logStateToConsole(){
    let toBeLogged = {
      items: this.state.items.toJS(),
      activeItem: this.state.activeItem
    };
    console.log(toBeLogged, 'current state');
  }

  render() {
    this.logStateToConsole();
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
