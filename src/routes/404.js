import React from 'react';
import { Button, Title } from '@patternfly/react-core';
import Icon404 from '../components/icon-404';

import './404.scss';

// Chrome is not on this page, so do the isBeta here
const isBeta = () => {
  return window.location.pathname.split('/')[1] === 'beta' ? '/beta' : '';
};

const NotFound = () => (
  <section className="pf-l-page__main-section pf-c-page__main-section ins-c-page__404">
    <Title headingLevel="h1" size="3xl">
      404: It&apos;s true. We&apos;ve lost it.
    </Title>
    <Icon404 />
    <Title headingLevel="h2" className="ins-c-text__sorry">
      Sorry, we couldn&apos;t find what you were looking for. The page you
      requested may have been changed or moved.
    </Title>
    <Button
      variant="link"
      component="a"
      href={`${window.location.origin}${isBeta()}`}
    >
      Return to homepage
    </Button>
  </section>
);

export default NotFound;
