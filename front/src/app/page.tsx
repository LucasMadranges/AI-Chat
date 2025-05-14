'use client';
import ChatHistory from '@/components/ChatHistory';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useHomeStartChat } from '@/libs/hooks/useHomeStartChat';

export default function Home() {
  const { message, setMessage, handleHomeSubmit, loading } = useHomeStartChat();

  return (
    <div className={'h-full flex'}>
      <ChatHistory />

      <form
        className={'p-24 w-full flex flex-col justify-center self-center'}
        onSubmit={handleHomeSubmit}
      >
        <h1 className={'font-semibold text-5xl text-center mb-8'}>
          De quoi voulez-vous discuter ?
        </h1>
        <div className={'relative flex items-center gap-4'}>
          <Input
            value={message}
            setValue={setMessage}
            handleSubmit={handleHomeSubmit}
            placeholder={'Posez votre question...'}
            disabled={loading}
          />
          <Button handleSubmit={handleHomeSubmit} disabled={loading} />
        </div>
      </form>
    </div>
  );
}
