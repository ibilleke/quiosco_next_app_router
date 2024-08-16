import AddProductsForm from "@/components/products/AddProductsForm";
import ProductForm from "@/components/products/ProductsForm";
import Heading from "@/components/ui/Heading";

export default function Page() {
  return (
    <>
      <Heading>Nuevo Producto</Heading>
      <AddProductsForm>
        <ProductForm />
      </AddProductsForm>
    </>
  )
}
