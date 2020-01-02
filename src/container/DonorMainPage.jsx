import React from 'react'

const DonorMainPage = (props) => {
    console.log(props)
    return(
        <div id='donor-main-page'>
            Hello {props.userId}


        </div>
    )
}
// class DonorMainPage extends React.Component {
//     render() {
//         return(
//             <div>
//                 this is dornor main page
//                 Hello {this.props.userId}
//             </div>
//         )
//     }
// }

export default DonorMainPage