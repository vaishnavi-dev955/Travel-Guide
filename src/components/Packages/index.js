import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class Packages extends Component {
  state = {packagesData: [], isLoading: true}

  componentDidMount() {
    this.getPackagesData()
  }

  getPackagesData = async () => {
    const ApiUrl = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(ApiUrl)
    const data = await response.json()
    const UpdatedData = data.packages.map(eachItem => ({
      description: eachItem.description,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      name: eachItem.name,
    }))
    this.setState({packagesData: UpdatedData, isLoading: false})
  }

  render() {
    const {packagesData, isLoading} = this.state
    return (
      <div className="main-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="packages-container">
            <h1 className="heading">Travel Guide</h1>
            <div className="box-alignment-container">
              <div className="box-style">blue background</div>
            </div>
            <ul className="sub-container2">
              {packagesData.map(eachItem => (
                <li className="listItem" key={eachItem.id}>
                  <div className="list-container">
                    <img
                      src={eachItem.imageUrl}
                      alt={eachItem.name}
                      className="package-Image-style"
                    />
                    <h1 className="package-heading">{eachItem.name}</h1>
                    <p className="package-description">
                      {eachItem.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Packages
