import styled from '@emotion/styled';
import React from 'react';
import { GitHub, Velog } from '../SocialIcons';

function Socials() {
  return (
    <SocialsWrapper>
      {/* <Twitter /> */}
      <GitHub />
      <Velog />
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
  width: 90px;
`;

export default Socials;
