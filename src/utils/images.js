export function getFixedImage(data, originalName) {
  return data.allFile.edges.find(
    (edge) => edge.node.childImageSharp.fixed.originalName === originalName
  ).node.childImageSharp.fixed;
}
