import React, { useState } from 'react';
import { Loading } from '../UI/Basic/basicStyle';

export default function LoadingIndicator({ loading, children }) {
  return <div>{loading ? <Loading /> : children}</div>;
}
