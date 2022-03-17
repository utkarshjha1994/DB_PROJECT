import {S3} from 'aws-sdk/clients';

const client = new S3({
	region: 'us-west-2'
});

s3.selectObjectContent(params, (err, data) => {
	if (err) {
		if (err.name) {
            alert(err.name);
			// Check against specific error codes that need custom handling
		}
		return;
	}

	// data.Payload is a Readable Stream
	const events = data.Payload;
	
	for (const event of events) {
		if (event.Records) {
			// event.Records.Payload is a buffer containing
			// a single record, partial records, or multiple records
			process.stdout.write(event.Records.Payload.toString());
		} else if (event.Stats) {
			console.log(`Processed ${event.Stats.Details.BytesProcessed} bytes`);
		} else if (event.End) {
			console.log('SelectObjectContent completed');
		}
	}
});