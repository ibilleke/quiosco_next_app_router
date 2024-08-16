"use client"
import { redirect } from "next/navigation"
import { toast } from "react-toastify"
import { SearchSchema } from "@/src/schema"

export default function ProductSerchForm() {
    const handleSearchForm = (formData: FormData) => {
        const data = {
            search: formData.get("search")
        }
        const result = SearchSchema.safeParse(data)
        if(!result.success) {
            return result.error.issues.forEach(issue => toast.error(issue.message))
        }
        redirect(`/admin/products/search?search=${result.data.search}`)
    }
    return (
        <form
            action={handleSearchForm}
            className="flex items-center"
        >
            <input
                type="text"
                placeholder="Buscar Producto"
                className="p-2 placeholder-gray-400 w-full"
                name="search"
            />

            <input
                type="submit"
                value={"buscar"}
                className="bg-indigo-600 p-2 uppercase text-white cursor-pointer"
            />
        </form>
    )
}
