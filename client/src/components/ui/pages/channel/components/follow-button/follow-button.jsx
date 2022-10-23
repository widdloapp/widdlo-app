export default function FollowButton(props) {

    return (
        <OrderContext.Provider value={props.order}>
            <SidebarLayout sidebar={<ChannelSidebar />} content={<MainChannel />} />
        </OrderContext.Provider>
    );
}