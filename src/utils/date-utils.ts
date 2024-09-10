// export function formatDateToYYYYMMDD(date: Date): string {
//   return date.toISOString().substring(0, 10)
// }

export function formatDateToYYYYMMDD(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois sont indexés à partir de 0
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}
