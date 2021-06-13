const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

const sns = new AWS.SNS();

// which topic I am sending a message to?
const topicArn = 'arn:aws:sns:us-east-1:941965416614:401d8-sns';

const msg = '';

console.log(process.argv[2]);
console.log("-------------------");
const orderItem = process.argv[2];

const order = {
    orderItem : orderItem,
    storeName : '401d8 Store'
}

const params = {
    TopicArn: topicArn,
    Message: JSON.stringify(order)
}

sns.publish(params).promise().then(data=> {
    console.log(data)
}).catch(err=> {
    console.log(err)
});