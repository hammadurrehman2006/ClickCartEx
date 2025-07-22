import authSeller from "@/lib/authSeller"
import { getAuth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import connectDb from "@/app/lib/connectDb"

export async function GET(request) {
    try {
        const {userId} = getAuth(request)
        const isSeller = await authSeller(userId)
        if (!isSeller){
            return NextResponse.json({success: false, message: 'You are not authorized to access this page'})
        }
        await connectDb()
        Address.length
        const orders = await Order.find({}).populate('address items.product')
        return NextResponse.json({success: true, orders})
    }
    catch (error) {
        return NextResponse.json({success: false, message: error.message})
    }
}
