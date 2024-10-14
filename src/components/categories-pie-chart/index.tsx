import { ResponsivePie } from "@nivo/pie"
import { useMemo } from "react"
import { theme } from "../../styles/theme"
import { formatCurrency } from "../../utils/format.currency"

const apiDate = [
    {
        _id: "1",
        title: "Alimentação",
        amount: 30000,
        color: "#fff"
    },
    {
        _id: "2",
        title: "Mercado",
        amount: 40000,
        color: "#2e0cc5"
    },
    {
        _id: "3",
        title: "Ivestimentos",
        amount: 40000,
        color: "#0b0202"
    }
]

type ChartDate = {
    id: string,
    label: string,
    externalId: string,
    value: number,
    color: string
}

export function CategoriesPieChart() {
    const date = useMemo<ChartDate[]>(() => {
        const chartDate: ChartDate[] = apiDate.map((item) => ({
            id: item.title,
            label: item.title,
            externalId: item._id,
            value: item.amount,
            color: item.color
        }))
        return chartDate
    }, [])

    return (
        <ResponsivePie data={date}
            enableArcLabels={false}
            enableArcLinkLabels={false}
            colors={({ data }) => data.color}
            margin={{ top: 20 }}
            valueFormat={formatCurrency}
            theme={{
                text: {
                    fontFamily: "Lexend",
                    fontSize: 10
                },
                tooltip: {
                    container: {
                        backgroundColor: theme.colors.black,
                        padding: 16,
                        color: theme.colors.withe,
                        fontFamily: "Lexend",
                        fontSize: 12,
                        borderRadius: 4,

                    }
                }
            }}
            legends={[
                {
                    anchor: "top",
                    direction: "row",
                    justify: false,
                    translateX: 0,
                    translateY: -20,
                    itemWidth: 120,
                    itemHeight: 16,
                    itemTextColor: theme.colors.neutrol,
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 10,
                    symbolShape: "circle"
                }
            ]}
        />
    )
}