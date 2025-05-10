export async function GET(request) {
    try {
        const { userId } = getAuth(request)

        await connectDb()
        const addresses = await Address.find({userId})

        return NextResponse.json({ success: true, addresses })
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message })
    }
}