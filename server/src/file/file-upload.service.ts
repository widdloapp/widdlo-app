import {Injectable} from '@nestjs/common';
import * as AWS from 'aws-sdk';

import { v4 as uuidv4 } from 'uuid';

const s3 = new AWS.S3({
    endpoint: 'https://gateway.storjshare.io/widdlo',
    s3BucketEndpoint: true,
    accessKeyId: "jvegb3jzi64x5q2nyl3bcmvjxm4a",
    secretAccessKey: "jz2ehakwpd5qxu52qmetauzb7pxrr3qdwa2yvoamqr6cyuhutqakq",
    apiVersion: '2006-03-01',
    params: {Bucket: "widdlo"}
});

@Injectable()
export class FileUploadService {
    constructor() {}

    async uploadFile(file) {
        console.log(file)


        const uploadParams = {
            Bucket: "files",
            Body: file.buffer,
            Key: `${await uuidv4()}.${file.mimetype.split('/')[1]}`,
        }

        const upload = await s3.upload(uploadParams).promise()
        return upload;
    }
}