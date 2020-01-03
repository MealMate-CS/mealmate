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
        this.uploadItem = this.uploadItem.bind(this)
        this.setExpirationDate = this.setExpirationDate.bind(this)
    }
    setItemName(event) {
        this.setState({itemName:event.target.value})
    }
    setAllergens(event) {
        let allergens = this.state.allergens.slice()
        allergens.push(event.target.value)
        this.setState({allergens})
    }
    setExpirationDate(event) {
        this.setState({expirationDate : event.target.value})
    }
    // componentDidMount() {
    //     console.log('props in donormainpage', this.props)
    //     const body = {
    //         userId : this.props.userId
    //     }
    //     fetch('/addItems')
    // }
    uploadItem() {
        this.setState({organizationName: this.props.userOrganization})
        console.log('uploadItem clicked')
        const body={
            itemName : this.state.itemName,
            itemAllergy : this.state.allergens,
            expirationDate: this.state.expirationDate,
            name : this.props.userOrganization
        }
        const body2 ={ name : this.props.userOrganization
        }
        console.log('body in uploaditem is', body)
        fetch('/producer/addItems', {
            method: 'POST',
            body: JSON.stringify(body), 
            headers : {'Content-Type' : 'application/json'}
        })
        .then(
            result => {
                fetch('/producer/producerItems', {
                    method: "POST", 
                    body: JSON.stringify(body2),
                    headers: {'Content-Type' : 'application/json'}
                })
                .then(info => info.json())
                .then(info => {
                    console.log('omggg', info)
                    let added = []
                    added.concat(info)
                    console.log('added man', added)
                    this.setState({itemsListed:JSON.stringify(info)})
                })
            }
        )
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        return(
            <div id='donor-main-page'>
                Hello {this.props.userId} From {this.props.userOrganization}
                <UploadItem itemName={this.state.itemName} allergens={this.state.allergens} expirationDate={this.state.expirationDate}
                setItemName={this.setItemName} setAllergens={this.setAllergens} setExpirationDate={this.setExpirationDate}
                uploadItem={this.uploadItem}
                />
                <RecentUploads itemsListed={this.state.itemsListed}/>
            </div>
        )
    }
}
export default DonorMainPage



