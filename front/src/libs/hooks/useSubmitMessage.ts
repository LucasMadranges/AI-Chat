'use client';
import { FormEvent, useState } from 'react';
import api from '@/libs/api/axiosConfig';

export function useSubmitMessage() {
  const [message, setMessage] = useState('');

  async function handleSubmitIA(e: FormEvent) {
    e.preventDefault();

    const res = await api.post(`/message`, {
      message,
    });

    setMessage(res.data);
  }

  return {
    message,
    setMessage,
    handleSubmitIA,
  };
}
