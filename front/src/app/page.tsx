'use client';
import ChatHistory from '@/components/ChatHistory';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useSubmitMessage } from '@/libs/hooks/useSubmitMessage';

export default function Home() {
  const { message, setMessage, handleSubmitIA } = useSubmitMessage();

  return (
    <>
      <div className={'h-full flex'}>
        <ChatHistory />

        <div className={'p-24 w-full flex flex-col justify-center self-center'}>
          <h1 className={'font-semibold text-5xl text-center mb-8'}>
            De quoi voulez-vous discuter ?
          </h1>
          <div className={'relative flex items-center gap-4'}>
            <Input
              value={message}
              setValue={setMessage}
              handleSubmit={e => handleSubmitIA(e)}
              placeholder={'Rechercher...'}
            />
            <Button handleSubmit={e => handleSubmitIA(e)} />
          </div>
        </div>
      </div>
    </>
  );
}
