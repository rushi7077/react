import {config} from "./config/config.js"
import {Client,ID,Databases,Storage,Query} from 'appwrite'

export class Service{
    client = new Client();
    Databases;
    Storage;
    
    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.Databases = new Databases(this.client)
        this.Storage = new Storage(this.client)
    }
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.Databases.createDocument(
                config.appwriteDatabaseId,
              config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error",error)
        }
    }
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.Databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error)
        }
    }
    async deletePost(slug){
        try {
            await this.Databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            );
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error)
            return false
        }
    }
    async getPost(slug){
        try {
            return await this.Databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error)
            return false
        }
    }
    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.Databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error)
            return false
        }
    }
    async uploadFile(file){
        try {
            return await this.Storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error)
            return false
        }
    }
    async deleteFile(fileId){
        try {
            await this.Storage.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error)
            return false
        }
    }
    getFilePreview(fileId){
        return this.Storage.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }
    getFileDownload(fileId){
        return this.Storage.getFileDownload(
            config.appwriteBucketId,
            fileId
        )
    }
    async getFilesView(){
        try {
            return await this.Storage.listFiles(config.appwriteBucketId)
        } catch (error) {
            console.log("Appwrite service :: getFilesView :: error", error)
            return false
        }
    }
    async getFileView(fileId){
        try {
            return await this.Storage.getFileView(
                config.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: getFileView :: error", error)
            return false
        }
    }

}

const service = new Service();

export default service;