'use client';
import { FormEvent, useState } from 'react';
import api from '@/libs/api/axiosConfig';

export function useSubmitMessage(chatId: number) {
  const [message, setMessage] = useState('');

  async function handleSubmitIA(e: FormEvent) {
    e.preventDefault();

    await api.post(`/message/gemini`, {
      message,
      chatId,
    });

    setMessage('');
  }

  return {
    message,
    setMessage,
    handleSubmitIA,
  };
}
