import MainSection from "@/components/MainSection";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function Page() {

  return (
    <div>
      <Navbar />
      <div className="flex w-screen h-[90vh]">
        <Sidebar />
        <MainSection />
      </div>
    </div>
  )
}
