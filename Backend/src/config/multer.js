import aws from "aws-sdk";
import multerS3 from "multer-s3";
import crypto from "crypto";
import { extname, resolve } from "path";

export default { 
    s3: multerS3({
        s3: new aws.S3(),
        bucket: 'dezcontao-api',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            crypto.randomBytes(16, (err, res) => {
                if(err) return cb(err);

                return cb(null, res.toString('hex') + extname(file.originalname));
            })
        },
    })
}