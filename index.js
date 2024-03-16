function findMatching(list, name) {
  return list.filter((driver) => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(list, name) {
  return list.filter((driver) => driver.startsWith(name));
}

function matchName(list, name) {
  return list.filter((driver) => driver.name === name);
}
