import { Req, Res, Injectable } from '@nestjs/common';
import * as multer from 'multer';
import * as AWS from 'aws-sdk';
import * as multerS3 from 'multer-s3';

const s3 = new AWS.S3();
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

@Injectable()
export class FileUploadService {
    constructor() {}

    async fileupload(@Req() req, @Res() res) {
        try {
            this.upload(req, res, function(error) {
                if (error) {
                    return res.status(404).json(`Failed to upload file file: ${error}`);
                }
                return res.status(201).json(req.files[0].location);
            });
        } catch (error) {
            return res.status(500).json(`Failed to upload file file: ${error}`);
        }
    }

    upload = multer({
        storage: multerS3({
            s3: s3,
            endpoint: process.env.AWS_S3_ENDPOINT,
            bucket: process.env.AWS_S3_BUCKET_NAME,
            acl: 'public-read',
            key: function(request, file, cb) {
                cb(null, `id/${file.originalname}`);
            },
        }),
    }).array('upload', 1);
}