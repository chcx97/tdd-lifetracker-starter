import axios from "axios"
// const API_BASE_URL= require("../constants")
// import {API_BASE_URL} from "../constants"


class ApiClient{
    constructor(remoteHostUrl){
        this.remoteHostUrl = remoteHostUrl;
        this.token=null;
        this.tokenName = "lifetracker_token"
    } 
    setToken(token){
        this.token = token;
        localStorage.setItem(this.tokenName, token)
    }

    async request({endpoint, method = 'GET', data = {}}){
        //utility methods has no side effects - no changing something somewhere 
        //type of request get, post, delete
        // requestBody is body
        // endpoint
        //axios.request
        const url = `${this.remoteHostUrl}/${endpoint}`

        const headers = {
            "Content-Type": "application/json"
        } 
        if (this.token){
            headers["Authorization"] = `Bearer ${this.token}`
        }

        try {
            const res = await axios({url, method, data, headers})
            return {data: res.data, error:null}
        } catch (error) {
            console.error({errorResponse: error.response})
            const message = error?.response?.data?.error?.message
            return {data:null, error: message|| String(error)}
        }
    }
    
    async login(creds){
        return await this.request({endpoint: "auth/login", method: "POST", data: creds})
        // this.request("post", {}, "auth/login")
    }
    async logoutUser() {
        this.setToken(null)
        localStorage.setItem(this.tokenName, "")
    }
    async fetchUserFromToken(){
        // this.request("get", {}, "auth/me")
        return await this.request({endpoint: "auth/me", method: "GET"})
    }
    async signup(creds){
        // this.request("post", {}, "auth/register")
        return await this.request({endpoint: "auth/register", method: "POST", data: creds})
    }

    async listNutrition(){
        return await this.request({endpoint: "nutrition", method: "GET"})
    }
    async createNutrition(nutrition){
        return await this.request({endpoint: "nutrition", method: "POST", data: nutrition})
    }

    async fetchNutrition(){
        return await this.request({endpoint:"/:nutritionId", method: "GET"})
    }
}

export default new ApiClient( "http://localhost:3001")