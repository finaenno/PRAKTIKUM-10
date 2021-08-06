### Module system

Buat module baru copy dari `src/modules/examples`
struktur folder dalam `src/modules/nama-module`
```
.
├── components              # local components yang hanya digunakan di module
├── context                 # local context yang hanya digunakan di module
├── hooks                   # local hooks yang hanya digunakan di module
├── pages                   # pages yang ada dalam module
└── ModuleContainer.jsx     # bentuk container dari module, berisi config sub routes
```

Di contoh sudah ada fetch list, table, filter, pagination, navigate ke detail page.

Untuk list page `src/modules/examples/pages/ExampleList.jsx`

hooks `useQueryParams` berguna untuk menyimpan state filter/query dan mengupdate url sesuai dengan state filter/query nya, `query` adalah object statenya, dan `push` adalah fungsi mutate state query nya, hooks `useAsync` untuk call api list dan simpan di `data`

untuk detail page `src/modules/examples/pages/ExampleDetail.jsx` gunakan hooks `useParams` untuk ambil param `:id` sesuai config container, dan `useAsync` untuk ambil data by id.

Di dalam container `src/modules/examples/ExampleContainer.jsx` terdapat routing childs yang akan meload module pages nya

```jsx
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ExampleDetailPage from './pages/ExampleDetail';
import ExampleListPage from './pages/ExampleList';

export const ExampleContainer = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.url}/:id`}>
        <ExampleDetailPage />
      </Route>
      <Route path={`${match.url}`}>
        <ExampleListPage />
      </Route>
    </Switch>
  );
};

export default ExampleContainer;
```

### Routing parrent dan sidebar

Buat routing / modif sesuaikan di `src/routes.js`

```jsx
{
    name: 'Example', // nama module
    icon: FiStar, // icon
    path: '/example', //path parrent
    component: lazy(() => import('./modules/examples/ExampleContainer')),
    isShowNav: true,
    exact: false,
  },
```

### Mocking http request menggunakan msw

[https://mswjs.io/docs/getting-started/mocks/rest-api](https://mswjs.io/docs/getting-started/mocks/rest-api)

Buat mocking handlers file contoh `src/mocks/handlers/examples.js`

jangan lupa masukan di `src/mocks/handlers/index.js`

Jika ingin menggunakan api non mock, sialkan comment di `src/index.js`

```jsx
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}
```

### Unit testing

`src/modules/examples/pages/ExampleList.test.jsx`

Contoh unit testing hanya melakukan pengecekan get list, muncul loader, lalu muncul data nya benar

```jsx
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ExampleList from './ExampleList';

describe('ExampleList', () => {
  test('renders loading', async () => {
    render(
      <MemoryRouter initialEntries={['/example']}>
        <ExampleList />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.queryAllByTestId(/loader/)).toHaveLength(5); // cek ada loader
    });
    await waitFor(() => {
      expect(screen.queryAllByTestId(/loader/)).toHaveLength(0); // cek loader hilang
    });
    await waitFor(() => {
      expect(screen.queryAllByTestId(/list-item/)).toHaveLength(5); // cek sudah ada datanya
    });
  });
});
```
