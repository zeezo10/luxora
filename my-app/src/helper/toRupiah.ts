export function toRupiah(amount: number): string {
  return "Rp " + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Format number to Rupiah
}
