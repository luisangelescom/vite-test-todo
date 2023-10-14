import useGetData from '../hook/useGetData';
import Item from './items';

function ItemList() {
  const { count } = useGetData();

  return count.map((v) => <Item key={v.id} {...v} />);
}

export default ItemList;
