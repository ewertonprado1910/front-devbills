import { ErrorMessage } from "./styles";

type ErrorProps = {
    error: string
}

export function Error({ error }: ErrorProps) {
    return <ErrorMessage>{error}</ErrorMessage>
}

