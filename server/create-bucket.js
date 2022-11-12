// setup and import AWS
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

AWS.config.update({ region: 'us-east-2' })

// create the S3 service object
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// bucket metadata
var bucketParams = {
    Bucket: 'user-images-' + uuidv4(),
}

// actually create the bucket
s3.createBucket(bucketParams, (err, data) => {
    if (err) {
        console.log('Error', err);
    } else {
        console.log('Success')
    }
})