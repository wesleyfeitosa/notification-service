import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notification-repository';
import { makeNotification } from '@test/factories/notification-factory';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipients notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-1' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-1' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-2' }),
    );

    const countOfNotifications = await countRecipientNotifications.execute({
      recipientId: 'recipient-id-1',
    });

    expect(countOfNotifications.count).toBe(2);
  });
});
