
export default function OrderEdit() {

    return (
        <section css={styles.wrap}>
            <h3>Order Editing Settings</h3>
            <p css={{ marginBottom: "16px" }}>There are two methods to configure ShipAid Order Edit in your store.</p>
            <p>The first method is to go to Online Store, select the theme you want to modify from the theme library, and click Customize. Then, in the dropdown menu at the top, choose Checkout and new customer accounts, and navigate to the Order Status or Thank You page to add the Shipaid Order Edit block.</p>
            <img src="/images/step1.gif" />
            <p>The second method is through the store's Settings by selecting Checkout. From there, you can customize the checkout where you want to integrate Shipaid Order Edit by clicking Customize. Select Order Status or Thank You page from the dropdown menu to add the extension.</p>
            <img src="/images/step2.gif" />
            <p>To activate Shipaid Order Edit, navigate to either the Thank You page or Order Status page. Then, on the left sidebar, click on Add Block and select the Shipaid Order Edit block. After adding it, you can proceed to configure the desired settings.</p>
            <img src="/images/step3.gif" />
            <p>If you have any questions about how to complete the process, please don't hesitate to contact us. We're here to assist you!</p>
        </section>
    );
}

const styles = {
    wrap: {
        display: "flex",
        flexDirection: "column",
        "& > h3": {
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "16px"
        },
        "& > img": {
            display: "block",
            marginBlock: "16px"
        },
    },
};
