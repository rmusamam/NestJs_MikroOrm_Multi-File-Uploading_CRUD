import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { FolderAttachmentService } from './folder-attachment.service';
import { CreateFolderAttachmentDto } from './dto/create-folder-attachment.dto';
import { UpdateFolderAttachmentDto } from './dto/update-folder-attachment.dto';

import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from "path";

@Controller('folder-attachment')
export class FolderAttachmentController {
  constructor(private readonly folderAttachmentService: FolderAttachmentService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'avatar', },
  
  ],{storage: diskStorage({
    destination: './assets/folderAttachment',
    filename: (req, file, callBack) => {
      const fileName = path.parse(file.originalname).name.replace(/\s/g, '') + Date.now();
      const extension = path.parse(file.originalname).ext;
      callBack(null, `${fileName}${extension}`)
    }
  }),}))
  uploadFile(@UploadedFiles() files: { avatar?: Express.Multer.File[], background?: Express.Multer.File[] }) {
    console.log('hello files',files);
  }
  
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
