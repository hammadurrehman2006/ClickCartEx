import connectDb from "@/config/db";
import User from "@/models/User";
import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "jazbacart" });

export const syncUserCreation = inngest.createFunction(
    {
        id: "sync-user-from-clerk"
    },
    {
        event:"clerk/user.created"
    },
    async ({event}) =>{
       const {id, first_name, last_name, email_addresses, image_url} = event.data
       const userData = {
        _id: id,
        email: email_addresses[0].email_address,
        name: first_name + " " + last_name,
        imageUrl : image_url
       }
       await connectDb()
       await User.create(userData)
    }
)
export const syncUserUpdation = inngest.createFunction(
    {
        id: "update-user-from-clerk"
    },
    {
        event:"clerk/user.updated"
    },
    async ({event}) =>{
       const {id} = event.data
       await connectDb()
       await User.findByIdAndDelete(id, userData)
    }
)
export const syncUserDeletion = inngest.createFunction(
    {
        id: "delete-user-from-clerk"
    },
    {
        event:"clerk/user.deleted"
    },
    async ({event}) =>{
       const {id, first_name, last_name, email_addresses, image_url} = event.data
       const userData = {
        _id: id,
        email: email_addresses[0].email_address,
        name: first_name + " " + last_name,
        imageUrl : image_url
       }
       await connectDb()
       await User.findByIdAndUpdate(id, userData)
    }
)

// for orders
export const createUserOrder = inngest.createFunction(
    {
        id: "create-order",
        batchEvents: {
            maxBatchSize: 25,
            timeout: '5s'
        }
    },
    {event: "order/created"},
    async ({events}) => {
        const orders = events.map((event) => {
            const {userId, amount, address, date, items} = event.data
            return {
                userId : userId,
                amount : amount,
                address : address,
                date : date,
                items : items
            }
        })
        await connectDb()
        await Order.insertMany(orders)
        return {success: true, processed: orders.length}
    }
)