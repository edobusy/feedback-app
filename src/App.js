import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import { FeedbackProvider } from './context/FeedbackContext'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './components/pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <div className='container'>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </div>
                <AboutIconLink />
              </>
            }
          />
          <Route
            path='/about'
            element={
              <div className='container'>
                <AboutPage />
              </div>
            }
          />
        </Routes>
      </Router>
    </FeedbackProvider>
  )
}

export default App
