import { Client, Databases, ID, Query, Storage } from "appwrite";
import config from './../config/config'

// service for crud on posts and files
class BlogService
{

    client;
    databases;
    storage;

    constructor()
    {
        try
        {
            this.client = new Client()
            this.client
                    .setEndpoint(config.appwriteUrl)
                    .setProject(config.appwriteProjectId)
    
            this.databases = new Databases(this.client)
    
            this.storage = new Storage(this.client)
        }
        catch(error)
        {
            console.log("BlogService :: constructor :: ", error);
        }
    }

    // method to create a post
    async createPost({title, slug, content, featuredImage, status, userId})
    {
        try
        {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                // slug as document id
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }
        catch(error)
        {
            console.log("BlogService :: createPost :: ", error)
        }
        // return false on error
        return false
    }

    // method to update post
    async updatePost(slug, {title, content, featuredImage, status})
    {
        try
        {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
            
        }
        catch(error)
        {
            console.log("BlogService :: updatePost :: ", error)
        }
        return false
    }

    // method to delete a post
    async deletePost(slug)
    {
        try
        {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )

            return true
        }
        catch(error)
        {
            console.log("BlogService :: deletePost :: ", error)
        }
        return false
    }

    // method to get a post
    async getPost(slug)
    {
        try
        {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        }
        catch(error)
        {
            console.log("BlogService :: getPost :: ", error)
        }
    }

    // method to get multiple posts, by default all active posts
    async getPosts(queries = [Query.equal("status", "active")])
    {
        try
        {
            return await this.databases.listDocuments(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            queries
            )
        }
        catch(error)
        {
            console.log("BlogService :: getPosts :: ", error)
        }
        return false
    }

    // method to upload a new file
    async uploadFile(file)
    {
        try
        {
            return await this.storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        }
        catch(error)
        {
            console.log("BlogService :: uploadFile :: ", error)
        }
        return false
    }

    // method to get file for preview
    getFilePreview(fileId)
    {
        try
        {
            return this.storage.getFilePreview(
                config.appwriteBucketId,
                fileId
            )
        }
        catch(error)
        {
            console.log("BlogService :: getFilePreview :: ", error)
        }
        return false
    }

    // method to get file for view
    getFileView(fileId)
    {
        try
        {
            return this.storage.getFileView(
                config.appwriteBucketId,
                fileId
            )
        }
        catch(error)
        {
            console.log("BlogService :: getFileView :: ", error)
        }
        return false
    }

    // method to delete a file
    async deleteFile(fileId)
    {
        try
        {
            await this.storage.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true
        }
        catch(error)
        {
            console.log("BlogService :: deleteFile :: ", error)
        }
        return false
    }

}

const blogService = new BlogService()

export default blogService