import heroImage from "@/assets/animal-farm-hero.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

          <p className="text-primary-foreground/70 text-sm">Independent Study Project Reading Journal</p>
        </div>
      </section>

      {/* Entry 1: Reading Schedule */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Entry 1</span>
            <h2 className="text-4xl font-bold text-foreground mt-2 mb-4">
              Reading Schedule
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A ten-week journey through Orwell's masterpiece, dedicating one chapter per week for thoughtful engagement
            </p>
          </div>

          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Week</th>
                      <th className="px-6 py-4 text-left font-semibold">Chapters to Read</th>
                      <th className="px-6 py-4 text-left font-semibold">Key Events/Focus</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { week: 1, chapter: "Chapter One", events: "Old Major's dream and speech" },
                      { week: 2, chapter: "Chapter Two", events: "Old Major's death, rise of Animalism, and the Rebellion" },
                      { week: 3, chapter: "Chapter Three", events: "The establishment of the Seven Commandments, \"Four legs good, two legs bad,\" and the pigs' initial privileges (milk)" },
                      { week: 4, chapter: "Chapter Four", events: "The spread of news and the Battle of the Cowshed" },
                      { week: 5, chapter: "Chapter Five", events: "Mollie's disappearance, disputes between Snowball and Napoleon, and Snowball's expulsion" },
                      { week: 6, chapter: "Chapter Six", events: "Building the windmill, engaging in trade, and the pigs moving into the farmhouse (Commandment modification)" },
                      { week: 7, chapter: "Chapter Seven", events: "The bitter winter, food shortages, executions, and the abolition of \"Beasts of England\"" },
                      { week: 8, chapter: "Chapter Eight", events: "Napoleon's increasing power (titles, security), the sale of timber, and the Battle of the Windmill" },
                      { week: 9, chapter: "Chapter Nine", events: "Boxer's injury, his betrayal/sale to the knacker, and the pigs buying whisky" },
                      { week: 10, chapter: "Chapter Ten", events: "Years pass, final transformation of the pigs, and the new singular commandment" },
                    ].map((row) => (
                      <tr key={row.week} className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-primary">{row.week}</td>
                        <td className="px-6 py-4 font-medium text-foreground">{row.chapter}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.events}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Entry 2: Reflection */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Entry 2</span>
            <h2 className="text-4xl font-bold text-foreground mt-2 mb-4">
              Why Animal Farm?
            </h2>
          </div>

          <Card className="bg-card border-border border-l-4 border-l-primary">
            <CardContent className="p-8">
              <p className="text-card-foreground leading-relaxed text-lg">
                <em>Animal Farm</em> is an essential choice because it provides a powerful examination of how idealism is corrupted by power. 
                The initial desire for <strong className="text-primary">freedom and equality</strong> quickly dissolves as the pigs seize control, 
                demonstrating how easily revolutionary movements can turn into oppression, where one tyrant simply replaces another. 
                The novel's use of <strong className="text-propaganda">propaganda and manipulation</strong> offers crucial insight into 
                social control and the fragility of memory and truth, making it a compelling study of political dynamics.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Entry 3: Character Development */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Entry 3</span>
            <h2 className="text-4xl font-bold text-foreground mt-2 mb-4">
              Character Development
            </h2>
            <p className="text-muted-foreground">The evolution of power and loyalty across three acts</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* First Third */}
            <Card className="bg-card border-border hover:border-hopeFaded transition-all">
              <CardHeader className="bg-hopeFaded/10">
                <CardTitle className="text-hopeFaded">First Third: Origins</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">The seeds of revolution</p>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-card-foreground leading-relaxed mb-4">
                  In the beginning, the leaders, Napoleon and Snowball, are established as highly intelligent pigs who elaborate Old Major's teachings into <strong>Animalism</strong>.
                </p>
                <p className="text-card-foreground leading-relaxed mb-4">
                  Snowball is <strong className="text-hopeFaded">more vivacious, quicker in speech, and more inventive</strong>. Napoleon, a large Berkshire boar, is fierce-looking, not much of a talker, but has a reputation for <strong>getting his own way</strong>.
                </p>
                <p className="text-card-foreground leading-relaxed">
                  Boxer is introduced as enormous, immensely strong, and universally respected for his <strong>steadiness of character and tremendous powers of work</strong>. His personal motto is immediately adopted: <em className="text-primary font-semibold">"I will work harder!"</em>
                </p>
              </CardContent>
            </Card>

            {/* Second Third */}
            <Card className="bg-card border-border hover:border-propaganda transition-all">
              <CardHeader className="bg-propaganda/10">
                <CardTitle className="text-propaganda">Second Third: Transformation</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Power consolidates</p>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-card-foreground leading-relaxed mb-4">
                  Napoleon reveals his ruthless strategy by <strong className="text-destructive">expelling Snowball</strong> using the nine puppies he had secretly reared. 
                  He centralizes power, ending Sunday Meetings and taking exclusive control of decisions through a pig committee.
                </p>
                <p className="text-card-foreground leading-relaxed mb-4">
                  Boxer, despite being "vaguely troubled" by Snowball's expulsion, adopts a second maxim, demonstrating blind loyalty: 
                  <em className="text-propaganda font-semibold">"Napoleon is always right"</em>.
                </p>
                <p className="text-card-foreground leading-relaxed">
                  The pigs cement their status as the privileged class, reserving apples and milk, and moving into the farmhouse.
                </p>
              </CardContent>
            </Card>

            {/* Final Third */}
            <Card className="bg-card border-border hover:border-betrayal transition-all">
              <CardHeader className="bg-betrayal/10">
                <CardTitle className="text-betrayal">Final Third: Betrayal</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Complete corruption</p>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-card-foreground leading-relaxed mb-4">
                  Napoleon completes his transformation into a full tyrant, becoming increasingly isolated, attended by dogs and a black cockerel. 
                  He awards himself military decorations, and the farmhouse is filled with luxury, including whisky.
                </p>
                <p className="text-card-foreground leading-relaxed mb-4">
                  Boxer, having worked beyond his strength, suffers a lung injury. Instead of receiving the retirement he dreamed of, 
                  Boxer is sold to the <strong className="text-destructive">horse slaughterer and glue boiler</strong>.
                </p>
                <p className="text-card-foreground leading-relaxed">
                  Napoleon achieves the ultimate betrayal of Animalism when he appears <strong className="text-betrayal">walking on his hind legs</strong> carrying a whip.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Entry 4: Biographical and Historical Context */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Entry 4</span>
            <h2 className="text-4xl font-bold text-foreground mt-2 mb-4">
              Biographical & Historical Context
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary">The Author</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground leading-relaxed">
                  Written by <strong>George Orwell</strong> and first published in <strong>1945</strong>, at the end of World War II. 
                  The text contains political and social commentary reflecting anxieties about <strong>tyranny</strong> and the abuse of power, 
                  framed through the concept of <strong>Rebellion</strong>.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-secondary">The Setting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground leading-relaxed">
                  The novel begins on <strong>Manor Farm</strong> under the ownership of Mr. Jones, who is often drunk and neglectful. 
                  Following the successful Rebellion, the farm is renamed <strong>Animal Farm</strong>. 
                  The animals aim to establish a society free from human tyranny where they are <strong>rich and free</strong>.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border mt-6">
            <CardContent className="p-8">
              <p className="text-card-foreground leading-relaxed">
                The internal conflict immediately begins, symbolized by the ideological clash between Snowball's invention (the windmill) 
                and Napoleon's focus on <strong className="text-propaganda">control and survival</strong>. 
                The society shifts from a revolutionary state to one ruled by pigs who increasingly adopt the <strong className="text-betrayal">vices of Man</strong>.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Entry 5: Literary Criticism */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Entry 5</span>
            <h2 className="text-4xl font-bold text-foreground mt-2 mb-4">
              Literary Criticism Analysis
            </h2>
          </div>

          <div className="space-y-6">
            {/* Marxist Analysis */}
            <Card className="bg-card border-border border-l-4 border-l-destructive">
              <CardHeader>
                <CardTitle className="text-2xl text-destructive">Marxist Analysis: Class Conflict</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-card-foreground leading-relaxed mb-4">
                  The novel strongly reflects Marxist ideas of <strong>class conflict</strong>. The pigs, acting as the <strong className="text-destructive">Bourgeoisie</strong> (ruling class), 
                  quickly take control over the intellectual and managerial aspects of the farm, directing and supervising work rather than performing physical labor.
                </p>
                <p className="text-card-foreground leading-relaxed mb-4">
                  The <strong className="text-primary">Proletariat</strong> (working class), exemplified by Boxer and Clover, perform the strenuous work necessary for the farm to thrive.
                </p>
                <p className="text-card-foreground leading-relaxed">
                  Napoleon and Squealer practice <strong className="text-propaganda">cultural hegemony</strong> by constantly manipulating information (Squealer's figures), 
                  controlling ideology (Animalism, the Commandments), and using fear (the threat of Jones's return) to ensure the working animals remain subservient and accept the status quo.
                </p>
              </CardContent>
            </Card>

            {/* Feminist Analysis */}
            <Card className="bg-card border-border border-l-4 border-l-secondary">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Feminist Analysis: Gender & Agency</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-card-foreground leading-relaxed mb-4">
                  Applying the Feminist lens involves examining the representation and <strong>agency of female characters</strong>. 
                  Clover is portrayed as a <strong className="text-secondary">stout motherly mare</strong> who performs hard labor and acts as a conscience, 
                  yet she lacks the political ability to articulate her thoughts or challenge the patriarchy (the pig leadership).
                </p>
                <p className="text-card-foreground leading-relaxed mb-4">
                  Mollie, the white mare, is driven by vanity and comfort (sugar and ribbons, which Snowball calls the "badge of slavery") 
                  and ultimately deserts the farm for human attention.
                </p>
                <p className="text-card-foreground leading-relaxed">
                  The only female act of collective rebellion—by the hens refusing to surrender their eggs—was <strong className="text-destructive">swiftly and ruthlessly</strong> suppressed by Napoleon, 
                  leading to nine deaths. The powerful pigs who control the farm policy (Major, Snowball, Napoleon, Squealer) are <strong>exclusively male boars</strong>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Entry 6: Text to Text Connections */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Entry 6</span>
            <h2 className="text-4xl font-bold text-foreground mt-2 mb-4">
              Text to Text Connections
            </h2>
            <p className="text-muted-foreground">Thematic parallels to other totalitarian narratives</p>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <p className="text-card-foreground leading-relaxed mb-4">
                The events on Animal Farm, where revolutionary ideals are betrayed and history is constantly rewritten by those in power, 
                bear striking thematic resemblances to other texts depicting totalitarian regimes or compromised revolutions.
              </p>
              <p className="text-card-foreground leading-relaxed mb-4">
                The use of fear and violence to maintain control, such as the <strong className="text-destructive">sudden, terrifying executions</strong> of confessing animals by Napoleon's dogs, 
                parallels scenes found in fiction and media that explore political purges.
              </p>
              <p className="text-card-foreground leading-relaxed mb-4">
                Furthermore, Squealer's role as the mouthpiece for Napoleon, capable of convincing the animals that "black into white" 
                and changing the historical record—like denying Snowball's bravery at the Battle of the Cowshed or altering the Commandments—connects 
                strongly to other texts that depict organized, pervasive <strong className="text-propaganda">state propaganda</strong> intended to blur reality.
              </p>
              <p className="text-card-foreground leading-relaxed">
                The transformation of the pigs, adopting human vices and attire, reflects how power often corrupts and leads to the very behavior the revolution sought to overthrow.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Entry 7: Media Connections */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Entry 7</span>
            <h2 className="text-4xl font-bold text-foreground mt-2 mb-4">
              Media Connections
            </h2>
            <p className="text-muted-foreground">Contemporary parallels to the novel's themes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Infographic */}
            <Card className="bg-card border-border hover:border-primary transition-all">
              <CardHeader className="bg-primary/10">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <CardTitle className="text-primary">Infographic</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Global Income Inequality</p>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-card-foreground leading-relaxed">
                  An infographic illustrating <strong>Global Income Inequality or Wealth Concentration</strong> connects to Squealer's constant use of dubious statistics 
                  to "prove" the animals are better off, despite visible evidence of hunger and hardship. The visual data reflects the growing disparity 
                  between the pigs' rations (beer, milk, apples, sugar) and the severe reductions imposed on the other working animals.
                </p>
              </CardContent>
            </Card>

            {/* Article */}
            <Card className="bg-card border-border hover:border-propaganda transition-all">
              <CardHeader className="bg-propaganda/10">
                <div className="w-12 h-12 bg-propaganda rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <CardTitle className="text-propaganda">Article</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Historical Revisionism</p>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-card-foreground leading-relaxed">
                  A news article discussing <strong>historical revisionism or the deliberate manipulation of national memory</strong> directly relates 
                  to Napoleon and Squealer consistently rewriting the past, particularly Snowball's role, shifting him from a hero of the Battle of the Cowshed 
                  to a secret agent of Jones "from the very start".
                </p>
              </CardContent>
            </Card>

            {/* Video/Podcast */}
            <Card className="bg-card border-border hover:border-betrayal transition-all">
              <CardHeader className="bg-betrayal/10">
                <div className="w-12 h-12 bg-betrayal rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle className="text-betrayal">Video or Podcast</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Cult of Personality</p>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-card-foreground leading-relaxed">
                  A video or podcast analyzing the <strong>"Cult of Personality"</strong> in political leadership connects to Napoleon's manufactured elevation 
                  through titles (e.g., "Father of All Animals," "Leader, Comrade Napoleon"), his personal anthem composed by Minimus, 
                  and the mandated <strong>Spontaneous Demonstrations</strong>, all designed to glorify Napoleon and inspire unquestioning obedience from the working animals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Entry 8: Sentence Starter - Benjamin */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Entry 8</span>
            <h2 className="text-4xl font-bold text-foreground mt-2 mb-4">
              I Wonder What This Means...
            </h2>
            <p className="text-muted-foreground">The enigma of Benjamin the donkey</p>
          </div>

          <Card className="bg-card border-border border-l-4 border-l-muted">
            <CardContent className="p-8">
              <p className="text-card-foreground leading-relaxed mb-4">
                I wonder what the longevity and silence of <strong className="text-muted-foreground">Benjamin the donkey</strong> truly means. 
                Benjamin is literate and understands the changes to the Commandments, but he rarely speaks, offering only the cynical remark that 
                <em className="text-muted-foreground">"Donkeys live a long time. None of you has ever seen a dead donkey"</em>.
              </p>
              <p className="text-card-foreground leading-relaxed mb-4">
                His wisdom seems to translate into a fatalistic nihilism, refusing to fight against the oppression of the pigs, though he is devoted to Boxer. 
                He breaks his silence only to reveal the horrific truth that Boxer is being sent to the knacker.
              </p>
              <p className="text-card-foreground leading-relaxed">
                His inaction, despite his intelligence, raises the question of whether <strong className="text-foreground">knowing the truth but refusing to act makes one complicit in the oppression</strong>.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Entry 9: Surprise - Walking on Hind Legs */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Entry 9</span>
            <h2 className="text-4xl font-bold text-foreground mt-2 mb-4">
              What Came as a Surprise?
            </h2>
            <p className="text-muted-foreground">The shocking moment of final transformation</p>
          </div>

          <Card className="bg-card border-border border-l-4 border-l-destructive">
            <CardContent className="p-8">
              <p className="text-card-foreground leading-relaxed mb-4">
                The single most surprising moment in the novel is when the pigs, led by Squealer, suddenly begin <strong className="text-destructive">walking on their hind legs</strong>. 
                This act directly violates the core principle of Animalism, <em className="text-primary font-semibold">"Whatever goes upon two legs is an enemy"</em>. 
                The terror of the other animals is palpable.
              </p>
              <p className="text-card-foreground leading-relaxed mb-4">
                The surprise is compounded by the sheep, who had been secretly trained by Squealer, immediately changing their bleating slogan from 
                <em>"Four legs good, two legs bad"</em> to <strong className="text-propaganda">"Four legs good, two legs better!"</strong>
              </p>
              <p className="text-card-foreground leading-relaxed">
                This sudden, final reversal marks the moment the pigs completely reject the revolutionary principles and assume the identity of their former human masters, 
                culminating in Napoleon carrying a whip.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Entry 10: Letter to Boxer */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Entry 10</span>
            <h2 className="text-4xl font-bold text-foreground mt-2 mb-4">
              A Letter to a Character
            </h2>
            <p className="text-muted-foreground">To the noble Boxer</p>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="mb-6">
                <p className="text-card-foreground font-semibold mb-2">Dear Boxer,</p>
              </div>
              
              <div className="space-y-4 text-card-foreground leading-relaxed pl-4 border-l-4 border-primary">
                <p>
                  I write to you from the field, observing the spot where the windmill was finally completed, though it is now used for profit rather than power. 
                  I wish I could have reached you sooner on that day when the van came.
                </p>
                <p>
                  Your constant unwavering dedication—<strong className="text-primary">"I will work harder!"</strong> and <strong className="text-propaganda">"Napoleon is always right"</strong>—was 
                  truly admirable, but it was tragically misplaced. You labored relentlessly, forcing your mighty shoulders against boulders, even while nursing a terrible injury.
                </p>
                <p>
                  Your great strength was the foundation upon which Napoleon built his tyranny. He used your effort, knowing you had been promised a peaceful retirement. 
                  It is heartbreaking to know that the pigs rewarded your ultimate loyalty by selling you for money, which they used to buy <strong className="text-betrayal">another case of whisky</strong>.
                </p>
                <p>
                  Please know that your comrades, especially Clover and Benjamin, remembered your sacrifice, even if Napoleon immediately distorted your last words.
                </p>
              </div>

              <div className="mt-6 text-right">
                <p className="text-card-foreground italic">With endless sorrow,</p>
                <p className="text-muted-foreground">A Fellow Creature of Animal Farm</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Visual Concept Blueprint Section */}
      <section className="py-20 px-6 bg-background">
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
            <Card className="bg-card border-border hover:border-accent transition-all md:col-span-2" style={{ transitionDuration: '0.4s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-accent mb-6 text-center">Design Justification</h3>
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

      {/* Conclusion */}
      <section className="py-20 px-6 bg-gradient-to-b from-muted/30 to-corruption">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            The Cycle Complete
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            The ISP demonstrates a complete cycle of revolutionary hope, struggle, and tragic disillusionment. 
            From Old Major's vision of equality to Napoleon's absolute tyranny, the novel reveals how idealism can be corrupted, 
            propaganda can triumph over truth, and loyalty can be brutally betrayed.
          </p>
          <blockquote className="text-xl italic text-card-foreground border-l-4 border-primary pl-6 py-4 bg-card rounded-r-lg">
            "The creatures outside looked from pig to man, and from man to pig, and from pig to man again; 
            but already it was impossible to say which was which."
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-corruption text-primary-foreground/80 text-center">
        <p className="text-sm">
          Independent Study Project Reading Journal • George Orwell's <em>Animal Farm</em> (1945)
        </p>
      </footer>
    </div>
  );
};

export default Index;
