import { InputMask } from "@react-input/mask"
import { Input } from "../../components/input"
import { Logo } from "../../components/logo"
import { Title } from "../../components/title"

import { Aside, Balance, ChartAction, ChartContainer, ChartContent, Filters, Header, InputGroup, Main, SearchTransaction, Section, TransactionGroup } from "./styles"
import { ButtonIcon } from "../../components/button-icon"
import { Card } from "../../components/card"
import { Transaciton } from "../../components/transaction"
import { CreateCategoryDialog } from "../../components/create-category-dialog"
import { CreateTransactionDialog } from "../../components/create-transaction-dialog"
import { CategoriesPieChart } from "../../components/categories-pie-chart"
import { FinancialEvolutionBar } from "../../components/financial-evolution-bar"


export function Home() {
    return (
        <>
            <Header>
                <Logo />
                <div>
                    <CreateTransactionDialog />
                    <CreateCategoryDialog />
                </div>
            </Header>
            <Main>
                <Section>
                    <Filters>
                        <Title title="Saldo" subtitle="Receitas e despesas no período" />
                        <InputGroup>
                            <InputMask
                                component={Input}
                                mask="dd/mm/aaaa"
                                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                                variant="dark" label="Inicio"
                                placeholder="dd/mm/aaaa"
                            />
                            <InputMask
                                component={Input}
                                mask="dd/mm/yyyy"
                                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                                variant="dark" label="Fim"
                                placeholder="dd/mm/aaaa"
                            />
                            <ButtonIcon />
                        </InputGroup>
                    </Filters>
                    <Balance>
                        <Card title="Saldo" amount={1000000} />
                        <Card title="Saldo" amount={1000000} variant="incomes" />
                        <Card title="Saldo" amount={1000000} variant="expenses" />
                    </Balance>
                    <ChartContainer>
                        <header>
                            <Title title="Gastos"
                                subtitle="Dispesas por categoria no periodo" />
                        </header>
                        <ChartContent>
                            <CategoriesPieChart />
                        </ChartContent>
                    </ChartContainer>
                    <ChartContainer>
                        <header>
                            <Title title="Evolução Finaceira"
                                subtitle="Saldo, Receitas e Gastos no ano" />
                            <ChartAction>
                                <InputMask
                                    component={Input}
                                    mask="aaaa"
                                    replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                                    variant="black" label="Ano"
                                    placeholder="aaaa"
                                />
                                <ButtonIcon />
                            </ChartAction>
                        </header>
                        <ChartContent>
                            <FinancialEvolutionBar />
                        </ChartContent>
                    </ChartContainer>
                </Section>
                <Aside>
                    <header>
                        <Title title="Transações" subtitle="Receitas e gastos no periodo" />
                        <SearchTransaction>
                            <Input
                                variant="black"
                                placeholder="Procurar Transação"
                            />
                            <ButtonIcon />
                        </SearchTransaction>
                    </header>
                    <TransactionGroup>
                        <Transaciton
                            id={1}
                            title="Mercado"
                            date="26/07/1993"
                            amount={20000}
                            category={{ title: "Alimentação", color: "#ed16a5" }}
                        />
                        <Transaciton
                            id={1}
                            title="Mercado"
                            date="26/07/1993"
                            amount={20000}
                            category={{ title: "Mercado", color: "#ed16a5" }}
                        />
                    </TransactionGroup>
                </Aside>
            </Main>
        </>

    )
}