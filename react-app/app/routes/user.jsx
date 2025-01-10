import { AboutPageContent } from "../about/AboutPageContent";

export async function loader({params}) {
    const userId = params.userId;
    return {"userId": userId};
}
export async function action() {}

export default function User({loaderData}) {
    return <AboutPageContent />
}