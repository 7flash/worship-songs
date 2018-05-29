import 'babel-polyfill';
import React from 'react';
import { Admin, Resource } from 'admin-on-rest';
import { authClient, restClient } from 'aor-feathers-client';
import feathersClient from './feathersClient';
import { UsersList } from './services/users';
import { Delete } from 'admin-on-rest/lib/mui';

import { SongsList, SongsEdit, SongsCreate } from './services/songs';

const authClientOptions = {
  storageKey: 'feathers-jwt',
  authenticate: { strategy: 'local' }
};

// to rename id field for *all* resources use this syntax:
const options = { id: '_id' };

const App = () => (
  <Admin title="Songs"
    authClient={authClient(feathersClient, authClientOptions)}
    restClient={restClient(feathersClient, options)}
  >
    {permissions => [
      permissions === 'admin' ? <Resource name="users" list={UsersList} /> : null,
        <Resource
          name="songs"
          list={SongsList}
          create={permissions === 'admin' ? SongsCreate : null}
          edit={permissions === 'admin' ? SongsEdit : null}
          remove={permissions === 'admin' ? Delete : null}
        />
    ]}
  </Admin>
);

export default App;
