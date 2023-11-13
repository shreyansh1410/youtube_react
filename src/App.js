import { Provider } from 'react-redux';
import './App.css';
import Header from './components/header';
import store from './utils/store';
import Body from './components/Body';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchPage />
    }]
}])

function App() {
  return (
    <Provider store={store}>
      <div className='max-h-5xl'>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
