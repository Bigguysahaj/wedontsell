import Link from "next/link";
import Layout from "@/components/Layout";

export default function products(){
    return (
        <Layout>
            <Link className="bg-blue-800 text-white rounded-md p-1 px-2" href={'/products/new'}>
                Add new product
            </Link>

        </Layout>
    );
}