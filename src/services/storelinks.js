//Buscar os lilnks salvos
export async function getLinksSave(key) {
  const myLinks = await localStorage.getItem(key);
  let linksSaves = JSON.parse(myLinks) || [];
  return linksSaves;
}

//Salvar um link no localstorage
export async function saveLink(key, newLink) {
  let linksStored = await getLinksSave(key);

  //se ja tiver um link salvo com algun ID eu não vou deixar duplicar
  const hasLink = linksStored.some((link) => link.id === newLink.id);
  if (hasLink) {
    console.log("Esse Link já existe na sua lista");
    return;
  }
  
  //Adicionar esse novo link na lista
  linksStored.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linksStored));
  console.log("Link Salvo com sucesso!!!");
}
