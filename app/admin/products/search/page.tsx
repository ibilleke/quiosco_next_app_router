import { prisma } from "@/src/lib/prisma"
import Heading from "@/components/ui/Heading"
import ProductSerchForm from "@/components/products/ProductSerchForm"
import ProductTable from "@/components/products/ProductTable"


async function searchProducts(searchTerm: string) {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: "insensitive"
            }
        },
        include: {
            category: true
        }
    })
    return products
}

export default async function SearchPage({searchParams}: {searchParams: {search: string}}) {
    const products = await searchProducts(searchParams.search)
    return (
        <>
            <Heading>Resultados de la búsqueda: {searchParams.search}</Heading>
            <div className='flex flex-col lg:flex-row lg:justify-end gap-5'>
                <ProductSerchForm />
            </div>
            {products.length 
                ? (
                    
                    <ProductTable products={products} />
                  )
                : <p className="text-center text-lg">No hay resultados</p>
            }
        </>

    )
}
