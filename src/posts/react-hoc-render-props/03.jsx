import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import membersStore from './membersStore';

export default function memberLoader(WrappedComponent) {
  class MemberLoader extends PureComponent {
    static propTypes = {
      memberId: PropTypes.string.isRequired,
    };

    getMember = () => {
      return membersStore.getById(this.props.memberId);
    };

    render() {
      return <WrappedComponent {...this.props} member={this.getMember()} />;
    }
  }
  return MemberLoader;
}
