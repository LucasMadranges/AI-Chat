'use client';
import ChatHistory from '@/components/ChatHistory';
import Chat from '@/components/Chat';
import { useParams } from 'next/navigation';

export default function page() {
  const params = useParams();

  return (
    <div className={'h-full flex'}>
      <ChatHistory />
      <Chat chatId={Number(params.chatId)} />
    </div>
  );
}
