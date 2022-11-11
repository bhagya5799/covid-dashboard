import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'
import ShowEachDistrictData from '../ShowEachDistrictData'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
    id: 1,
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {state_code: 'DN', state_name: 'Dadra and Nagar Haveli and Daman and Diu'},
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

class Vaccination extends Component {
  state = {
    userValue: '',
    userDisctic: '',
    filterDataList: [],
    discticData: [],
    totalSites: [],
    govtSites: '',
    povtSites: '',
  }

  componentDidMount() {
    this.getVaccinationData()
    this.getDiscticData()
  }

  OnChangeValue = event => {
    const userChangeValue = event.target.value
    this.setState(
      {
        userValue: userChangeValue,
      },
      this.getVaccinationData,
    )
  }

  OnChangeDisct = event => {
    const userChangeDisctic = event.target.value
    this.setState(
      {
        userDisctic: userChangeDisctic,
      },
      this.getVaccinationData,
    )
  }

  getDiscticData = async () => {
    const {discticData} = this.state
    const url = 'https://apis.ccbp.in/covid19-districts-data/2'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data.districts, 'ok')
      const discticNames = data.districts
      this.setState({
        discticData: discticNames,
      })
    }
  }

  getVaccinationData = async () => {
    const {userValue} = this.state
    // console.log(userValue, 'user')
    const url = 'https://apis.ccbp.in/covid19-vaccination-data'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    // console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data, 'k')
      const sitesData = data.sessionSiteData
      const filterData = data.getBeneficiariesGroupBy.filter(
        each => each.state_name === userValue,
      )
      this.setState({
        filterDataList: filterData,
        totalSites: sitesData,
      })
      // console.log(timeWiseTodayRegReportData[5].id, 'kkkkk', filterData)
    }
  }

  render() {
    const {userValue, filterDataList, discticData, totalSites} = this.state

    console.log(totalSites.govt_sessions, 'l')
    return (
      <Link to="/vaccination" className="Link">
        <div className="vaccination-container">
          <Header />
          <div className="select-container">
            <select onChange={this.OnChangeValue} className="select">
              {statesList?.map(each => (
                <option value={each.state_name}>{each.state_name}</option>
              ))}
            </select>
            <select onChange={this.OnChangeDisc} className="select">
              {discticData?.map(each => (
                <option value={each.district_name}>{each.district_name}</option>
              ))}
            </select>
            <div className="sites-container">
              <h3 className="green">Total Sites: {totalSites.total_sites}</h3>
              <h3>Government Sites: {totalSites.govt_sites}</h3>
              <h3 className="red">Private Sites: {totalSites.pvt_sites}</h3>
            </div>
          </div>
          <div className="todayReport">
            <h1 className="title">{userValue}</h1>
          </div>
          <ul className="filterdata">
            {filterDataList?.map(each => (
              <li key={each.id}>
                <p>Total: {each.total}</p>
                <p className="total">
                  TotalVaccinated: {each.totally_vaccinated}
                </p>
              </li>
            ))}
          </ul>
          <Footer />
        </div>
      </Link>
    )
  }
}
export default Vaccination
