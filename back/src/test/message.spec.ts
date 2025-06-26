import { HandleMessageUsecase } from '../application/message/usecases/handle-message.usecase';
import { IMessageRepository } from '../domain/message/message.repository';
import { GeminiRepository } from '../infrastructure/message/gemini.repository';
import { Message } from '../domain/message/message.entity';
import { Gemini } from '../domain/message/gemini.entity';

describe('HandleMessageUsecase', () => {
  let handleMessageUsecase: HandleMessageUsecase;
  let messageRepository: jest.Mocked<IMessageRepository>;
  let geminiRepository: jest.Mocked<GeminiRepository>;

  beforeEach(() => {
    messageRepository = {
      createMessage: jest.fn(),
      readAll: jest.fn(),
      readMessagesByChat: jest.fn(),
    } as unknown as jest.Mocked<IMessageRepository>;

    geminiRepository = {
      sendMessage: jest.fn(),
    } as unknown as jest.Mocked<GeminiRepository>;

    handleMessageUsecase = new HandleMessageUsecase(messageRepository, geminiRepository);
  });

  it('doit enregistrer le message utilisateur, appeler Gemini puis enregistrer la réponse Gemini', async () => {
    const userMessage = 'Salut Gemini!';
    const chatId = 42;
    const geminiResponse = 'Réponse IA';

    messageRepository.createMessage
      .mockResolvedValueOnce(new Message(userMessage, false, chatId))
      .mockResolvedValueOnce(new Message(geminiResponse, true, chatId));

    geminiRepository.sendMessage.mockResolvedValueOnce(new Gemini(geminiResponse));

    const result = await handleMessageUsecase.execute(userMessage, chatId);

    expect(messageRepository.createMessage).toHaveBeenNthCalledWith(1, userMessage, false, chatId);
    expect(geminiRepository.sendMessage).toHaveBeenCalledWith(userMessage);
    expect(messageRepository.createMessage).toHaveBeenNthCalledWith(
      2,
      geminiResponse,
      true,
      chatId
    );
    expect(result).toEqual(new Message(geminiResponse, true, chatId));
  });
});
