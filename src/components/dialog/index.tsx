import { ReactNode } from "react";
import { Root, Trigger, Portal, Overlay, Content, Title } from "./styles";


type DialogProps = {
    children: ReactNode,
    trigger: JSX.Element,
    open?: boolean,
    onOpenChange?: (open: boolean) => void,

}

export function Dialog({ children, trigger, open, onOpenChange }: DialogProps) {
    return (
        <Root open={open} onOpenChange={onOpenChange}>
            <Trigger>{trigger}</Trigger>
            <Portal>
                <Overlay />
                <Content>{children}</Content>
                <Title/>
            </Portal>
        </Root>
    )
}