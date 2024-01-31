import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@/layout/Layout';
import { AboutUs, ChurchMinistries, ChurchService, ContactUs, Dashboard, Donation, Insights, Leadership, NotFound, UpcomingEvents, WatchSermons } from '@/pages';
import { ThemeProvider } from "@/components/theme/theme-provider"

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="give-to-gbcc" element={<Donation />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="our-leadership" element={<Leadership />} />
            <Route path="church-services" element={<ChurchService />} />
            <Route path="church-ministries" element={<ChurchMinistries />} />
            <Route path="upcoming-events" element={<UpcomingEvents />} />
            <Route path="insights" element={<Insights />} />
            <Route path="watch-sermons" element={<WatchSermons />} />
            <Route path="contact-us" element={<ContactUs />} />
            
          </Route>
          {/* route not put */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
