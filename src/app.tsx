import GlobalStales from "./styles/global.styles"
import { Home } from "./screens/home"
import { AppProvider } from "./hooks"

export function App() {
  return (
    <AppProvider>
      <Home />
      <GlobalStales />
    </AppProvider>
  )
}
