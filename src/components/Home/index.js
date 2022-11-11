import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'
import {BsSearch} from 'react-icons/bs'
import Header from '../Header'
import Footer from '../Footer'
import SearchResults from '../SearchResults'
import TotalStats from '../TotalStats'
import './index.css'

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

class Home extends Component {
  state = {
    search: '',
    filterSearchResults: [],
    totalActiveCases: 0,
    totalConfirmedCases: 0,
    totalRecoveredCases: 0,
    totalDeceasedCases: 0,
    isLoading: true,
    stateinformation: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://apis.ccbp.in/covid19-state-wise-data'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      let ConfirmedCases = 0
      let RecoveredCases = 0
      let DeceasedCases = 0
      let ActiveCases = 0

      statesList.forEach(state => {
        if (data[state.state_code]) {
          const {total} = data[state.state_code]
          ConfirmedCases += total.confirmed ? total.confirmed : 0
          RecoveredCases += total.recovered ? total.recovered : 0
          DeceasedCases += total.deceased ? total.deceased : 0
        }
      })
      ActiveCases += ConfirmedCases - (RecoveredCases + DeceasedCases)
      const states = statesList.map(eachItem => ({
        stateCode: eachItem.state_code,
        stateName: eachItem.state_name,
        confirmed: Object.keys(data)
          .filter(state => state === eachItem.state_code)
          .map(e => data[e].total.confirmed),
        recovered: Object.keys(data)
          .filter(state => state === eachItem.state_code)
          .map(e => data[e].total.recovered),
        deceased: Object.keys(data)
          .filter(state => state === eachItem.state_code)
          .map(e => data[e].total.deceased),
        other: Object.keys(data)
          .filter(state => state === eachItem.state_code)
          .map(e => data[e].total.other),
        population: Object.keys(data)
          .filter(state => state === eachItem.state_code)
          .map(e => data[e].meta.population),
      }))
      this.setState({
        totalActiveCases: ActiveCases,
        totalConfirmedCases: ConfirmedCases,
        totalDeceasedCases: DeceasedCases,
        totalRecoveredCases: RecoveredCases,
        stateinformation: states,
        isLoading: false,
      })
    }
  }

  renderAllNationalData = () => {
    const {
      totalConfirmedCases,
      totalRecoveredCases,
      totalDeceasedCases,
      totalActiveCases,
    } = this.state
    return (
      <div className="kk">
        {/* testid="countryWideConfirmedCases" */}
        <div className="stats-block-column">
          <p className="stats-title red">Confirmed</p>
          <img
            src="https://res.cloudinary.com/dzfr8ujso/image/upload/v1650906699/check-mark_1_o3kbj1.png"
            className="stats-icon"
            alt="country wide confirmed cases pic"
          />

          <p className="stats-number reds">{totalConfirmedCases}</p>
        </div>
        {/* testid="countryWideActiveCases" */}
        <div className="stats-block-column">
          <p className="stats-title blue">Active</p>
          <img
            src="https://res.cloudinary.com/dzfr8ujso/image/upload/v1650906741/protection_1_re7mxu.png"
            className="stats-icon"
            alt="country wide active cases pic"
          />
          <p className="stats-number blue">{totalActiveCases}</p>
        </div>
        {/* testid="countryWideRecoveredCases" */}
        <div className="stats-block-column">
          <p className="stats-title green">Recovered</p>
          <img
            src="https://res.cloudinary.com/dzfr8ujso/image/upload/v1650906752/recovered_1_kpsqyj.png"
            className="stats-icon"
            alt="country wide recovered cases pic"
          />
          <p className="stats-number green">{totalRecoveredCases}</p>
        </div>
        {/* testid="countryWideDeceasedCases" */}
        <div className="stats-block-column ">
          <p className="stats-title gray">Deceased</p>
          <img
            src="https://res.cloudinary.com/dzfr8ujso/image/upload/v1650906686/breathing_1_dkacsd.png"
            className="stats-icon"
            alt="country wide deceased cases pic"
          />
          <p className="stats-number gray">{totalDeceasedCases}</p>
        </div>
      </div>
    )
  }

  getSearchItem = event => {
    const searchItem = event.target.value
    const searchResult = statesList.filter(data =>
      data.state_name.toLowerCase().includes(searchItem.toLowerCase()),
    )

    return this.setState({
      search: event.target.value,
      filterSearchResults: searchResult,
    })
  }

  renderLoadingView = () => (
    //   testid="homeRouteLoader"
    <div>
      <Loader type="ThreeDots" color="white" height="50" width="50" />
    </div>
  )

  showSeacrhResults = () => {
    const {filterSearchResults} = this.state
    return (
      // testid="searchResultsUnorderedList"
      <ul className="search-result-value">
        {filterSearchResults.map(each => (
          <SearchResults
            key={each.state_code}
            statename={each.state_name}
            statecode={each.state_code}
            id={each.state_code}
          />
        ))}
      </ul>
    )
  }

  whenAscendingSortButtonClicked = () => {
    const {stateinformation} = this.state
    console.log(stateinformation, 'kk')
    const sortedData = stateinformation.sort((a, b) => {
      const x = a.stateName.toUpperCase()
      const y = b.stateName.toUpperCase()
      return x > y ? 1 : -1
    })
    this.setState({stateinformation: sortedData})
  }

  whenDescendingSortButtonClicked = () => {
    const {stateinformation} = this.state
    const sortedList = stateinformation.sort((a, b) => {
      const x = a.stateName.toUpperCase()
      const y = b.stateName.toUpperCase()
      return x < y ? 1 : -1
    })
    this.setState({stateinformation: sortedList})
  }

  renderAllStatesData = () => {
    const {stateinformation} = this.state
    return (
      // testid="stateWiseCovidDataTable"
      <div className="all-states-table">
        <div className="table-header">
          <div className="state-name-heading">
            <p className="table-header-title ">States/UT</p>
            <button
              className="order"
              type="button"
              //   testid="ascendingSort"
              onClick={this.whenAscendingSortButtonClicked}
            >
              <FcGenericSortingAsc className="order-icon" />
            </button>
            <button
              className="order"
              type="button"
              //   testid="descendingSort"
              onClick={this.whenDescendingSortButtonClicked}
            >
              <FcGenericSortingDesc className="order-icon" />
            </button>
          </div>
          <div className="other-tables-bar">
            <p className="table-header-title">Confirmed</p>
          </div>
          <div className="other-tables-bar">
            <p className="table-header-title">Active</p>
          </div>
          <div className="other-tables-bar">
            <p className="table-header-title">Recovered</p>
          </div>
          <div className="other-tables-bar">
            <p className="table-header-title">Deceased</p>
          </div>
          <div className="other-tables-bar">
            <p className="table-header-title">Population</p>
          </div>
        </div>
        <div className="state-wise-data-container">
          <ul className="other-tables">
            {stateinformation.map(each => (
              <TotalStats key={each.stateCode} data={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {filterSearchResults, search, isLoading} = this.state
    const showSeacrhResults =
      filterSearchResults.length === 0 ? '' : this.showSeacrhResults()
    return (
      <div className="home-container">
        <Header />
        <div className="covid-logo-container">
          <img
            src="https://hbr.org/resources/images/article_assets/2020/03/Mar20_01_Wikimedia3.jpg"
            className="covid-logo"
          />
          <h1 className="covid-title">
            COVID
            <span className="red">19</span>
          </h1>
        </div>
        <div className="container">
          <div className="search-container">
            <BsSearch className="search-icon" />
            <input
              //   testid="searchIcon"
              onChange={this.getSearchItem}
              type="search"
              placeholder="Enter the state"
            />
          </div>
          {search.length < 0 ? '' : showSeacrhResults}
          {isLoading ? (
            this.renderLoadingView()
          ) : (
            <div>
              {this.renderAllNationalData()}
              <div>{this.renderAllStatesData()}</div>
            </div>
          )}
          {/* <select>
            <option> {filterSearchResults} </option>
          </select> */}
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    )
  }
}
export default Home
