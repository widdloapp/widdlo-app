import { Controller, Post, Req, Res } from '@nestjs/common';
import {FileUploadService} from "./file-upload.service";

@Controller('fileupload')
export class FileUploadController {
    constructor(private readonly fileUploadService: FileUploadService) {}
    @Post()
    async create(file) {
        try {
            await this.fileUploadService.uploadFile(file);
        } catch (error) {
            return error;
        }
    }
}