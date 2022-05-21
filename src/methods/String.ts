String.prototype.formatToSearch = function(string): boolean {

  const str = this.replace(/\s|_|\(|\)/g, "-")
  .normalize("NFD").replace(/\p{Diacritic}/gu, "")
  .toLowerCase()

  const search = string.replace(/\s|_|\(|\)/g, "-")
  .normalize("NFD").replace(/\p{Diacritic}/gu, "")
  .toLowerCase()

  return str.startsWith(search) || str.includes(search)
}

export {}