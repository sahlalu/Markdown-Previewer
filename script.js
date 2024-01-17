
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const darkModeToggle = document.getElementById('darkModeToggle');

updatePreview();

editor.addEventListener('input', updatePreview);

function updatePreview() {
  const markdownContent = editor.value;
  const htmlContent = marked(markdownContent);
  preview.innerHTML = htmlContent;
}

function clearEditor() {
  editor.value = '';
  updatePreview();
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
