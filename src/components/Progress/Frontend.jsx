import React from 'react';
import ProgressContainer from '.';
import { frontend } from '../../constants';

export default function Frontend() {
  return (
    <ProgressContainer title="Frontend">
      {frontend}
    </ProgressContainer>
  );
}
