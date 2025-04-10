const fileInput = document.getElementById('file-input');
const previewContainer = document.getElementById('preview-container');
const imagePreview = document.getElementById('image-preview');
const downloadLink = document.getElementById('download-link');

fileInput.addEventListener('change', function() {
  const file = fileInput.files[0];
  if (!file || !file.type.startsWith('image/')) {
    alert("Please select an image.");
    return;
  }

  new Compressor(file, {
    quality: 0.6,
    success(result) {
      const reader = new FileReader();
      reader.onload = () => {
        previewContainer.style.display = 'block';
        imagePreview.src = reader.result;
        downloadLink.href = reader.result;
      };
      reader.readAsDataURL(result);
    },
    error(err) {
      console.error("Compression error: ", err);
    }
  });
});
