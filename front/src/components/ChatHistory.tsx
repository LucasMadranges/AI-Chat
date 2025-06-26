'use client';
import Link from 'next/link';
import useGetChats from '@/libs/hooks/useGetChats';

export default function ChatHistory() {
  const { items, loading } = useGetChats();

  return (
    <div className={'w-1/5 border-r border-gray-200 p-4'}>
      <div className={'flex items-center gap-4 mb-8'}>
        <Link href={'/'} className={'cursor-pointer hover:bg-gray-100 transition p-2 rounded-full'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
              <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
            </g>
          </svg>
        </Link>
        <input
          type={'text'}
          className={'border border-gray-200 rounded-lg p-2 shadow w-full'}
          placeholder={'Rechercher...'}
        />
      </div>
      <hr className={'mb-8 border-gray-200'} />
      <div className="flex flex-col gap-4 overflow-auto h-[calc(100svh-150px)]">
        {loading ? (
          <div>Chargement...</div>
        ) : items.length === 0 ? (
          <div>Aucun chat</div>
        ) : (
          items.map((item: { id: number; label: string }, index: number) => (
            <Link
              href={String(item.id)}
              key={index}
              className={
                'cursor-pointer border border-gray-200 rounded-lg p-2 shadow transition hover:bg-gray-50 active:scale-y-95 active:shadow-none'
              }
            >
              {item.label}
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
