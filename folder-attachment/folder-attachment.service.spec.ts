import { Test, TestingModule } from '@nestjs/testing';
import { FolderAttachmentService } from './folder-attachment.service';

describe('FolderAttachmentService', () => {
  let service: FolderAttachmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FolderAttachmentService],
    }).compile();

    service = module.get<FolderAttachmentService>(FolderAttachmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
