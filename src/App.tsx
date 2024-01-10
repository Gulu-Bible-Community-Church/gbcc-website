import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './layout/Layout';
import { Dashboard, Donation } from './pages';

function App() {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="give-to-gbcc" element={<Donation />} />
          {/* <Route path="/about-us" element={<AboutUs />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/upcoming-events/:id" element={<SingleEvent />} />
          <Route path="/watch-sermons" element={<Sermons />} />
          <Route path="/watch-sermons/:id" element={<WatchSermon />} />
          <Route path="/insights" element={<Insights insights={insights} loading={loading}/>} />
          <Route path="/insights/:id" element={<SingleInsight />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/give-to-gbcc" element={<GiveToGBCC />} />
          <Route path="/transaction-success" element={<SuccessPage />} /> */}
        </Route>
        {/* route not put */}
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </>
  )
}

export default App
