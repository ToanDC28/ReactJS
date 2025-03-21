import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Outlet } from "react-router-dom"
import LeftSideBar from "./component/LeftSizeBar"
import FriendActivity from "./component/FriendActivity";
const MainLayout = () => {
  const isMobile = false;
  return <div className="h-screen bg-black text-white flex flex-col">
    <ResizablePanelGroup 
    direction="horizontal" className="flex flex-1 h-full overflow-hidden p-2"
    >
        {/* Left sidebar */}
        <ResizablePanel defaultSize={20} minSize={isMobile ? 0 : 10} maxSize={30}>
            <LeftSideBar />
        </ResizablePanel>
        <ResizableHandle className="w-2 bg-black rounded-lg transition-colors" />
        {/* Main content */}
        <ResizablePanel defaultSize={isMobile ? 80 : 60}>
            <Outlet />
        </ResizablePanel>
        <ResizableHandle className="w-2 bg-black rounded-lg transition-colors" />
        {/* Right sidebar */}
        <ResizablePanel defaultSize={20} minSize={isMobile ? 0 : 10} maxSize={30} collapsedSize={0}>
            <FriendActivity />
        </ResizablePanel>
    </ResizablePanelGroup>
  </div>
}

export default MainLayout