import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: 'example-recipient-id',
      content: new Content('Parabéns'),
      category: 'social',
    });

    expect(notification).toBeTruthy();
    expect(notification.content.value).toEqual('Parabéns');
  });
});
