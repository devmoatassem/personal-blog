import { nanoid } from "nanoid";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3_Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});


// @desc    Get a signed URL to upload a file to AWS S3
// this code works according to aws sdk v3 modular version
export const getUploadURL = async (req, res) => {
  const date = new Date();
  const fileName = `${nanoid()}-${date.getTime()}.jpeg`;
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileName,
    ContentType: "image/jpeg",
  });
  await getSignedUrl(s3_Client, command, { expiresIn: 1000 })
    .then((url) => {
      res.status(200).json({ uploadURL: url });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};
