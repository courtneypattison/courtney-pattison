export function getFixedImage(data: any, originalName: string) {
  return data.allFile.edges.find(
    (edge: any) => edge.node.childImageSharp.fixed.originalName === originalName
  ).node.childImageSharp.fixed;
}
