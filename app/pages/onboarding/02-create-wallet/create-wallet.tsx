import React from 'react';

import {
  Onboarding,
  OnboardingTitle,
  OnboardingButton,
  OnboardingText,
  OnboardingFooter,
  OnboardingFooterLink,
} from '../../../components/onboarding';

export const CreateWallet = () => {
  return (
    <Onboarding>
      <OnboardingTitle>Create a new wallet</OnboardingTitle>
      <OnboardingText>
        Please choose whether you’d like to connect a Ledger hardware wallet or to create a software
        wallet
      </OnboardingText>
      <OnboardingButton mt="extra-loose">Use a Ledger wallet</OnboardingButton>
      <OnboardingButton>Create a software wallet</OnboardingButton>
      <OnboardingFooter>
        <OnboardingFooterLink>I have a Trezor wallet</OnboardingFooterLink>
      </OnboardingFooter>
    </Onboarding>
  );
};
