type LogoProps = {
  className?: string|undefined
}
function Logo({className}: LogoProps) {
  return (
    <h1 className={"text-5xl Blanka select-none "+className }>Visionary</h1>
  )
}

export default Logo