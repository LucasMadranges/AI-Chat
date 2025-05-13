import useGetMessage from '@/libs/hooks/useGetMessage';

export default function Message({ chatId }: { chatId: number }) {
  const { items, loading } = useGetMessage(chatId);

  return (
    <div className={'w-full flex flex-col gap-4 overflow-auto'}>
      {loading ? (
        <div>Chargement...</div>
      ) : items.length === 0 ? (
        <div>Aucun message</div>
      ) : (
        items.map((item: { message: string; isGemini: number }, index: number) => (
          <div
            key={index}
            className={`${item.isGemini ? 'bg-gray-400' : 'bg-blue-400 text-white self-end'} w-fit rounded-lg px-4 py-2`}
          >
            {item.message}
          </div>
        ))
      )}
    </div>
  );
}
