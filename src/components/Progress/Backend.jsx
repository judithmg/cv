import React from 'react';
import ProgressContainer from '.';
import { backend } from '../../constants';

export default function Backend() {
  return (
    <ProgressContainer title="Backend">
      {backend}
    </ProgressContainer>
  );
}
