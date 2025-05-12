'use client';
import ChatHistory from '@/components/ChatHistory';
import { useState } from 'react';
import api from '@/libs/api/axiosConfig';

export default function Home() {
  const [message, setMessage] = useState('');

  async function handleSubmitIA() {
    const res = await api.post(`/message`, {
      message,
    });

    setMessage(res.data);
  }

  return (
    <>
      <div className={'h-full flex'}>
        <ChatHistory />

        <div className={'p-24 w-full flex flex-col justify-center self-center'}>
          <h1 className={'font-semibold text-5xl text-center mb-8'}>
            De quoi voulez-vous discuter ?
          </h1>
          <div className={'relative flex items-center gap-4'}>
            <input
              type={'text'}
              className={'border border-gray-200 rounded-lg p-2 shadow my-8 w-full'}
              placeholder={'Rechercher...'}
              value={message}
              onChange={e => setMessage(e.target.value)}
              onSubmit={handleSubmitIA}
            />
            <button
              className={
                'bg-blue-500 rounded-full p-2 hover:bg-blue-600 cursor-pointer transition shadow active:scale-95 active:shadow-none'
              }
              onClick={handleSubmitIA}
              onSubmit={handleSubmitIA}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="m11 8.8l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275L13 8.8V17q0 .425-.288.713T12 18t-.712-.288T11 17z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
