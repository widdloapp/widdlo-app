import SidebarLayout from "./components/layout/sidebar-layout/sidebar-layout.jsx";
import {Route, Routes, useLocation} from "react-router-dom";
import MainLayout from "./components/layout/main-layout/main-layout.jsx";
import HomeSidebar from "./components/ui/pages/home/sidebar/home-sidebar.jsx";
import VideoView from "./components/ui/videos/video-view/video-view";
import NotFound from "./components/ui/general/error/not-found/not-found";
import StreamLayout from "./components/layout/stream-layout/stream-layout";
import StreamView from "./components/ui/pages/channel/stream/stream-view/stream-view";
import ChannelSidebar from "./components/ui/pages/channel/channel-sidebar/channel-sidebar.jsx";
import MainChat from "./components/ui/pages/chat/main-chat/main-chat";
import {api} from "./shared/utils/token/api.js";
import {createContext, useEffect, useState} from "react";
import LiveChat from "./components/ui/pages/channel/stream/live-chat/live-chat";
import {getStoredToken} from "./shared/utils/token/token.js";
import VideoUpload from "./components/ui/main/account/studio/studio-header/pages/video-upload/video-upload";
import VideoManager from "./components/ui/main/account/studio/studio-header/pages/video-manager/video-manager";
import Loading from "./components/ui/general/skeleton/loading/loading";
import HomeDiscovery from "./components/ui/pages/home/home-discovery/home-discovery";
import ChannelView from "./components/ui/pages/channel/channel-view/channel-view";
import AccountRequired from "./components/ui/general/error/account-required/account-required";
import StreamSettings from "./components/ui/main/account/studio/studio-header/pages/stream-settings/stream-settings";
import PageHeader from "./components/ui/main/page-header/page-header";
import ChannelSettings
    from "./components/ui/main/account/studio/studio-header/pages/channel-settings/channel-settings.jsx";
import ProgressBar from "./components/ui/general/skeleton/progress-bar/progress-bar";
import WiddloOne from "./components/ui/main/account/studio/studio-header/pages/special/one/widdlo-one";
import ChannelPosts from "./components/ui/main/account/studio/studio-header/pages/posts/channel-posts/channel-posts";

export const AccountContext = createContext();

function App() {
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState({});

    const root = document.documentElement;

    useEffect(() => {
        api('GET', 'user').then(res => {
            if (getStoredToken()) {
                setData(res);

                root.style.setProperty('--theme-schema-main', '#818ee7');
            }
            setLoaded(true);
        })
    }, []);

    if (loaded) {
        if (data) {
            return (
                <div className="App">
                    <AccountContext.Provider value={data}>
                        <ProgressBar/>
                        {/*<TransitionGroup>
                                            <CSSTransition key={location.pathname} classNames="page" timeout={1200}>*/}
                        <Routes>
                            <Route path="/" element={<HomeDiscovery order='featured'/>}/>
                            <Route path="/feed/latest" element={<HomeDiscovery order='latest'/>}/>
                            <Route path="/feed/older" element={<HomeDiscovery order='older'/>}/>
                            <Route path="/feed/popular" element={<HomeDiscovery order='popular'/>}/>

                            <Route path="/watch/:id" element={<MainLayout content={<VideoView/>}/>}/>
                            <Route path="/watch/:id/:comment" element={<MainLayout content={<VideoView/>}/>}/>

                            <Route path="/channel/:id" element={<ChannelView/>}/>
                            <Route path="/channel/:id/feed/latest" element={<ChannelView order='latest'/>}/>
                            <Route path="/channel/:id/feed/older" element={<ChannelView order='older'/>}/>
                            <Route path="/channel/:id/feed/popular" element={<ChannelView order='popular'/>}/>

                            <Route path="/channel/:id/posts" element={<ChannelPosts/>}/>
                            <Route path="/post/:id/:comment" element={<ChannelPosts/>}/>

                            <Route path="/channel/:id/:chat"
                                   element={<SidebarLayout sidebar={<ChannelSidebar/>} content={<MainChat/>}/>}/>
                            <Route path="/channel/:id/stream"
                                   element={<StreamLayout sidebar={<LiveChat/>} content={<StreamView/>}/>}/>
                            <Route path="/studio/manage"
                                   element={<SidebarLayout sidebar={<HomeSidebar/>} content={<PageHeader
                                       title="Gestionar vídeos" content={<VideoManager/>}/>}/>}/>
                            <Route path="/studio/upload"
                                   element={<SidebarLayout sidebar={<HomeSidebar/>} content={<PageHeader
                                       title="Publicar vídeo" content={<VideoUpload/>}/>}/>}/>
                            <Route path="/studio/streams"
                                   element={<SidebarLayout sidebar={<HomeSidebar/>} content={<PageHeader
                                       title="Emisiones en directo" content={<StreamSettings/>}/>}/>}/>
                            <Route path="/studio/profile"
                                   element={<SidebarLayout sidebar={<HomeSidebar/>} content={<PageHeader
                                       title="Gestionar perfil" content={<ChannelSettings/>}/>}/>}/>
                            <Route path="*" element={<MainLayout content={<NotFound/>}/>}/>

                            <Route path="/one"
                                   element={<SidebarLayout sidebar={<HomeSidebar/>} content={<WiddloOne/>}/>}/>
                        </Routes>
                        {/*</CSSTransition>
                                        </TransitionGroup>*/}
                    </AccountContext.Provider>
                </div>
            )
        }
    } else {
        return (
            <Loading/>
        );

    }
}

export default App;