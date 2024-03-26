import AboutUsCard from "@/components/home/AboutUsCard"
import BannerSection from "@/components/home/BannerSection"
import BlogSection from "@/components/home/BlogSection"
import ChurchServiceCard from "@/components/home/ChurchServiceCard"


const Dashboard = () => {
  return (
    <main className="">
      <BannerSection />
      <ChurchServiceCard />
      <AboutUsCard />
      {/* <EventCard /> */}
      {/* <LivesteamCard /> */}
      <BlogSection />
    </main>
  )
}

export default Dashboard