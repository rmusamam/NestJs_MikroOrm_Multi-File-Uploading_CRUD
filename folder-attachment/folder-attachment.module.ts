import { Module } from '@nestjs/common';
import { FolderAttachmentService } from './folder-attachment.service';
import { FolderAttachmentController } from './folder-attachment.controller';

@Module({
  controllers: [FolderAttachmentController],
  providers: [FolderAttachmentService]
})
export class FolderAttachmentModule {}
