const { S3Client, HeadObjectCommand } = require("@aws-sdk/client-s3");

const s3Client = new S3Client({ region: process.env.AWS_REGION });

async function checkBuildIdExists(buildId) {
  const params = {
    Bucket: process.env.S3_BUCKET,
    Key: `builds/${buildId}/` // Adjust this path as needed
  };

  try {
    await s3Client.send(new HeadObjectCommand(params));
    console.log(`Build ID ${buildId} exists in S3.`);
    return true;
  } catch (error) {
    if (error.name === 'NotFound') {
      console.log(`Build ID ${buildId} does not exist in S3.`);
      return false;
    }
    console.error("Error checking S3:", error);
    throw error;
  }
}

async function main() {
  const buildId = process.argv[2];
  if (!buildId) {
    console.error("Please provide a build ID");
    process.exit(1);
  }

  try {
    const exists = await checkBuildIdExists(buildId);
    process.exit(exists ? 0 : 1);
  } catch (error) {
    console.error("An error occurred:", error);
    process.exit(1);
  }
}

main();
