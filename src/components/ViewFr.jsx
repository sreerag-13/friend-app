import React, { useEffect, useState } from 'react'
import NavFr from './NavFr'
import axios from 'axios'

const ViewFr = () => {
    const[data,changedata]=useState([])
    const fetchData=()=>{

        axios.get("https://friendsapi-re5a.onrender.com/view").then((response)=>{
            changedata(response.data)
        }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])

    return (
        <div>
            <NavFr/>

            <div ClassName="conatiner">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Freind Name</th>
                                <th scope="col">Friend Nick Name</th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                          
                          {
                            data.map(
                                (value,index)=>{
                                    return  <tr>
                                    <th scope="row">{value.name}</th>
                                    <td>{value.friendName}</td>
                                    <td>{value.friendNickName}</td>
                                    <td>{value.DescribeYourFriend}</td>
                                  </tr>
                                }
                            )

                            
                          }
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewFr