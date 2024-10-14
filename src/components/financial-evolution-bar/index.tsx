import { ResponsiveBar } from "@nivo/bar"
import { useMemo } from "react"
import dayjs from "dayjs"
import ptBRLocale from "dayjs/locale/pt-br"
import { theme } from "../../styles/theme"
import { formatCurrency } from "../../utils/format.currency"

dayjs.locale(ptBRLocale)

const apiDate = [
    {
        _id: {
            year: 2023,
            month: 1,

        },
        balance: 68900,
        incomes: 76343,
        expenses: 48399,
    },
    {
        _id: {
            year: 2023,
            month: 2,

        },
        balance: 68900,
        incomes: 76343,
        expenses: 48399,
    },
    {
        _id: {
            year: 2023,
            month: 3,

        },
        balance: 68900,
        incomes: 76343,
        expenses: 48399,
    }
]

type ChartDate = {
    month: string,
    Saldo: number,
    Receitas: number,
    Gastos: number
}

export function FinancialEvolutionBar() {
    const date = useMemo<ChartDate[]>(() => {
        const chartDate: ChartDate[] = apiDate.map((item) => ({
            month: dayjs(`${item._id.year}-${item._id.month}-01`).format("MMM"),
            Saldo: item.balance,
            Receitas: item.incomes,
            Gastos: item.expenses,
        }))
        return chartDate
    }, [])

    return (
        <ResponsiveBar data={date}
            keys={["Saldo", "Receitas", "Gastos"]}
            colors={[theme.colors.info, theme.colors.primary, theme.colors.error]}
            indexBy={"month"}
            groupMode="grouped"
            enableLabel={false}
            enableGridY={false}
            padding={0.2}
            axisLeft={{
                tickSize: 0,
                format: formatCurrency,
            }}
            margin={{ left: 80, bottom: 28 }}
            theme={{
                text: {
                    fontFamily: "Lexend",
                    fontSize: 10,
                },
                axis: {
                    ticks: {
                        text: {
                            fill: theme.colors.withe,
                        }
                    }
                },
                tooltip: {
                    container: {
                        backgroundColor: theme.colors.black,
                        padding: 16,
                        color: theme.colors.withe,
                        fontFamily: "Lexend",
                        fontSize: 12,
                        borderRadius: 4
                    }
                }
            }}
            valueFormat={formatCurrency}

        />
    )
}