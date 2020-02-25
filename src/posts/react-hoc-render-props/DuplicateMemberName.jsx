import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import membersStore from './membersStore';

class MemberName extends PureComponent {
  static propTypes = {
    memberId: PropTypes.string.isRequired,
  };

  getMember = () => {
    return membersStore.getById(this.props.memberId);
  };

  render() {
    return <span>{this.getMember().name}</span>;
  }
}

export default MemberName;
