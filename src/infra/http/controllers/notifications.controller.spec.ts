import { Test, TestingModule } from '@nestjs/testing';
import { Notification } from '../../../application/entities/notification';
import { NotificationsRepository } from '../../../application/repositories/notifications-repository';
import { SendNotification } from '../../../application/use-cases/send-notification';
import { NotificationsController } from './notifications.controller';

describe('Notifications Controller', () => {
  let notificationsController: NotificationsController;
  let notificationsRepository: NotificationsRepository;

  const NotificationsRepositoryProvider = {
    provide: NotificationsRepository,
    useValue: {
      create: (notification: Notification) => notification,
    },
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NotificationsController],
      providers: [SendNotification, NotificationsRepositoryProvider],
    }).compile();

    notificationsController = app.get<NotificationsController>(
      NotificationsController,
    );
    notificationsRepository = app.get<NotificationsRepository>(
      NotificationsRepository,
    );
  });

  it('should be defined', () => {
    expect(notificationsController).toBeDefined();
    expect(notificationsRepository).toBeDefined();
  });

  it('should create a notification', () => {
    expect(
      notificationsController.create({
        recipientId: '123',
        content: 'Notificação de teste',
        category: 'social',
      }),
    ).toBeTruthy();
  });
});
