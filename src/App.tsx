import Providers from './app/component/providers';
import PageForm from './app/page/form/page';

const App: React.FC = () => {
  return (
    <Providers>
      <PageForm />
    </Providers>
  );
};

export default App;
