import axios from "axios"
import { API_BASE_URL } from "../constants"


class ApiClient{
    constructor(remoteHostUrl){
        this.remoteHostUrl = remoteHostUrl;
        this.token=null;
    } 
    setToken(token){
        this.token = token;
    }

    request(type, requestBody, endpoint){
        //utility methods has no side effects - no changing something somewhere 
        //type of request get, post, delete
        // requestBody is body
        // endpoint
        
        //axios.request
    }
    login(){
        this.request("post", {}, "auth/login")
    }
    signup(){
        this.request("post", {}, "auth/register")
    }
    fetchUserFromToken(){
        this.request("post", {}, "auth/me")
    }
    

}

module.exports = new ApiClient(API_BASE_URL)