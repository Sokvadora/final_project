import React from 'react';
import ListItem from './ListItem';

class Header extends React.Component {
  render() {
    return (
      <div className="header col s12">
        <ListItem />
      </div>
    )
  }
}

export default Header;