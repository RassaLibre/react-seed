import styles from './_Footer.scss';
import React from 'react';
import PureComponent from 'react-pure-render/component';

export default class Footer extends PureComponent {
  render() {
    var year = (new Date()).getFullYear();
    return (
      <footer className={styles.footer}>
        &copy; Your Company&nbsp;{year}
      </footer>
    );
  }
}
