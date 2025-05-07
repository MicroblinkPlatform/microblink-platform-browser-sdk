/**
 * Copyright (c) Microblink. All rights reserved. This code is provided for
 * use as-is and may not be copied, modified, or redistributed.
 */
import { useEffect, useState } from 'react';

import Form from './Form';
import { Gate } from './Gate';

function App() {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!import.meta.env.VITE_PASSWORD_HASH) {
      setInitialized(true);
    }
  }, []);

  if (!initialized) {
    return <Gate onLogin={() => setInitialized(true)} />;
  }

  return <Form />;
}

export default App;
