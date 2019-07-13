export function encode(data: string): number[] {
  return data.split('').map((char) => char.charCodeAt(0));
}

export function decode(charcodeSequence: number[]): string {
  return charcodeSequence
    .map((charcode) => String.fromCharCode(charcode))
    .join('');
}
