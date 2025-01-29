
import { authenticate } from "../shopify.server";

export async function loader({ request }) {
    try {
        const {session} = await authenticate.public.appProxy(request);
        return {session}
    } catch (error) {
        return { error: error.message };
    }
}
