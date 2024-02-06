import AboutUsCard from "@/components/ui/home/AboutUsCard"
import BannerSection from "@/components/ui/home/BannerSection"
import BlogSection from "@/components/ui/home/BlogSection"
import ChurchServiceCard from "@/components/ui/home/ChurchServiceCard"
import EventCard from "@/components/ui/home/EventCard"
import LivesteamCard from "@/components/ui/home/LivesteamCard"


const Dashboard = () => {
  return (
    <main>
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