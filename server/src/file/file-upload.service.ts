import {Injectable} from '@nestjs/common';
import * as AWS from 'aws-sdk';

import { v4 as uuidv4 } from 'uuid';

const s3 = new AWS.S3({
    endpoint: process.env.S3_ENDPOINT,
    s3BucketEndpoint: true,
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_ACCESS_SECRET_KEY,
    apiVersion: process.env.S3_API_VERSION, //2006-03-01'
    params: {Bucket: process.env.S3_BUCKET_NAME}
});

@Injectable()
export class FileUploadService {
    constructor() {}

    async uploadFile(file) {
        const uploadParams = {
            Bucket: "files",
            Body: file.buffer,
            Key: `${await uuidv4()}.${file.mimetype.split('/')[1]}`,
        }

        const upload = await s3.upload(uploadParams).promise()
        return upload;
    }
}