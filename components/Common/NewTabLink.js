function NewTabLink({ href, children }) {
  return (
    <a target="_blank" rel="noreferrer" href={href}>
      {children}
    </a>
  )
}

export default NewTabLink
