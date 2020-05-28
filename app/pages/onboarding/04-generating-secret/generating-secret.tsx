import React from 'react';
import { Onboarding } from '../../../components/onboarding/onboarding';
import { OnboardingTitle } from '../../../components/onboarding';
import { Spinner } from '@blockstack/ui';

export const GeneratingSecret = () => {
  return (
    <Onboarding pt="152px">
      <Spinner size="lg" color="blue" alignSelf="center" />
      <OnboardingTitle textStyle="header.small" fontWeight={500} fontSize="20px" mt="loose">
        Generating your Secret Key
      </OnboardingTitle>
    </Onboarding>
  );
};
