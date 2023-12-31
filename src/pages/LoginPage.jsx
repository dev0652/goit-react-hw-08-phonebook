import { Helmet } from 'react-helmet-async';

import AuthDataForm from 'components/Forms/AuthDataForm';
import AuthBody from 'components/AuthBody';
import { FlexCentered } from 'styling/positioning';

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta
          name="description"
          content="Log in to view your personalized items"
        />
      </Helmet>

      <FlexCentered>
        <AuthBody>
          <AuthDataForm formType="login" />
        </AuthBody>
      </FlexCentered>
    </>
  );
}
