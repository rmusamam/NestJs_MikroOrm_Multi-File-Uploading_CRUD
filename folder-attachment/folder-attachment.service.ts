import { Injectable } from '@nestjs/common';
import { CreateFolderAttachmentDto } from './dto/create-folder-attachment.dto';
import { UpdateFolderAttachmentDto } from './dto/update-folder-attachment.dto';

@Injectable()
export class FolderAttachmentService {
  create(createFolderAttachmentDto: CreateFolderAttachmentDto) {
    return 'This action adds a new folderAttachment';
  }

  findAll() {
    return `This action returns all folderAttachment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} folderAttachment`;
  }

  update(id: number, updateFolderAttachmentDto: UpdateFolderAttachmentDto) {
    return `This action updates a #${id} folderAttachment`;
  }

  remove(id: number) {
    return `This action removes a #${id} folderAttachment`;
  }
}
