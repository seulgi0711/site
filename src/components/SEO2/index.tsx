import { useSiteMetadata } from '@/hooks/useSiteMetadata';
import { join, merge, pipe } from 'ramda';
import Helmet from 'react-helmet';
import { rejectEmpty } from '../../utils/fnUtil';

type Meta = {
  name: string;
  content: string;
};

type Props = {
  description?: string;
  lang?: string;
  meta?: Meta[];
  keywords?: string[];
  postTitle?: string;
};

const SEO = ({
  lang = 'en',
  meta = [],
  keywords = [
    "Nakta's Dev",
    'Frontend Dev Blog',
    'Web development Blog',
    'personal site',
  ],
  ...metaProps
}: Props) => {
  const siteMetadata = useSiteMetadata();
  const { author, description, postTitle } = merge(siteMetadata, metaProps);
  const title = pipe(
    rejectEmpty,
    join(' :: '),
  )([siteMetadata.title, postTitle]);

  const helmetMeta = [
    { name: `description`, content: description },
    { property: `og:title`, content: title },
    { property: `og:description`, content: description },
    { property: `og:type`, content: `website` },
    { name: `twitter:card`, content: `summary` },
    { name: `twitter:title`, content: title },
    { name: `twitter:description`, content: description },
    { name: `twitter:creator`, content: author },
    {
      name: 'google-site-verification',
      content: 'K_BYOYvY2tzuhMUM6cayEXMu5HC2uIAquLnbZW2bfdM',
    },
    { name: `keywords`, content: keywords.join(`, `) },
  ].concat(meta);

  return <Helmet htmlAttributes={{ lang }} title={title} meta={helmetMeta} />;
};

export default SEO;
