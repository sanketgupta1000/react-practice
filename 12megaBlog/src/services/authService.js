import { Client, Account, ID } from "appwrite";
import config from './../config/config'

class AuthService
{
    client;
    account;

    // constructor to initialize
    constructor()
    {
        try
        {
            this.client = new Client()
            this.client
                    .setEndpoint(config.appwriteUrl)
                    .setProject(config.appwriteProjectId)
    
            this.account = new Account(this.client)
        }
        catch(error)
        {
            console.log("AuthService :: constructor :: ", error)
            throw error
        }
    }

    // method to create a new user/account
    async createAccount({email, password, name})
    {
        try
        {
            // will return a user, if account created.
            // can generate errors
            const user = await this.account.create(ID.unique(), email, password, name)
            // logging in and returning session
            return this.login({email, password})
        }
        catch(error)
        {
            console.log("AuthService :: createAccount :: ", error)
            throw error
        }
    }

    // method to login
    async login({email, password})
    {
        try
        {
            return await this.account.createEmailPasswordSession(email, password)
        }
        catch(error)
        {
            console.log("AuthService :: login :: ", error)
            throw error
        }
    }

    // method to logout
    async logout()
    {
        try
        {
            return await this.account.deleteSessions()
        }
        catch(error)
        {
            console.log("AuthService :: logout :: ", error)
            throw error
        }
    }

    // method to get current user
    async getCurrentUser()
    {
        try
        {
            return await this.account.get()
        }
        catch(error)
        {
            console.log("AuthService :: getCurrentUser :: ", error)
            throw error
        }
    }

}

const authService = new AuthService()

export default authService