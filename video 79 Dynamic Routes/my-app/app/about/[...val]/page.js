export default async function Page({ params }) {
    const { val } = await params;
    console.log(val);
    // fetch your blog post by its slug
    return <div>I am about page check console: {val.join('/')}</div>;
}
