import React from 'react';

import {
  Onboarding,
  OnboardingTitle,
  OnboardingButton,
  OnboardingText,
} from '../../../components/onboarding';
import { Collapse, onboardingFaq } from '../../../components/secret-key-faq';

export const SaveKey = () => {
  return (
    <Onboarding>
      <OnboardingTitle>Save your Secret Key</OnboardingTitle>
      <OnboardingText>
        Paste your Secret Key wherever you keep critical, private, information such as passwords.
        Once lost, it’s lost forever. So save it somewhere you won’t forget.
      </OnboardingText>
      <OnboardingButton mt="extra-loose">I've saved it</OnboardingButton>
      <Collapse content={onboardingFaq('Stacks Wallet')} mt="extra-loose" />
    </Onboarding>
  );
};
