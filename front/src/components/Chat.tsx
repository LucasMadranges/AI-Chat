import Message from '@/components/Message';

export default function Chat() {
  return (
    <div className={'px-32 py-8 w-full flex flex-col justify-between'}>
      <Message />
      <input
        type={'text'}
        className={'border border-gray-200 rounded-lg p-2 shadow my-8 w-full'}
        placeholder={'Rechercher...'}
      />
    </div>
  );
}
