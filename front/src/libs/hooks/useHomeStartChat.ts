import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import api from '@/libs/api/axiosConfig';

export function useHomeStartChat() {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleHomeSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!message.trim()) return;

    setLoading(true);

    const chatRes = await api.post(`/chat`, { label: message });
    const chatId = chatRes.data.id;

    router.push(`/${chatId}`);

    await api.post('/message/gemini', { message, chatId });

    setMessage('');
    setLoading(false);
  }

  return {
    message,
    setMessage,
    handleHomeSubmit,
    loading,
  };
}
