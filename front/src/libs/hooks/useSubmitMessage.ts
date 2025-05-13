'use client';
import { useState } from 'react';
import api from '@/libs/api/axiosConfig';

export function useSubmitMessage() {
  const [message, setMessage] = useState('');

  async function handleSubmitIA() {
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
