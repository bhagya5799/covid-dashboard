import './index.css'

const ShowEachDistrictData = props => {
  const {number, name} = props
  console.log(name, number)

  return (
    <li className="list-style">
      <p className="district-numbers">{number}</p>
      <p className="district-name">{name}</p>
    </li>
  )
}

export default ShowEachDistrictData
