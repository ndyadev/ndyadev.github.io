import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        NDYA Consulting Services Inc.
      </h1>
      <h3>
        Affordable Software Consulting
      </h3>
      <br />
      <br />
      <p className="mb-4">
        We are a software consulting firm that specializes in providing affordable software solutions for small businesses and individuals.
      </p>
      <p className="mb-4">
        Please consider us for any of the following needs:<br />
      </p>
      <ul>
        <li>Website/App Development</li>
        <li>Software Consulting</li>
        <li>Building strategy for digital presence</li>
        <li>Guidance for building a SaaS product</li>
        <li>Website Maintenance</li>
      </ul>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
