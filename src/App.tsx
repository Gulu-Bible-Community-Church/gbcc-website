import { Navigate, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './layout/Layout';
import { AboutUs, ChurchMinistries, ChurchServices, Contact, Dashboard, Donation, Insights, Leadership, NotFound, UpcomingEvents, WatchSermons } from './pages';

function App() {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route  element={<Layout />}>
          <Route index element={<Navigate replace to="home"/>} />
          <Route path='home' element={<Dashboard />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="our-leadership" element={<Leadership />} />
          <Route path="church-services" element={<ChurchServices />} />
          <Route path="church-ministries" element={<ChurchMinistries />} />
          <Route path="upcoming-events" element={<UpcomingEvents />} />
          <Route path="insights" element={<Insights />} />
          <Route path="watch-sermons" element={<WatchSermons />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="give-to-gbcc" element={<Donation />} />
          
        </Route>
        {/* route not put */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
