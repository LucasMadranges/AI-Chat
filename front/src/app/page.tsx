import ChatHistory from '@/components/ChatHistory';
import Chat from '@/components/Chat';

export default function Home() {
  return (
    <>
      <div className={'h-full flex'}>
        <ChatHistory />
        <Chat />
      </div>
    </>
  );
}
