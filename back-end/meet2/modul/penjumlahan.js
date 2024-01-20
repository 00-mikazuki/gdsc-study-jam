const jumlah = (a, b) => {
  return a + b;
}

const kurang = (a, b) => {
  return a - b;
}

// export common js
// module.exports = jumlah;

// exports es modules
// export default jumlah;
export { jumlah, kurang };