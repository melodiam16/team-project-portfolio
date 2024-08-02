document.addEventListener('DOMContentLoaded', function () {
  const textSize = document.getElementById('email');

  textSize.addEventListener('input', function () {
    truncateTextWithEllipsis(textSize);
  });

  function truncateTextWithEllipsis(element) {
    const maxWidth = element.clientWidth;
    const text = element.value;
    const font = window.getComputedStyle(element).font;
    const ellipsis = '...';

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = font;

    let truncatedText = text;
    if (context.measureText(text).width > maxWidth) {
      while (context.measureText(truncatedText + ellipsis).width > maxWidth) {
        truncatedText = truncatedText.slice(0, -1);
      }
      truncatedText += ellipsis;
    }

    element.value = truncatedText;
  }
});
