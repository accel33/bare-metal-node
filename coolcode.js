let foundElement
for (const element of rawHeaders) {
  if (element.includes('localhost')) {
    foundElement = element
  }
}
console.log(foundElement);
