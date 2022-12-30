import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notification-repository';
import { makeNotification } from '@test/factories/notification-factory';
import { GetRecipientNotification } from './get-recipient-notification';

describe('Count recipients notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotification(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recipient-id-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-id-1' }),
        expect.objectContaining({ recipientId: 'recipient-id-1' }),
      ]),
    );
  });
});
