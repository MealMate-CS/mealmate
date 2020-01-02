import React from 'react'

class ReceiverMainPage extends React.Component {
    render() {
        return(
            <div>
                Thsi is receiver main page
                Hello {this.props.userId}
            </div>
        )
    }
}

export default ReceiverMainPage