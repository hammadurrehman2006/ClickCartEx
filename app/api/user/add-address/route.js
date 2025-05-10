import connectDb from "@/config/db";
import Address from "@/models/Address";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POAT(request) {
    try {
        const { userId } = getAuth()
        const { address } = await request.json()

        await connectDb()
        const newAddress = await Address.create({...address,userId})

        return NextResponse.json({ success: true, message: "Address added successfully", newAddress })
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message })
    }
}