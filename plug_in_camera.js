const exec = require('child_process').exec;
exec('ffmpeg -s 640x480 -f video4linux2 -i /dev/video1 -f mpeg1video -b 800k -r 30 http://192.241.147.209:8082/1234/640/480/', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
