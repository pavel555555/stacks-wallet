import React from 'react';
import { Input } from '@blockstack/ui';

import {
  Onboarding,
  OnboardingTitle,
  OnboardingText,
  OnboardingButton,
  OnboardingFooter,
  OnboardingFooterLink,
} from '../../../components/onboarding';

export const VerifyKey = () => {
  return (
    <Onboarding>
      <OnboardingTitle>Verify Secret Key</OnboardingTitle>
      <OnboardingText>Enter your Secret Key to confirm you’ve saved it</OnboardingText>
      <Input
        as="textarea"
        mt="extra-loose"
        height="88px"
        placeholder="24-word Secret Key"
        style={{ resize: 'none' }}
      />
      <OnboardingButton mt="loose">Continue</OnboardingButton>
      <OnboardingFooter>
        <OnboardingFooterLink>View Secret Key again</OnboardingFooterLink>
      </OnboardingFooter>
    </Onboarding>
  );
};
