import qrCodeImage from "./assets/qr-code.png";

function App() {
  return (
    <main className="overflow-hidden bg-white grid place-items-center desktop:px-20 desktop:min-h-screen relative">
      <Background />
      <div className="relative grid place-items-center bg-lightGrey px-8 mobile:min-h-screen  desktop:min-h-0 w-full desktop:shadow-xl desktop:py-40">
        <Card />
      </div>
    </main>
  );
}

function Card() {
  return (
    <div className="bg-white text-center text-base rounded-xl p-4 max-w-screen-mobile desktop:shadow-2xl mx-auto">
      <img className="rounded-xl mb-4" src={qrCodeImage} alt="QR Code" />
      <div className="px-4 space-y-4 mb-4">
        <h1 className="font-bold text-xl text-darkBlue">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-grayishBlue text-body">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

// I'm too lazy to draw the entire background as an SVG, so I'm using CSS
function Background() {
  return (
    <div className="hidden desktop:block absolute inset-0" aria-hidden>
      {/* Circles */}
      <div className="absolute -left-3 top-1/4 grid grid-cols-2 gap-2 translate-y-1/2">
        {Array.from({ length: 12 }, (_, i) => (
          <div className="rounded-full w-6 h-6 bg-teal-500/40" key={i} />
        ))}
      </div>
      {/* Lines */}
      <div className="absolute bottom-0 left-1/4">
        <div className="flex gap-8">
          <div className="w-2 h-20 bg-teal-500/10 rotate-[25deg]" />
          <div className="w-2 h-20 bg-teal-500/10 rotate-[25deg]" />
        </div>
      </div>
      {/* Outlined Circle */}
      <div className="absolute -bottom-1 -right-1 rounded-full w-52 h-52 border-8 border-teal-500/10" />
      {/* Triangles */}
      <svg
        className="absolute top-1/4 right-0 text-red-100 w-24 h-24"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline
          points="0,100 25,50 50,100 75,50 100,100"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
          strokeWidth={8}
        />
      </svg>
      {/* Half square unfilled */}
      <div className="absolute -top-4 right-1/4 flex items-end">
        <div className="w-4 h-20 rounded-full bg-red-100"></div>
        <div className="w-16 h-4 rounded-full bg-red-100 -ml-3"></div>
      </div>
    </div>
  );
}

export default App;
