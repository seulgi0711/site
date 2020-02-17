import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import membersStore from './membersStore';

class MemberNickname extends PureComponent {
  static propTypes = {
    memberId: PropTypes.string.isRequired,
  };

  getMember = () => membersStore.getById(this.props.memberId);

  render() {
    return <span>{this.getMember().nickname}</span>;
  }
}

export default MemberNickname;
