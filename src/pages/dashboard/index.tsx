import AboutUsCard from "@/components/home/AboutUsCard"
import BannerSection from "@/components/home/BannerSection"
import BlogSection from "@/components/home/BlogSection"
import ChurchServiceCard from "@/components/home/ChurchServiceCard"
import EventCard from "@/components/home/EventCard"
import LivesteamCard from "@/components/home/LivesteamCard"


const Dashboard = () => {
  return (
    <main className="w-full">
      <BannerSection />
      <ChurchServiceCard />
      <AboutUsCard />
      <EventCard />
      <LivesteamCard />
      <BlogSection />
    </main>
  )
}

export default Dashboard