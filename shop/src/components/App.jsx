import React, { PureComponent } from 'react';

import style from './App.module.css';

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      first: 1
    }
  }
  render() {
    return (
      <div className={style.App}>
        {/* <Routes>

        </Routes> */}

      </div>
    )
  }
}
