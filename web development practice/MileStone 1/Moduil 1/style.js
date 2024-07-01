console.log("Sakib khan");
const a = 6,
  b = 9;
console.log(a * b);

document.getElementById('downloadButton').addEventListener('click', function() {
  var imageUrl = document.getElementById('imageToDownload').src;
  var link = document.createElement('a');
  link.href = imageUrl;
  link.download = 'downloaded_image.jpg';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

