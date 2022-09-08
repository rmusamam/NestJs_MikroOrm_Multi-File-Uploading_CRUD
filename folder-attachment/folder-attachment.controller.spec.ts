import { Test, TestingModule } from '@nestjs/testing';
import { FolderAttachmentController } from './folder-attachment.controller';
import { FolderAttachmentService } from './folder-attachment.service';

describe('FolderAttachmentController', () => {
  let controller: FolderAttachmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FolderAttachmentController],
      providers: [FolderAttachmentService],
    }).compile();

    controller = module.get<FolderAttachmentController>(FolderAttachmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
