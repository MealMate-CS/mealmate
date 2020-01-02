import React from 'react'
import UploadItem from '../components/UploadItem.jsx'
import RecentUploads from '../components/RecentUploads.jsx'


class DonorMainPage extends React.Component {
    constructor(props) {
        super(props)
    
        this.state= {
            itemName: '',
            allergens: [],
            expirationDate: '',
            itemsListed: [],
            organizationName: ''
        }
        this.setItemName = this.setItemName.bind(this)
        this.setAllergens = this.setAllergens.bind(this)
        this.setAllergens = this.setAllergens.bind(this)
    }

    setItemName(event) {
        this.setState({itemName:event.target.value})
    }
    setAllergens(event) {
        let allergens = this.state.allergens.slice()
        allergens.push(event.target.value)
        console.log('beign pushed', event.target.value)
        this.setState({allergens})
    }
    setExpirationDate(event) {
        this.setState({expirationDate : event.target.value})
        console.log(event.target.value)
    }
    componentDidMount() {
        console.log('props in donormainpage', this.props)
        const body = {
            userId : this.props.userId
        }
        fetch('/')


    }
    render() {
        return(
            <div id='donor-main-page'>
                Yo {this.props.userId} From {this.props.userOrganization}
                <UploadItem itemName={this.state.itemName} allergens={this.state.allergens} expirationDate={this.state.expirationDate}
                setItemName={this.setItemName} setAllergens={this.setAllergens} setExpirationDate={this.setExpirationDate}
                />
                <RecentUploads itemsListed={this.state.itemsListed}/>
            </div>
        )
    }
}

export default DonorMainPage