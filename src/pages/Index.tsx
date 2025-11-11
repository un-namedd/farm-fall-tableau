import heroImage from "@/assets/animal-farm-hero.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section with Generated Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground mb-6 tracking-tight">
            ANIMAL FARM
          </h1>
          <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-12 font-light italic">
            George Orwell's Allegory of Power and Betrayal
          </p>
          
          {/* Three-Part Thematic Tagline */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-hopeFaded/20 backdrop-blur-sm p-6 rounded-lg border border-hopeFaded/30 transition-all hover:scale-105" style={{ transitionDuration: '0.4s' }}>
              <h2 className="text-xl font-bold text-primary-foreground mb-2">IDEALISM CORRUPTED</h2>
              <p className="text-primary-foreground/80 text-sm">
                From Old Major's dream to Napoleon's tyranny
              </p>
            </div>
            
            <div className="bg-propaganda/20 backdrop-blur-sm p-6 rounded-lg border border-propaganda/30 transition-all hover:scale-105" style={{ transitionDuration: '0.4s' }}>
              <h2 className="text-xl font-bold text-primary-foreground mb-2">PROPAGANDA TRIUMPHANT</h2>
              <p className="text-primary-foreground/80 text-sm">
                Squealer's manipulation & historical revision
              </p>
            </div>
            
            <div className="bg-betrayal/20 backdrop-blur-sm p-6 rounded-lg border border-betrayal/30 transition-all hover:scale-105" style={{ transitionDuration: '0.4s' }}>
              <h2 className="text-xl font-bold text-primary-foreground mb-2">LOYALTY BETRAYED</h2>
              <p className="text-primary-foreground/80 text-sm">
                Boxer's sacrifice sold for a case of whisky
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conceptual Blueprint Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Visual Concept Blueprint
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Symbolic Image Concept */}
            <Card className="bg-card border-border hover:border-primary transition-all" style={{ transitionDuration: '0.4s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Central Symbolic Image</h3>
                <p className="text-card-foreground leading-relaxed mb-4">
                  The ultimate failure of the Rebellion is represented through the metamorphosis of pig into human—the blending of animal and human characteristics that marks the final betrayal.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  "The creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which."
                </p>
              </CardContent>
            </Card>

            {/* Color Palette */}
            <Card className="bg-card border-border hover:border-secondary transition-all" style={{ transitionDuration: '0.4s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-4">Dominant Color Palette</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-hopeFaded border-2 border-foreground/20" />
                    <div>
                      <p className="font-semibold text-foreground">Faded Green</p>
                      <p className="text-sm text-muted-foreground">The trampled flag of hope</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-betrayal border-2 border-foreground/20" />
                    <div>
                      <p className="font-semibold text-foreground">Deep Burgundy</p>
                      <p className="text-sm text-muted-foreground">Bloodshed and betrayal</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-corruption border-2 border-foreground/20" />
                    <div>
                      <p className="font-semibold text-foreground">Charcoal Black</p>
                      <p className="text-sm text-muted-foreground">Corruption and darkness</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-propaganda border-2 border-foreground/20" />
                    <div>
                      <p className="font-semibold text-foreground">Sickly Yellow</p>
                      <p className="text-sm text-muted-foreground">Deceit and propaganda</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Thematic Journey */}
            <Card className="bg-card border-border hover:border-accent transition-all" style={{ transitionDuration: '0.4s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-accent mb-4">Three-Part Narrative Arc</h3>
                <ol className="space-y-4 text-card-foreground">
                  <li className="flex gap-3">
                    <span className="font-bold text-hopeFaded">1.</span>
                    <div>
                      <p className="font-semibold">Idealism Corrupted</p>
                      <p className="text-sm text-muted-foreground">Old Major's vision of freedom dissolves as the pigs seize intellectual and managerial control</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-propaganda">2.</span>
                    <div>
                      <p className="font-semibold">Propaganda Triumphant</p>
                      <p className="text-sm text-muted-foreground">Squealer's manipulation turns "black into white"—the Seven Commandments rewritten to justify tyranny</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-betrayal">3.</span>
                    <div>
                      <p className="font-semibold">Loyalty Betrayed</p>
                      <p className="text-sm text-muted-foreground">Boxer's unwavering dedication—"I will work harder!" and "Napoleon is always right"—rewarded with sale to the knacker</p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Visual Justification */}
            <Card className="bg-card border-border hover:border-destructive transition-all" style={{ transitionDuration: '0.4s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-destructive mb-4">Design Justification</h3>
                <p className="text-card-foreground leading-relaxed mb-4">
                  This visual concept captures the ultimate betrayal through the metamorphosis imagery—the pigs walking on hind legs, carrying whips, and becoming indistinguishable from humans.
                </p>
                <p className="text-card-foreground leading-relaxed mb-4">
                  The color journey from hopeful green (the flag with hoof and horn) to the dark corruption of burgundy and black mirrors the ideological decay from Animalism to totalitarianism.
                </p>
                <p className="text-muted-foreground text-sm italic border-l-4 border-primary pl-4">
                  "ALL ANIMALS ARE EQUAL BUT SOME ANIMALS ARE MORE EQUAL THAN OTHERS."
                  <br />—The final, singular Commandment
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Literary Analysis Foundation */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
            Literary Foundations
          </h2>
          
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-primary mb-3">Marxist Class Conflict</h4>
                <p className="text-card-foreground leading-relaxed">
                  The pigs as Bourgeoisie control intellectual labor while the Proletariat (Boxer, Clover) perform strenuous physical work. 
                  Cultural hegemony is practiced through manipulation of ideology, Squealer's dubious statistics, and the threat of Jones's return.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-secondary mb-3">Feminist Analysis of Agency</h4>
                <p className="text-card-foreground leading-relaxed">
                  Clover—the stout motherly mare—performs hard labor but lacks political articulation to challenge the patriarchal pig leadership. 
                  The hens' collective rebellion is swiftly suppressed, resulting in nine deaths. All powerful decision-makers are exclusively male boars.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-accent mb-3">The Tragedy of Boxer</h4>
                <p className="text-card-foreground leading-relaxed">
                  Boxer's personal maxims—"I will work harder!" and "Napoleon is always right"—represent blind loyalty. 
                  Despite his strength being the foundation of the farm, he is sold to the horse slaughterer, his final reward a case of whisky for the pigs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-corruption text-primary-foreground/80 text-center">
        <p className="text-sm">
          Independent Study Project Reading Journal Analysis • George Orwell's <em>Animal Farm</em> (1945)
        </p>
      </footer>
    </div>
  );
};

export default Index;
