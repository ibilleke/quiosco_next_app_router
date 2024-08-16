import { notFound } from "next/navigation"
import { prisma } from "@/src/lib/prisma"
import Heading from "@/components/ui/Heading"
import EditProductsForm from "@/components/products/EditProductForm"
import ProductForm from "@/components/products/ProductsForm"
import GoBackButton from "@/components/ui/GoBackButton"

async function getProductById(id: number) {
    const product = await prisma.product.findUnique({
        where: {
            id
        }
    })
    if(!product) notFound()
    return product
}

export default async function EditPage({params}: {params: {id: string}}) {
    const product = await getProductById(+params.id)
    return (
        <>
            <Heading>Editar Proyecto: {product.name}</Heading>
            <GoBackButton />
            <EditProductsForm>
                <ProductForm product={product} />
            </EditProductsForm>
        </>
    )
}
