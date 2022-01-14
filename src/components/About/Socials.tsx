import styled from '@emotion/styled';
import React from 'react';
import { Email, GitHub, Velog } from '../SocialIcons';

function Socials() {
  return (
    <SocialsWrapper>
      {/* <Twitter /> */}
      <GitHub />
      <Velog />
      <Email />
      {/* <Medium /> */}
      {/* <Patreon /> */}
    </SocialsWrapper>
  );
}

const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 10px;
  width: 120px;
`;

export default Socials;
