import React, {Component} from 'react'

class SitesData extends Component {
  state = {
    totalSites: [],
  }

  componentDidMount() {
    this.getSitesData()
  }

  getSitesData = async () => {
    const url = 'https://apis.ccbp.in/covid19-vaccination-data'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const sitesData = data.sessionSiteData
      console.log(sitesData, 'site')
      const updateSites = sitesData.map(each => ({
        totalSites: each.total_sites,
        govtSites: each.govt_sites,
        pvtSites: each.pvt_sites,
      }))
      this.setState({
        totalSites: data,
      })
      // console.log(timeWiseTodayRegReportData[5].id, 'kkkkk', filterData)
    }
  }

  render() {
    const {totalSites} = this.state
    return (
      <div>
        <ul className="filterdata">
          {totalSites.map(each => (
            <li key={each.pvt_sites}>
              <p>Total: {each.total_sites}</p>
              <p className="total">TotalVaccinated: {each.govt_sites}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
export default SitesData
