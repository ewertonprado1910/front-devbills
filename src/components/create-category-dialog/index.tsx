import { useCallback, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Dialog } from "../dialog";
import { Button } from "../button";
import { Title } from "../title";
import { Input } from "../input";
import { Container } from "./styles";
import { useFetchAPI } from "../../hooks/useFetchApi";
import { CreateCategoryData } from "../../validators/types";

import { theme } from "../../styles/theme";
import { createCategorySchema } from "../../validators/schemas";

export function CreateCategoryDialog() {
    const { createCategory, fetchCategoy } = useFetchAPI()
    const [open, setOpen] = useState(false)
    const { register, handleSubmit, formState } = useForm<CreateCategoryData>({
        defaultValues: {
            title: "",
            color: theme.colors.primary
        },
        resolver: zodResolver(createCategorySchema)
    })

    const handleClose = useCallback(() => {
        setOpen(false)
    }, []
    )

    const onSubmit = useCallback(
        async (data: CreateCategoryData) => {
            await createCategory(data)
            handleClose()

            await fetchCategoy()
        }, [handleClose, createCategory, fetchCategoy]
    )

    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}
            trigger={<Button>Nova Categoria</Button>}
        >
            <Container>
                <Title
                    title="Nova Categoria"
                    subtitle="Crie uma nova categoria de trasação"
                />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Input
                            label="Nome" placeholder="Nome da categoria"
                            {...register("title")}
                        />
                        {formState.errors?.title && (
                            <span style={{ color: 'red' }}>
                                {formState.errors.title?.message}
                            </span>
                        )}
                        <Input
                            label="Cor" type="color"
                            {...register("color")}
                        />
                        {formState.errors?.color && (
                            <span style={{ color: 'red' }}>
                                {formState.errors.color.message}
                            </span>
                        )}
                    </div>
                    <footer>
                        <Button onClick={handleClose} variant="outline" type="button">Cancelar</Button>
                        <Button type="submit">Cadastrar</Button>
                    </footer>
                </form>
            </Container>
        </Dialog>
    )
}