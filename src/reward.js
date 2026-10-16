// The supplied artwork is kept intact; only its example serial is covered.
export async function saveCard(number) {
  const artwork = new Image();
  artwork.src = `${import.meta.env.BASE_URL}assets/academy/escape-reward-card.png`;
  await artwork.decode();
  const width = artwork.naturalWidth, height = artwork.naturalHeight, heading = 90;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height + heading;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#071833';
  ctx.fillRect(0, 0, width, canvas.height);
  ctx.textAlign = 'center';
  ctx.fillStyle = '#f1dba6';
  ctx.font = '25px Georgia';
  ctx.fillText('PEAKWAY ENGLISH STUDIO', width / 2, 35);
  ctx.font = '19px Georgia';
  ctx.fillText('AUTUMN MAGIC FEST 2026', width / 2, 68);
  ctx.drawImage(artwork, 0, heading);
  ctx.fillStyle = '#071833';
  ctx.fillRect(width * .264, heading + height * .894, width * .473, height * .045);
  ctx.fillStyle = '#fff4d7';
  ctx.font = '30px Georgia';
  ctx.textBaseline = 'middle';
  ctx.fillText(`REWARD CARD № ${number}`, width * .5005, heading + height * .9165);
  const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
  if (!blob) throw new Error('PNG export unavailable');
  const url = URL.createObjectURL(blob), link = document.createElement('a');
  link.href = url;
  link.download = `Boo-Escape-Master-${number}.png`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}
