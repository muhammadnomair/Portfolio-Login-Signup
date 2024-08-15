import React from 'react';
import { CookiesProvider as NextCookiesProvider } from 'next-client-cookies/server';

const ClientCookiesProvider = function (props) {
  return <NextCookiesProvider {...props} />;
};

export default ClientCookiesProvider;