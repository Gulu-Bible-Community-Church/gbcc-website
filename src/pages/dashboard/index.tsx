import AboutUsCard from "@/components/home/AboutUsCard"
import BannerSection from "@/components/home/BannerSection"
import BlogSection from "@/components/home/BlogSection"
import ChurchServiceCard from "@/components/home/ChurchServiceCard"
import EventCard from "@/components/home/EventCard"
import LivesteamCard from "@/components/home/LivesteamCard"
import { Helmet } from "react-helmet-async"


const Dashboard = () => {

  return (
    <>
      <Helmet>
        <title>GBCC -- WELCOME</title>
        <meta name="description" content="Our mandate is to encourage and empower each person to discover, develop and deploy their uniqueness to the glory of God and benefit of mankind" />
        <link rel="canonical" href="/home" />
      </Helmet>
      <main className="mx-0">
        <BannerSection />
        <ChurchServiceCard />
        <AboutUsCard />
        <EventCard />
        <LivesteamCard />
        <BlogSection />
      </main>
    </>
  )
}

export default Dashboard