// export default function Page({ params }) {
    // throw new Error("error hai")
//     // fetch your blog post by its slug
//     let languages = ["python", "javascript", "java", "cpp", "cs"]
//     if(languages.includes(params.slug)){
//         return <div>My Post: {params.slug}</div>
//     }
//     else{
//         return <div>Post not found</div>
//     }
//     return <div>My Post: {params.slug}</div>
//   }



import { notFound } from 'next/navigation';

export default async function Page({ params }) {
        // throw new Error("error hai")
    const { slug } = await params;
    const languages = ["python", "javascript", "java", "cpp", "cs"];

    if (languages.includes(slug)) {
        return <div>My Post: {slug}</div>;
    } else {
        notFound();
    }
}
