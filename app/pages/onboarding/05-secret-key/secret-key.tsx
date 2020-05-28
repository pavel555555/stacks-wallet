import React from 'react';

import { Card } from '../../../components/card';
import { SeedTextarea } from '../../../components/seed-textarea';
import {
  Onboarding,
  OnboardingTitle,
  OnboardingButton,
  OnboardingText,
} from '../../../components/onboarding';

export const SecretKey = () => {
  return (
    <Onboarding>
      <OnboardingTitle>Your Secret Key</OnboardingTitle>
      <OnboardingText>
        Here’s your Secret Key: 24 words that prove it’s you when you want to access your wallet.
        Once lost, it’s lost forever, so save it somewhere you won’t forget.
      </OnboardingText>
      <Card title="Your Secret Key" mt="extra-loose">
        <SeedTextarea
          readOnly
          spellCheck="false"
          autoCapitalize="false"
          value="future act silly correct hold endorse essay save prefer filter donate clap future act silly correct hold endorse essay save prefer filter donate clap"
          className="hidden-secret-key"
          data-test="textarea-seed-phrase"
        />
      </Card>
      <OnboardingButton mt="loose">Copy Secret Key</OnboardingButton>
    </Onboarding>
  );
};
