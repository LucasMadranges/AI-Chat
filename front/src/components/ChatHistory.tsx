export default function ChatHistory() {
  const arrayChat = Array.from({ length: 10 }, (_, i) => ({
    title: 'First question',
  }));

  return (
    <div className={'w-1/5 border-r border-gray-200 p-4'}>
      <input
        type={'text'}
        className={'border border-gray-200 rounded-lg p-2 shadow mb-8 w-full'}
        placeholder={'Rechercher...'}
      />
      <hr className={'mb-8 border-gray-200'} />
      <div className={'flex flex-col gap-4 overflow-auto h-[calc(100svh-150px)]'}>
        {arrayChat.map((item, index) => (
          <div
            key={index}
            className={
              'cursor-pointer border border-gray-200 rounded-lg p-2 shadow transition hover:bg-gray-50 active:scale-y-95 active:shadow-none'
            }
          >
            Chat
          </div>
        ))}
      </div>
    </div>
  );
}
