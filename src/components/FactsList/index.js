import './index.css'

const FactsList = props => {
  const {banner} = props
  //   console.log(banner)

  return (
    <>
      <li className="facts">{banner}</li>
    </>
  )
}

export default FactsList
