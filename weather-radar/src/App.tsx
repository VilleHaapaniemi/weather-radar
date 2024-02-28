import './App.css';
import CitiesDropdown from './components/CitiesDropdown';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <CitiesDropdown />
    </>
  );
};

export default App;
