function Illustrations({ illustrations }) {
  return illustrations.map(({ name, filePath }) => (
    <div key={name}>
      {name}：{filePath}
    </div>
  ))
}

export default Illustrations
