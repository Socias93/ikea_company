export function range(startNumber: number, endNumber: number): number[] {
  let pages: number[] = [];

  for (let count = startNumber; count <= endNumber; count++) {
    pages.push(count);
  }
  return pages;
}
