import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
const fs = require("fs");

const s3 = new AWS.S3({
    endpoint: 'https://gateway.storjshare.io',
    s3BucketEndpoint: true,
    accessKeyId: "jw3oi6lrsnetskiy5tm2tyyv4idq",
    secretAccessKey: "jzldnmkbglsfypl77vcb2mo43oxgldan7v4sewhuzouoqnygsu6jy",
    apiVersion: '2006-03-01',
    params: {Bucket: "files"}
});

@Injectable()
export class FileUploadService {
    constructor() {}

    async uploadFile(file) {
        const fileName = file.originalname;


        const uploadParams = {
            Bucket: "files",
            Body: file.buffer,
            Key: `files/tmp/${fileName}`
        }

        const upload = await s3.upload(uploadParams).promise()
        return upload;
    }
}