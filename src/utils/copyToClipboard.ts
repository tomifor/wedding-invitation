export const copyToClipboard = (text: string | undefined) => {
  if(!text) return;
  if (!navigator.clipboard) {
    throw 'Not supported';
  }
  navigator.clipboard.writeText(text).then(() => {
  }, (err) => {
    throw err;
  });
}
