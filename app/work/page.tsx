export default function Work() {
  const projects = [
    {
      title: "Sonic Horizon (Music)",
      description: "A genre-defying album blending Afro-house, grime, and electronic textures. Garnered over 2M streams worldwide and was featured in leading underground playlists."
    },
    {
      title: "Digital Sunset (Media)",
      description: "Multimedia visual podcast exploring urban culture and technology. Reached 50k+ viewers per episode and inspired active discussion across social channels."
    },
    {
      title: "Andri's Glide (Writing)",
      description: "Narrative short story highlighting social issues in London estates, recognized by community initiatives and youth programs."
    },
    {
      title: "SignalFlow (Tech/Workshop)",
      description: "A live tech-music integration project demonstrating real-time modulation and interactive audiovisual systems in collaboration with emerging creatives."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-start px-8 py-24">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-bold mb-12 tracking-tight">Work</h1>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-200">Signature Projects</h2>
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div key={idx} className="border-l-2 border-gray-700 pl-6 py-4">
                <h3 className="text-xl font-semibold text-gray-100 mb-3">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-200">Evolution</h2>
          <p className="text-gray-400 leading-relaxed">
            I began in media, exploring visual and auditory storytelling. Music followed, turning sound into a medium of influence. From there, I ventured into conceptual systems and invention, bridging creative expression with technological architecture. Today, I operate at the nexus of culture, media, music, and advanced innovation.
          </p>
        </div>
      </div>
    </main>
  )
}
