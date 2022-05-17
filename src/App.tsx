import { Toaster } from 'react-hot-toast';
import { RoutesApp } from './routes/RoutesApp';
import { GlobalStyles } from './styles/globals/GlobalStyles';

function App() {
  return (
    <>
      <RoutesApp />
      <GlobalStyles />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  );
}

export default App;
