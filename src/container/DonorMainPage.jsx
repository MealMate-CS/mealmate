import React from 'react'

class DonorMainPage extends React.Component {
    render() {
        return(
            <div>
                this is dornor main page
                Hello {this.props.userId}
            </div>
        )
    }
}

export default DonorMainPage