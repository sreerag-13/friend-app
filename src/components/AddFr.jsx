import React, { useState } from 'react'
import NavFr from './NavFr'
import axios from 'axios'

const AddFr = () => {
    const [data,changedata] = useState({

        "name":"",
        "friendName":"",
        "friendNickName":"",
        "DescribeYourFriend":""

    }
    )
    const inputhandler = (event) => {
        changedata({ ...data, [event.target.name]: event.target.value })
    }
    const readvalue= () => {
        console.log(data)
        axios.post("https://friendsapi-re5a.onrender.com/adddata",data).then((response) => {
            console.log(response.data)
            if (response.data.status =="success") {
                alert("success")

            } else {
                alert("error")

            }
        }
        )
    }
    return (
        <div>
            <NavFr />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Friend  Name</label>
                            <input type="text" className="form-control" name='friendName' value={data.friendName} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Freind Nick Name </label>
                            <input type="text" className="form-control" name='friendNickName' value={data.friendNickName} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Description</label>
                            <textarea  id="" className="form-control" name='DescribeYourFriend' value={data.DescribeYourFriend} onChange={inputhandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readvalue}>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddFr