import { useState } from 'react';
import List from './components/List/List';
import Details from "./components/Details/Details";
import './App.css';

const App = (): JSX.Element => {
  const [id, setId] = useState<number | null>(null);

  const onShowDetails = (id: number): void => {
    setId(id);
  };

  return (
    <div className='users-info'>
      <List onShowDetails={onShowDetails} />
      {id && <Details id={id} />}
    </div>
  );
}

export default App;
