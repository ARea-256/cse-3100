import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Export from './views/Export';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Routes>
        <Route
          element={
            <BaseLayout>
              <Outlet />
            </BaseLayout>
          }
        >
          <Route path={'/'} element={<Home />} />
          <Route path={'/export'} element={<Export />} />
        </Route>
      </Routes>
      <Toaster
        position="top-center"
        toastOptions={{
          error: {
            duration: 5000,
          },
        }}
      />
    </>
  );
}

export default App;
