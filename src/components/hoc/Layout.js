import React from 'react';
import Header from '../Header';
import SmallNav from '../Navigation/smallNavivation';

const Layout = props => (
  <>
    <Header />
    <SmallNav />
    <main>
      {props.children}
    </main>
  </>
);

export default Layout;