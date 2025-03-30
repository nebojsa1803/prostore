'use server'

// import { PrismaClient } from "@prisma/client"
import { convertToJSObject } from "../utils"
import { LATEST_PRODUCTS_LIMIT } from "../constants"
import {prisma} from '@/db/prisma'
// get latest products
export async function getLatestProducts() {
 // const prisma = new PrismaClient() not needed after db/prisma.ts added

const data = await prisma.product.findMany({
 take:LATEST_PRODUCTS_LIMIT,
 orderBy:{createdAt:'desc'}
})
return convertToJSObject(data)
}


//get single product by its slug

export async function getProductBySlug(slug:string) {
 return await prisma.product.findFirst({
  where:{slug:slug}
 })
}