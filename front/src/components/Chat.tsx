'use client';
import Message from '@/components/Message';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useSubmitMessage } from '@/libs/hooks/useSubmitMessage';

export default function Chat({ chatId }: { chatId: number }) {
  const { message, setMessage, handleSubmitIA } = useSubmitMessage(chatId);

  return (
    <div className={'px-32 py-8 w-full flex flex-col justify-between'}>
      <Message chatId={chatId} />

      <div className={'relative flex items-center gap-4'}>
        <Input
          value={message}
          setValue={setMessage}
          handleSubmit={handleSubmitIA}
          placeholder={'Commencer à écrire...'}
        />
        <Button handleSubmit={handleSubmitIA} />
      </div>
    </div>
  );
}
