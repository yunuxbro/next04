import MongoConnect from "@/libs/MongoConnect";
import Product from "@/models/productModel";
import { NextResponse } from "next/server";



export async function GET() {
    await MongoConnect()
    const products = await Product.find();
    return NextResponse.json({products})
}

export async function POST(request) {
    const { id, name, price, href, imageSrc, imageAlt} = await request.json();
    console.log( id, name, price, href, imageSrc, imageAlt);
    await MongoConnect();
    await Product.create({id, name, price, href, imageSrc, imageAlt});

    return NextResponse.json({message:"This is the POST Route"})
}