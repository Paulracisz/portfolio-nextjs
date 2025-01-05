import { BlogPosts } from 'app/components/posts'
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Page() {
  return (
    <>
    <SpeedInsights />
    <section>
      <h1 className="mb-8 text-9xl font-semibold text-center">
        Hi, I'm Paul.
      </h1>
      <h2 className="mb-8 text-6xl font-semibold text-center">A Software Engineer.</h2>
      <p className="mb-4 font-semibold text-center tracking-wider">
        {`I’m dedicated to building innovative, intuitive, and scalable solutions `}
        <br/>
        {`that empower users and drive impact.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
    </>
  )
}
