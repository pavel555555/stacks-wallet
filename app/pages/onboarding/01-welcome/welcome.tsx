import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import routes from '../../../constants/routes.json';
import {
  Onboarding,
  OnboardingTitle,
  OnboardingButton,
  OnboardingText,
} from '../../../components/onboarding';

export const Welcome = () => {
  const history = useHistory();
  return (
    <Onboarding>
      <OnboardingTitle>Stacks Wallet</OnboardingTitle>
      <OnboardingText>Send, receive, and and earn Bitcoin rewards</OnboardingText>
      <Link to={routes.CREATE}>
        <OnboardingButton mt="extra-loose">Create a new wallet</OnboardingButton>
      </Link>
      <OnboardingButton mt="base" variant="outline" onClick={() => history.push(routes.CREATE)}>
        I already have a wallet
      </OnboardingButton>
    </Onboarding>
  );
};
