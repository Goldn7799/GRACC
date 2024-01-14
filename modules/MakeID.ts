function MakeID (length: number): string {
  // membuat array dari semua karakter yang mungkin
  const allCharacters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

  // membuat array dari karakter random
  const randomCharacters = new Array(length)
  for (let i = 0; i < length; i++) {
    randomCharacters[i] = allCharacters.charAt(Math.floor(Math.random() * allCharacters.length))
  }

  // mengembalikan string dari karakter random
  return randomCharacters.join('')
}

export default MakeID
