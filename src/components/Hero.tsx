import headerVideo from "../assets/media/hero-video.mp4"
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
function Hero() {
  return (
    <div className="grid md:grid-cols-2 container mx-auto my-auto items-center gap-12 md:mt-24 p-4">
    <section className="flex flex-col space-y-10 text-white">
      <div>
      <h2 className="text-yellow-1 font-Poppins md:mt-0 mt-12">A Hub for learners within marginalized communities</h2>
      <h1 className="text-5xl font-extrabold">WATOTO CODING HUB</h1>
      </div>
      <p className="text-xl max-w-xl">A charity teaching tech-skills to the kids of the Kibera slums. There is so much untapped potential in marginalized communities and to cultivate it we make technology accessible.</p>
      <button className='bg-red p-5 rounded-tl-3xl rounded-br-3xl w-44 transition ease-linear hover:-translate-y-1 hover:scale-110'>Learn More</button>
    </section>
    <Plyr source={{
         type: "video",
         sources: [
           {
             src: headerVideo,
           }
         ]
       }} 
       options={{autoplay:true,muted:false,controls:"false"}}        
       />
    </div>
  )
}

export default Hero