import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.css'
import { store } from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<div>FallBack</div>}>
    <Provider store={store}>
      <App/>
    </Provider>
  </Suspense>
)
