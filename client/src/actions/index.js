export const pilihBarang = barang => {
  return {
    type: 'BARANG_TERPILIH',
    payload: barang
  }
}