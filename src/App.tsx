import ItemList from './components/item-list';
import NotFoundItem from './components/not-found-item';

import './App.css';

function App() {
  return (
    <main className='w-[350px] flex flex-col gap-4'>
      <NotFoundItem />
      <ItemList />
    </main>
  );
}

export default App;
