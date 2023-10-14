import useGetData from '../hook/useGetData';

interface Prop {
  id: number;
  name: string;
  checked: boolean;
}

function Item({ checked, name, id }: Prop) {
  const { onChance, onDelete } = useGetData();

  return (
    <div
      className='w-full border-2 border-black/20 rounded-md flex gap-2 px-4 py-2 group relative'
      onClick={() => {
        onChance(id);
      }}
    >
      <input type='checkbox' checked={checked} onChange={() => {}} /> <span>{name}</span>
      <div className='hidden group-hover:block absolute right-0 top-0 transition-all duration-500'>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(id);
          }}
          className=' w-[10px] aspect-square flex justify-center items-center'
        >
          <span className='text-sm'>X</span>
        </button>
      </div>
    </div>
  );
}

export default Item;
