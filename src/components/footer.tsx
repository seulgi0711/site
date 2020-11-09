import React from 'react';

type Props = {
  copyrights: string,
};

const Footer = ({ copyrights }: Props) => (
  <footer>
    {copyrights ? (
      <div dangerouslySetInnerHTML={{ __html: copyrights }} />
    ) : (
      <>
        <span className="footerCopyrights">
          © 2019 Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </span>
        <span className="footerCopyrights">
          Starter created by <a href="https://radoslawkoziel.pl">panr</a>
        </span>
      </>
    )}
  </footer>
);

export default Footer;
