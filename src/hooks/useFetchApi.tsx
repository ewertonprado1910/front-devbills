import { createContext, ReactNode, useCallback, useContext, useState } from "react"

import { Category } from "../services/api-types";
import { CreateCategoryData } from "../validators/types";
import { APIServices } from "../services/api";

interface FetchApiProps {
    createCategory: (data: CreateCategoryData) => Promise<void>
    fetchCategoy: () => Promise<void>
    categories: Category[]
}

const FetchApiContext = createContext<FetchApiProps>({} as FetchApiProps)

type FetchApiProviderProps = {
    children: ReactNode
}

export function FetchAPiProvider({ children }: FetchApiProviderProps) {
    const [categories, setCategories] = useState<Category[]>([])

    const createCategory = useCallback(async (data: CreateCategoryData) => {
        await APIServices.createCategory(data)
    }, [])

    const fetchCategoy = useCallback(async () => {
        const data = await APIServices.getCategories()

        setCategories(data)
    }, [])

    return (
        <FetchApiContext.Provider
            value={{ categories, createCategory, fetchCategoy }}>
            {children}
        </FetchApiContext.Provider>
    )
}

export function useFetchAPI(): FetchApiProps {
    return useContext(FetchApiContext)

}