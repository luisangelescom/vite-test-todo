import useGetData from '../hook/useGetData';

function NotFoundItem() {
  const { count, reboot } = useGetData();
  return (
    !count.length && (
      <div className='flex flex-col gap-4'>
        <span>No hay item</span>
        <button onClick={reboot}>Reiniciar</button>
      </div>
    )
  );
}

export default NotFoundItem;
