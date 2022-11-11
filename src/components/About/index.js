import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import FaqsList from '../FaqsList'
import FactsList from '../FactsList'
import Footer from '../Footer'

class About extends Component {
  state = {
    factoidsList: {},
    faqList: {},
    isLoading: true,
  }

  renderLoader = () => (
    //   testid="aboutRouteLoader"
    <div className="loader-container">
      <Loader type="ThreeDots" color="white" />
    </div>
  )

  componentDidMount = () => {
    this.getAllAboutData()
  }

  getAllAboutData = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid19-faqs'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    // console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      //   console.log(data)
      const factoidUpdateData = data.factoids.map(eachData => ({
        banner: eachData.banner,
        id: eachData.id,
      }))
      const FaqUpdateData = data.faq.map(eachData => ({
        answer: eachData.answer,
        category: eachData.category,
        question: eachData.question,
        qno: eachData.qno,
      }))
      this.setState({
        factoidsList: factoidUpdateData,
        faqList: FaqUpdateData,
        isLoading: false,
      })
    } else {
      console.log('data not available')
    }
  }

  renderAllData = () => {
    const {faqList, factoidsList} = this.state
    return (
      <>
        {/* testid="faqsUnorderedList" */}
        <ul className="factlist">
          {faqList.map(each => (
            <FaqsList
              key={each.qno}
              answer={each.answer}
              question={each.question}
            />
          ))}
        </ul>
        <h1 className="about-vaccine-title">Factoids</h1>
        <ul className="factlist">
          {factoidsList.map(each => (
            <FactsList key={each.id} banner={each.banner} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="container-About">
        <Header />
        <div className="about-box">
          <h1 className="about">About</h1>
          <p className="about-description">Last update on march 28th 2021.</p>
          <h2 className="vaccine-title">
            COVID-19 vaccines be ready for distribution
          </h2>
        </div>
        <div className="factList">
          {isLoading ? this.renderLoader() : this.renderAllData()}
        </div>
        <Footer />
      </div>
    )
  }
}
export default About
