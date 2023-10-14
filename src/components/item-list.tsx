import useGetData from '../hook/useGetData';
import Item from './items';

function ItemList() {
  const { count, onChance, onDelete } = useGetData();
  return count.map((v) => <Item key={v.id} {...v} onChance={onChance} onDelete={onDelete} />);
}

export default ItemList;
