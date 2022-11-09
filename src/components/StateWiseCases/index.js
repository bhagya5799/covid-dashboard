import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import './index.css'
import ShowEachDistrictData from '../ShowEachDistrictData'
import StateTotalData from '../StateTotalData'
import ChartsData from '../ChartsData'
import Footer from '../Footer'
import MapsUrl from '../MapsUrl'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
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
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
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

const mapListUrl = [
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667893625/Group_7328_yyngtw.png',
    mapStateName: 'Jammu and Kashmir',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667893919/Group_7364_llfbn3.png',
    mapStateName: 'Himachal Pradesh',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667894059/Group_7330_yeepkx.png',
    mapStateName: 'Punjab',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667901513/Group_7331_e2atev.png',
    mapStateName: 'Uttarakhand',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667901697/Group_7332_x2y616.png',
    mapStateName: 'Haryana',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667901697/Group_7332_x2y616.png',
    mapStateName: 'Rajasthan',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667902016/Group_7334_dp9hkd.png',
    mapStateName: 'Uttar Pradesh',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667902185/Group_7335_vwc0yc.png',
    mapStateName: 'Bihar',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667902435/Group_7336_zyepid.png',
    mapStateName: 'Madhya Pradesh',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667906690/Group_7362_htdvha.png',
    mapStateName: 'Andaman and Nicobar Islands',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667906108/Group_7340_zavy4f.png',
    mapStateName: 'Arunachal Pradesh',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667906215/Group_7341_hcsfcp.png',
    mapStateName: 'Assam',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667902435/Group_7336_zyepid.png',
    mapStateName: 'Chandigarhnagr',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667906776/Group_7357_dvtfd8.png',
    mapStateName: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667906942/Group_7358_mgnnzn.png',
    mapStateName: 'Delhi',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667906261/Group_7349_euoqkz.png',
    mapStateName: 'Goa',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667902435/Group_7336_zyepid.png',
    mapStateName: 'Gujarat',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667902435/Group_7336_zyepid.png',
    mapStateName: 'Karnataka',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667902435/Group_7336_zyepid.png',
    mapStateName: 'Kerala',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667907050/Group_7363_y8alkq.png',
    mapStateName: 'Ladakh',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667906822/Group_7359_spkdg1.png',
    mapStateName: 'Lakshadweep',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667902435/Group_7336_zyepid.png',
    mapStateName: 'Maharashtra',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667906411/Group_7346_zprq6s.png',
    mapStateName: 'Manipur',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667906318/Group_7344_ie8rtb.png',
    mapStateName: 'Meghalaya',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667906456/Group_7347_m2vsc5.png',
    mapStateName: 'Mizoram',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667906367/Group_7345_p2bg6w.png',
    mapStateName: 'Nagaland',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667902435/Group_7336_zyepid.png',
    mapStateName: 'Odisha',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667906858/Group_7360_hhtfoz.png',
    mapStateName: 'Puducherry',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667902435/Group_7336_zyepid.png',
    mapStateName: 'Punjab',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667902435/Group_7336_zyepid.png',
    mapStateName: 'Rajasthan',
  },
  {
    mapUrl:
      ' https://res.cloudinary.com/bhagya/image/upload/v1667906506/Group_7361_iua6m0.png',
    mapStateName: 'Chandigarh',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667906023/Group_7338_bqjilw.png',
    mapStateName: 'Sikkim',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667902435/Group_7336_zyepid.png',
    mapStateName: 'Tripura',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667905968/Group_7343_z6ilox.png',
    mapStateName: 'West Bengal',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667902435/Group_7336_zyepid.png',
    mapStateName: 'Telangana',
  },
  {
    mapUrl:
      'https://res.cloudinary.com/bhagya/image/upload/v1667905835/Group_7342_kywyq5.png',
    mapStateName: 'Jharkhand',
  },
]
class StateWiseCases extends Component {
  state = {
    eachStateTotalData: [],
    isLoading: true,
    totalTestedData: 0,
    nameOfState: '',
    activeTab: true,
    category: 'Confirmed',
    id: '',
    dataarray: [],
    date: '',
    stateCode: '',
    mapList: [],
  }

  componentDidMount() {
    this.getAllStateData()
  }

  getAllStateData = async () => {
    const {match} = this.props
    const {params} = match
    const {stateCode} = params
    const apiUrl = `https://apis.ccbp.in/covid19-state-wise-data/`
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const stateTastedData = data[stateCode].total.tested
      const stateObject = statesList.filter(
        each => each.state_code === stateCode,
      )
      const eachState = data[stateCode].total
      const stateName = stateObject[0].state_name

      const datedata = new Date(data[stateCode].meta.last_updated)

      this.setState({
        eachStateTotalData: eachState,
        totalTestedData: stateTastedData,
        nameOfState: stateName,
        isLoading: false,
        id: stateCode,
        dataarray: data,
        date: datedata,
        stateCode,
      })
    } else {
      console.log('Fetch Error')
    }
  }

  onGetCategory = categoryVal => {
    this.setState({category: categoryVal, activeTab: false})
  }

  renderLoadingView = () => (
    <div
      className="products-details-loader-container"
      testid="stateDetailsLoader"
    >
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  fileterMaps = () => {
    const {nameOfState} = this.state
    console.log(nameOfState, 'name')
    const mapsFilter = mapListUrl.filter(
      map => map.mapStateName === nameOfState,
    )
    return mapsFilter
  }

  getCategoryWiseData = () => {
    const {category, id, dataarray} = this.state
    const districtOutput = dataarray[id].districts
    const distNamesList = Object.keys(districtOutput)
    const categoryLower = category.toLowerCase()

    const categoryData = distNamesList.map(element => ({
      distName: element,
      value: districtOutput[element].total[categoryLower]
        ? districtOutput[element].total[categoryLower]
        : 0,
    }))

    categoryData.sort((a, b) => b.value - a.value)

    const activeCases = distNamesList.map(element => ({
      distName: element,
      value:
        districtOutput[element].total.confirmed -
        (districtOutput[element].total.recovered +
          districtOutput[element].total.deceased)
          ? districtOutput[element].total.confirmed -
            (districtOutput[element].total.recovered +
              districtOutput[element].total.deceased)
          : 0,
    }))
    activeCases.sort((a, b) => b.value - a.value)

    if (categoryLower === 'active') {
      return activeCases
    }
    return categoryData
  }

  renderStateView = () => {
    const {
      nameOfState,
      totalTestedData,
      eachStateTotalData,
      activeTab,
      date,
      category,
      stateCode,
    } = this.state
    const catdata = this.getCategoryWiseData()
    const filterdata = this.fileterMaps()

    return (
      <div className="state-details">
        <div className="state-name-row">
          <h1 className="state-name-container">{nameOfState}</h1>
          <div className="testno-container">
            <p className="test-title">Tested</p>
            <p className="testno">{totalTestedData}</p>
          </div>
        </div>
        <div>
          <p className="last-date">{`last update on ${date}`}</p>
        </div>
        <div className="align-center-row">
          <div className="country-stats">
            <StateTotalData
              onGetCategory={this.onGetCategory}
              eachStateTotalData={eachStateTotalData}
              active={activeTab}
            />
          </div>
        </div>

        <div className="total-district-data-block">
          <h1 className={`district-heading ${category}-color`}>
            Top Districts
          </h1>
          <div className="maps-container">
            {filterdata.map(eachUrl => (
              <MapsUrl details={eachUrl} />
            ))}
            {/* <h1 className="mapname">Ncp Report</h1>
            <h2 className="mapname">{totalTestedData}</h2> */}
          </div>
          <div className="ul-parent-list">
            <div className="district-data-ul-list">
              <ul
                className="districts-container"
                testid="topDistrictsUnorderedList"
              >
                {catdata.map(each => (
                  <ShowEachDistrictData
                    key={each.distName}
                    number={each.value}
                    name={each.distName}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="graphs-data" testid="lineChartsContainer">
            <ChartsData stateCode={stateCode} category={category} />
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    const renderData = isLoading
      ? this.renderLoadingView()
      : this.renderStateView()
    return (
      <div className="main-container">
        <Header />
        <div className="container">{renderData}</div>
        <Footer />
      </div>
    )
  }
}

export default StateWiseCases
