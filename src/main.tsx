import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.css'
import { store } from './store/store.ts'

// Dependecies
// "react-dom": "^19.1.1", // main.tsx routerDom and env declarations
// "react-redux": "^9.2.0", // redux initialization in main.tsx and further redux usages

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<div>FallBack</div>}>
    <Provider store={store}>
      <App/>
    </Provider>
  </Suspense>
)
