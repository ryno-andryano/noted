import React from 'react';
import Header from './Header';

class NotedApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nav: false,
    };

    this.onOpenNavHandler = this.onOpenNavHandler.bind(this);
    this.onCloseNavHandler = this.onCloseNavHandler.bind(this);
  }

  onOpenNavHandler() {
    this.setState({nav: true});
  }

  onCloseNavHandler() {
    this.setState({nav: false});
  }

  render() {
    return (
      <>
        <Header
          nav={this.state.nav}
          onOpenNav={this.onOpenNavHandler}
          onCloseNav={this.onCloseNavHandler}
        />
      </>
    );
  }
}

export default NotedApp;

