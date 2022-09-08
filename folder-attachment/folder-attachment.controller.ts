import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FolderAttachmentService } from './folder-attachment.service';
import { CreateFolderAttachmentDto } from './dto/create-folder-attachment.dto';
import { UpdateFolderAttachmentDto } from './dto/update-folder-attachment.dto';

@Controller('folder-attachment')
export class FolderAttachmentController {
  constructor(private readonly folderAttachmentService: FolderAttachmentService) {}

  @Post()
  create(@Body() createFolderAttachmentDto: CreateFolderAttachmentDto) {
    return this.folderAttachmentService.create(createFolderAttachmentDto);
  }

  @Get()
  findAll() {
    return this.folderAttachmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.folderAttachmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFolderAttachmentDto: UpdateFolderAttachmentDto) {
    return this.folderAttachmentService.update(+id, updateFolderAttachmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.folderAttachmentService.remove(+id);
  }
}
