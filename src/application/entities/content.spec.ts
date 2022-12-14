import { Content } from './content';

describe('Notification Content', () => {
  it('should be able to create notification content', () => {
    const content = new Content('Parabéns');

    expect(content).toBeTruthy();
    expect(content.value).toEqual('Parabéns');
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('Olá')).toThrowError();
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrowError();
  });
});
