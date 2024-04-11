import landingImage from '@/assets/landing.png'
import appdownloadImage from '@/assets/appDownload.png'
export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-orange-600">Tuck into Takeaway Today</h1>
            <span className="text-xl">Food is just a click away!</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
                <img src={landingImage} alt="landing-img" />
                <div className="flex flex-col items-center justify-center gap-4  text-center">
                    <span className='font-bold tracking-tighter text-3xl'>Order Takeaway even faster!</span>
                    <span>Download the Dhabha app for faster ordering and personalised recommendations</span>
                    <img src={appdownloadImage} alt="download-image" />
                </div>
        </div>
    </div>
  )
}
