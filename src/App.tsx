import GlobalStyle from './GlobalStyle';
import { PageLayout } from './pages/PageLayout';
import { Routes } from './Routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <PageLayout>
        <Routes />
      </PageLayout>
    </>
  );
}

export default App;
