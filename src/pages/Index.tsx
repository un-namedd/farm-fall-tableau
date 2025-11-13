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
            <div className="bg-hopeFaded/20 backdrop-blur-sm p-6 rounded-lg border border-hopeFaded/30 transition-all hover:scale-105" 
              style={{ transitionDuration: '0.7s', transitionTimingFunction: 'cubic-bezier(.32,1.56,.54,1.01)', transitionDelay: '0.1s' }}
            >
              <h2 className="text-xl font-bold text-primary-foreground mb-2">IDEALISM CORRUPTED</h2>
              <p className="text-primary-foreground/80 text-sm">
                It all starts with Old Major's big dream, but ends up with Napoleon running things his own way.
              </p>
            </div>
            
            <div className="bg-propaganda/20 backdrop-blur-sm p-6 rounded-lg border border-propaganda/30 transition-all hover:scale-105" 
              style={{ transitionDuration: '0.7s', transitionTimingFunction: 'cubic-bezier(.32,1.56,.54,1.01)', transitionDelay: '0.1s' }}
            >
              <h2 className="text-xl font-bold text-primary-foreground mb-2">PROPAGANDA TRIUMPHANT</h2>
              <p className="text-primary-foreground/80 text-sm">
                Squealer is always twisting words, making sure no one ever knows what's actually true.
              </p>
            </div>
            
            <div className="bg-betrayal/20 backdrop-blur-sm p-6 rounded-lg border border-betrayal/30 transition-all hover:scale-105" 
              style={{ transitionDuration: '0.7s', transitionTimingFunction: 'cubic-bezier(.32,1.56,.54,1.01)', transitionDelay: '0.1s' }}
            >
              <h2 className="text-xl font-bold text-primary-foreground mb-2">LOYALTY BETRAYED</h2>
              <p className="text-primary-foreground/80 text-sm">
                Boxer gives everything for the farm, believing he'll be taken care of, and gets sold out for booze instead.
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
              Dedicating one chapter per week for engagement, my 10 week journey :)
            </p>
          </div>

          <div className="grid gap-5">
            {[
              { week: 1, chapter: "Chapter One", events: "Old Major's dream and speech" },
              { week: 2, chapter: "Chapter Two", events: "Old Major dies, Animalism starts, and the animals fight back (Rebellion)" },
              { week: 3, chapter: "Chapter Three", events: "Seven Commandments, “Four legs good, two legs bad,” pigs get first perks" },
              { week: 4, chapter: "Chapter Four", events: "News gets out, Battle of the Cowshed" },
              { week: 5, chapter: "Chapter Five", events: "Mollie leaves, Snowball vs. Napoleon gets nasty, Snowball's kicked out" },
              { week: 6, chapter: "Chapter Six", events: "Brutal winter, everyone's hungry, lots of executions, goodbye “Beasts of England" },
              { week: 7, chapter: "Chapter Seven", events: "The bitter winter, food shortages, executions, and the abolition of \"Beasts of England\"" },
              { week: 8, chapter: "Chapter Eight", events: "Napoleon takes even more power, timber drama, Battle of the Windmill" },
              { week: 9, chapter: "Chapter Nine", events: "Boxer gets hurt, gets betrayed and sold, pigs party with whisky" },
              { week: 10, chapter: "Chapter Ten", events: "Years pass, pigs finish changing, “all animals are equal...” becomes a joke" },
            ].map((row, i) => (
              <div
                key={row.week}
                className={`
                  flex flex-col md:flex-row md:items-center 
                  rounded-xl px-7 py-5 gap-2 md:gap-8 
                  shadow-md
                  bg-card/80
                  border border-border
                  border-l-8
                  transition-transform transition-all duration-700 
                  hover:scale-105 hover:shadow-2xl
                  ${
                    i % 3 === 0
                      ? "border-l-hopeFaded"
                      : i % 3 === 1
                      ? "border-l-propaganda"
                      : "border-l-betrayal"
                  }
                `}
                style={{
                  transitionDuration: '0.7s',
                  transitionTimingFunction: 'cubic-bezier(.32,1.56,.54,1.01)'
                }}
              >
                <div className="font-bold text-xl text-primary w-16 md:w-auto">
                  {row.week < 10 ? `0${row.week}` : row.week}
                </div>
                <div className="font-semibold text-foreground flex-1">{row.chapter}</div>
                <div className="text-muted-foreground md:text-right text-base flex-[2]">{row.events}</div>
              </div>
            ))}
          </div>
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
                I picked <em>Animal Farm</em> because it doesn't sugarcoat what can happen when good ideas run into real life and power takes <strong>over</strong>. At first, everyone wants <strong className="text-primary">equality and freedom</strong> and honestly it sounds so so great. But when I see the pigs slowly twist those dreams into their own advantage really made me question how revolutions work in the real world. The book doesn't just point fingers at “look!!! bad guys”, it shows how easy it is for anyone with enough power (and a sharp tongue, like Squealer ;)! ) to <strong className="text-propaganda">rewrite the rules</strong> and <strong className="text-propaganda">convince</strong> others everything's fine, even when it isn't actually fine.
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
            <Card 
              className="bg-card border-border transition-transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:border-hopeFaded" 
              style={{ transitionDuration: '0.7s', transitionTimingFunction: 'cubic-bezier(.32,1.56,.54,1.01)', transitionDelay: '0.1s' }}
            >
              <CardHeader className="bg-hopeFaded/10">
                <CardTitle className="text-hopeFaded">First Third: Origins</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">The seeds of revolution</p>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-card-foreground leading-relaxed mb-4">
                  In the beginning, Napoleon and Snowball stand out as super smart pigs who build <strong>Animalism</strong> from the Old Major's speech.
                </p>
                <p className="text-card-foreground leading-relaxed mb-4">
                  Snowball is the <strong className="text-hopeFaded">energetic one</strong>, always <strong className="text-hopeFaded">throwing ideas around</strong>. Napoleon is way quieter but kind of <strong>intimidating</strong>.
                </p>
                <p className="text-card-foreground leading-relaxed">
                Boxer is my favorite for now: he's huge, mega strong, and everyone <strong>respects him</strong> because he <strong>never</strong> complains and always says, <em className="text-primary font-semibold">“I will work harder!”</em>
                </p>
              </CardContent>
            </Card>

            {/* Second Third */}
            <Card 
              className="bg-card border-border transition-transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:border-propaganda" 
              style={{ transitionDuration: '0.7s', transitionTimingFunction: 'cubic-bezier(.32,1.56,.54,1.01)', transitionDelay: '0.1s' }}
            >
              <CardHeader className="bg-propaganda/10">
                <CardTitle className="text-propaganda">Second Third: Transformation</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Power consolidates</p>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-card-foreground leading-relaxed mb-4">
                  Once Napoleon <strong className="text-destructive">chases Snowball</strong> out with his army of dogs, everything changes. He cancels the big meetings and starts deciding everything himself, using a few other pigs as backup. 
                </p>
                <p className="text-card-foreground leading-relaxed mb-4">
                  Boxer feels weird about Snowball leaving, but he never pushes back. Instead, he just adds another motto to his life: 
                  <em className="text-propaganda font-semibold"> “Napoleon is always right”</em>.
                </p>
                <p className="text-card-foreground leading-relaxed">
                  The pigs start acting pretty entitled, taking the best food, and moving into the  house.
                </p>
              </CardContent>
            </Card>

            {/* Final Third */}
            <Card 
              className="bg-card border-border transition-transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:border-betrayal" 
              style={{ transitionDuration: '0.7s', transitionTimingFunction: 'cubic-bezier(.32,1.56,.54,1.01)', transitionDelay: '0.1s' }}
            >
              <CardHeader className="bg-betrayal/10">
                <CardTitle className="text-betrayal">Final Third: Betrayal</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Complete corruption</p>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-card-foreground leading-relaxed mb-4">
                  Napoleon becomes more distant and obsessed with power. He's got dogs guarding him, brags about his fake awards, and now the house is basically a mansion for him and the other pigs.
                </p>
                <p className="text-card-foreground leading-relaxed mb-4">
                  Boxer breaks himself working and gets injured. Instead of letting him retire, the pigs sell him to the <strong className="text-destructive">horse slaughterer and glue boiler</strong> like trash for money and get drunk with it.
                </p>
                <p className="text-card-foreground leading-relaxed">
                Napoleon seals his reputation when he <strong className="text-betrayal">walks around on two legs</strong> with a whip. At that point, he's not even pretending to be <strong className="text-betrayal">different</strong> from humans anymore.
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
            <Card 
              className="bg-card border-border transition-transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:border-primary"
              style={{ transitionDuration: '0.7s', transitionTimingFunction: 'cubic-bezier(.32,1.56,.54,1.01)', transitionDelay: '0.1s' }}
            >
              <CardHeader>
                <CardTitle className="text-primary">The Author</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground leading-relaxed">
                  <strong>George Orwell</strong> wrote this book back in <strong>1945</strong>, right after World War II wrapped up. He was really worried about dictators and governments <strong>abusing</strong> power, and you see that all over the story. It's not just some farm tale; it's his warning about <strong>rebellion</strong> going horribly wrong, and that's when he published Animal Farm, a satire of the Soviet Union and its descent into dystopic authoritarianism under Stalin.
                </p>
              </CardContent>
            </Card>

            <Card 
              className="bg-card border-border transition-transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:border-secondary"
              style={{ transitionDuration: '0.7s', transitionTimingFunction: 'cubic-bezier(.32,1.56,.54,1.01)', transitionDelay: '0.1s' }}
            >
              <CardHeader>
                <CardTitle className="text-secondary">The Setting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground leading-relaxed">
                  The story starts at <strong>Manor Farm</strong>, owned by Mr. Jones, who's basically checked out and drunk half the time. After the animals kick him out and rename the place <b>Animal Farm</b>, they want everything to be <strong>free</strong>, <strong>fair</strong>, and <strong>good</strong>. At first, everyone feels hopeful, but trouble starts brewing fast.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card 
            className="bg-card border-border mt-6 transition-transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:border-propaganda"
            style={{ transitionDuration: '0.7s', transitionTimingFunction: 'cubic-bezier(.32,1.56,.54,1.01)', transitionDelay: '0.1s' }}
          >
            <CardContent className="p-8">
              <p className="text-card-foreground leading-relaxed">
                Things get messy almost instantly, a lot of it is because Snowball invents stuff (like the windmill) and Napoleon just wants to keep <strong className="text-propaganda">control and survive</strong>. The whole group is supposed to build something new, but the pigs start <strong className="text-betrayal">picking up all of the bad habits</strong> from humans, and the idea of “equality” just kind of fades away.
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
                Animal Farm is a perfect straight up example of the "rich" vs. the "regular" folks, basically the idea of <b>class conflict</b>. The pigs have all the decision making, like the <strong className="text-destructive">Bourgeoisie </strong>(ruling class), hog the good tasty food, and never do any of the dirty work.
                </p>
                <p className="text-card-foreground leading-relaxed mb-4">
                  The <strong className="text-primary">Proletariat</strong> (working class) is represented by Boxer and Clover in the story,  the “regular workers”, where they keep the place running but get almost nothing good in return.
                </p>
                <p className="text-card-foreground leading-relaxed">
                  Napoleon and Squealer keep everyone scared by using <strong className="text-propaganda">culturual hegemony</strong>, where they keep talking about  the danger of Jones coming back, and Squealer throws around the fake info to keep the animals believing things are fine. That feels a lot like real life where basically the people at the top keep everything nice for themselves and tell everyone else not to complain.
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
                  On the feminist side, this book makes female animals feel pretty <b>powerless</b>. Clover is super caring and works like crazy, like a <strong className="text-secondary">stout motherly mare</strong>, but never gets a say in what happens, not her thoughts or anything. She also lacks the politcal ability to challenge the patriarchy (the pig leadership.)
                </p>
                <p className="text-card-foreground leading-relaxed mb-4">
                  Mollie cares about her looks and comfort (the sugar and ribbons, which Snowball calls the "Badge of slavery"), so she decides to split for human attention when things get hard.
                </p>
                <p className="text-card-foreground leading-relaxed">
                  The hens were the only group who actually fought for something, but Napoleon quickly <strong className="text-destructive">crushes</strong> and <strong className="text-destructive">suppresses</strong> them, some literally die for it. <b>Every</b> pig (Major, Snowball, Napoleon, Squealer) who runs the show is a dude. It's really kind of frustrating because the only real challenge to the leadership gets stomped, especially if it's not by the pigs themselves.
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

          <Card className="bg-card border-border hover:border-primary transition-all" style={{ transitionDuration: '0.4s' }}>
            <CardContent className="p-8">
              <p className="text-card-foreground leading-relaxed mb-4">
                Reading Animal Farm reminded me of so so many stories and movies about dictatorships and broken promises.
              </p>
              <p className="text-card-foreground leading-relaxed mb-4">
                Napoleon keeps everyone <strong className="text-destructive">scared</strong>, his dogs do all the dirty work, and anyone who speaks up gets wrecked, like literally, he did <strong className="text-destructive">sudden execuctuions</strong> of the confessing animals with his dogs. Very similar to what you find in fiction or movies or videos that are more about political purges.
              </p>
              <p className="text-card-foreground leading-relaxed mb-4">
                Then you have Squealer, where he rewrites facts non stop, trying to hide what's real and making the animals doubt their memories. And that's one of the most classic and common move for <strong className="text-propaganda">propaganda</strong>-ish movies or ideas (also in real life lol), where they change the story so much that almost NO body can challenge it.
              </p>
              <p className="text-card-foreground leading-relaxed">
                Then by the end, watching the pigs act more and more like humans made me realize power can just flip, like a switch, good ideas go upside down until they're just another form of control. This reflects how power often gets corrupted (with the wrong hands).
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
            <h4 className="text-sm font-bold text-muted-foreground mt-2 mb-4">(click on the number[s] for the source[s] :) )</h4>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Infographic */}
            <Card 
              className="bg-card border-border transition-transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:border-primary" 
              style={{ transitionDuration: '0.7s', transitionTimingFunction: 'cubic-bezier(.32,1.56,.54,1.01)', transitionDelay: '0.1s' }}
            >
              <CardHeader className="bg-primary/10">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <CardTitle className="text-primary">Infographic <a href="https://www.visualcapitalist.com/visualizing-global-wealth-inequality/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline">[1]</a>
                    </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Global Income Inequality</p>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-card-foreground leading-relaxed">
                  Like the pigs in <b>Animal Farm</b> where they're consolidating luxury for themselves, the real world wealth gaps show you how those in power continue to deepen inequality even more, and this sort of echo's the farm's transformation from revolution to oligarchy. The infographic shows us how the <b>richest 10%</b> in multiplie countries hold almost <b>all</b> of the wealth, while the stay struggling, for example the richest in the U.S. average <b>40x</b> more income than the <b>bottom 90%</b>.
                </p>
              </CardContent>
            </Card>

            {/* Article */}
            <Card 
              className="bg-card border-border transition-transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:border-propaganda" 
              style={{ transitionDuration: '0.7s', transitionTimingFunction: 'cubic-bezier(.32,1.56,.54,1.01)', transitionDelay: '0.1s' }}
            >
              <CardHeader className="bg-propaganda/10">
                <div className="w-12 h-12 bg-propaganda rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <CardTitle className="text-propaganda">Article <a href="https://www.thebulwark.com/p/trump-big-new-propaganda-push-executive-order-history-smithsonian"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline">[1]</a></CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Historical Revisionism</p>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-card-foreground leading-relaxed">
                  I think this perfectly mirrors Napoleon and Squealer's rewriting of history on the farm. Snowball changed where he was basically painted from hero to villain and this fosters confusion and total control through <strong className="text-propaganda">propaganda</strong> and "alternative facts." The article talks about a 2025 executive order in the U.S. that was made to reframe and <strong className="text-propaganda">manipulate</strong> the national historical narrative that's set and this can cause many problems, <strong className="text-destructive">divide</strong> society, and lead to a LOT of doubt on factual accuracy.
                </p>
              </CardContent>
            </Card>

            {/* Video/Podcast */}
            <Card 
              className="bg-card border-border transition-transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:border-betrayal" 
              style={{ transitionDuration: '0.7s', transitionTimingFunction: 'cubic-bezier(.32,1.56,.54,1.01)', transitionDelay: '0.1s' }}
            >
              <CardHeader className="bg-betrayal/10">
                <div className="w-12 h-12 bg-betrayal rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle className="text-betrayal">Video or Podcast <a href="https://open.spotify.com/episode/0DjdexsyylvQrlswrQQUve?si=3879a883db654011"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline">[1]</a> <a href="https://www.youtube.com/watch?v=mfA5BkF1eE0"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline">[2]</a> <a href="https://www.newsweek.com/how-become-tyrant-dictators-who-feature-netflix-show-hitler-idi-amin-stalin-kim-1612111"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline">[3]</a></CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Cult of Personality</p>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-card-foreground leading-relaxed">
                   Just like how the (podcast) episode explains how to create a cult of personality, Napoleon starts to adopt titles, orchestrates “spontaneous demonstrations” in his honor and then uses Squealer's <strong className="text-propaganda">propaganda</strong> to glorify himself even MORE, and <strong className="text-destructive">eliminating</strong> anyone that oppposes him. The video shows us that making a powerful leader myth is super important to maintain an authoritarian regime, which is exactly what Napoleon did in Animal Farm through <strong className="text-propaganda">propaganda</strong>, <strong className="text-destructive">fear</strong>, and <strong className="text-betrayal">loyal spectacle</strong>.
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
                <strong className="text-muted-foreground">Benjamin the donkey</strong> is one of the weirdest characters for me. He understands everything that's happening. He's smart, can read, and he sees the Commandments change, but it's like he almost never speaks up even with everything he sees. Every time I wanted him to say something, he kept quiet. <i><strong className="text-muted-foreground">"Donkeys live a long time. None of you has ever seen a dead donkey"</strong></i>.
              </p>
              <p className="text-card-foreground leading-relaxed mb-4">
              He lets stuff happen right in front of him, but he only once broke his silence when Boxer was taken away to the knacker. It's like he's saying, <i><strong className="text-secondary">"I see what's going on, but I'm not going to say anything because I don't want to get in trouble."</strong></i>
              </p>
              <p className="text-card-foreground leading-relaxed">
                It makes me wonder, if you see the truth but never do anything, <strong className="text-foreground">is that just another way of helping the bad guys win?</strong>
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
                The craziest and wildest moment for me was when the pigs suddenly started walking on two legs. It's not just casual thing that they did, it <strong className="text-destructive">destroys</strong> everything Animalism was supposed to be.
              </p>
              <p className="text-card-foreground leading-relaxed mb-4">
              <i><strong className="text-primary font-semibold">"Whatever goes upon two legs is an enemy"</strong></i>. 
              </p>
              <p className="text-card-foreground leading-relaxed mb-4">
                The <strong className="text-betrayal">sheep switching</strong> from <i><strong className="text-primary font-semibold">"Four legs good, two legs bad"</strong></i> to <strong className="text-propaganda">"Four legs good, two legs better!"</strong> felt super twisted for me, Squealer just completely <strong className="text-propaganda">brainwashed</strong> them. It's like they forgot about the whole Animalism thing and just started following Napoleon blindly.
              </p>
              <p className="text-card-foreground leading-relaxed">
              As soon as <strong className="text-betrayal">Napoleon picks up a whip</strong>, I just knew the revolution was <strong className="text-muted-foreground">dead</strong> and the pigs were <strong className="text-betrayal">no different</strong> from the humans they kicked out.
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
                  I wish I could have warned you before things got so bad. I write to you, where I'm observing the spot where the windwill got finished, but now is used to profit rather than power.
                  I wish I could have reached you sooner on that day when the van came.
                </p>
                <p>
                  You were the <strong className="text-secondary">hardest worker</strong>, and your faith in <strong className="text-primary">"I will work harder!"</strong> and <strong className="text-propaganda">"Napoleon is always right"</strong> made everyone believe things would work out. It sucks that the very leaders you helped ended up betraying you and sent you away just for more booze. 
                </p>
                <p>
                  You should've got the peaceful life they promised, and it's honestly heartbreaking what happened. You were the foundation upon which Napoleon built his entire tyranny. He <strong className="text-betrayal">used</strong> your effort, even knowing you were <strong className="text-secondary">promised a peaceful retirement</strong>. 
                </p>
                <p>
                  Please know that your comrades, Clover, Benjamin, all of us, we'll always remember how loyal you stayed, even if the pigs tried to twist it around.
                </p>
              </div>

              <div className="mt-6 text-right">
                <p className="text-card-foreground italic">With endless sorrow,</p>
                <p className="text-muted-foreground">A Friend, Fellow, and Comrade.</p>
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
            <Card 
              className="bg-card border-border transition-transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:border-primary" 
              style={{ transitionDuration: '0.7s', transitionTimingFunction: 'cubic-bezier(.32,1.56,.54,1.01)', transitionDelay: '0.1s' }}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Central Symbolic Image</h3>
                <p className="text-card-foreground leading-relaxed mb-4">
                  The saddest symbol is how the animals, after everything, look from the pigs to the humans and can't tell them apart, as if they're all the same. All the hope for something new ends up wasted, and it honestly makes you wonder what the point of the rebellion was.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  "The creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which."
                </p>
              </CardContent>
            </Card>

            {/* Color Palette */}
            <Card 
              className="bg-card border-border transition-transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:border-secondary" 
              style={{ transitionDuration: '0.7s', transitionTimingFunction: 'cubic-bezier(.32,1.56,.54,1.01)', transitionDelay: '0.1s' }}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-4">Dominant Color Palette</h3>
                <div className="space-y-3 mb-4">
                  {/* Individual color transitions */}
                  <div className="flex items-center gap-3 group">
                    <div className="w-12 h-12 rounded bg-hopeFaded border-2 border-foreground/20 transition-all duration-100 group-hover:scale-110 group-hover:ring-4 group-hover:ring-hopeFaded/40" />
                    <div className="transition-all duration-100 group-hover:translate-x-2">
                      <p className="font-semibold text-foreground transition-colors duration-100 group-hover:text-hopeFaded">Faded Green</p>
                      <p className="text-sm text-muted-foreground transition-colors duration-100 group-hover:text-hopeFaded/70">The trampled flag of hope</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="w-12 h-12 rounded bg-betrayal border-2 border-foreground/20 transition-all duration-100 group-hover:scale-110 group-hover:ring-4 group-hover:ring-betrayal/40" />
                    <div className="transition-all duration-100 group-hover:translate-x-2">
                      <p className="font-semibold text-foreground transition-colors duration-100 group-hover:text-betrayal">Deep Burgundy</p>
                      <p className="text-sm text-muted-foreground transition-colors duration-100 group-hover:text-betrayal/70">Bloodshed and betrayal</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="w-12 h-12 rounded bg-corruption border-2 border-foreground/20 transition-all duration-100 group-hover:scale-110 group-hover:ring-4 group-hover:ring-corruption/40" />
                    <div className="transition-all duration-100 group-hover:translate-x-2">
                      <p className="font-semibold text-foreground transition-colors duration-100 group-hover:text-corruption">Charcoal Black</p>
                      <p className="text-sm text-muted-foreground transition-colors duration-100 group-hover:text-corruption/70">Corruption and darkness</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="w-12 h-12 rounded bg-propaganda border-2 border-foreground/20 transition-all duration-100 group-hover:scale-110 group-hover:ring-4 group-hover:ring-propaganda/40" />
                    <div className="transition-all duration-100 group-hover:translate-x-2">
                      <p className="font-semibold text-foreground transition-colors duration-100 group-hover:text-propaganda">Sickly Yellow</p>
                      <p className="text-sm text-muted-foreground transition-colors duration-100 group-hover:text-propaganda/70">Deceit and propaganda</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Thematic Journey */}
            <Card 
              className="bg-card border-border transition-transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:border-accent md:col-span-2" 
              style={{ transitionDuration: '0.7s', transitionTimingFunction: 'cubic-bezier(.32,1.56,.54,1.01)', transitionDelay: '0.1s' }}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-accent mb-6 text-center">Design Justification</h3>
                <p className="text-card-foreground leading-relaxed mb-4">
                  The color journey from hopeful green (the flag with hoof and horn) to the dark corruption of burgundy and black mirrors the ideological decay from Animalism to totalitarianism.
                </p>
                <p className="text-muted-foreground text-sm italic border-l-4 border-primary pl-4">
                  "ALL ANIMALS ARE EQUAL BUT SOME ANIMALS ARE MORE EQUAL THAN OTHERS."
                  <br />The final, singular Commandment
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
            Looking back at the whole story, you go from rooting for Major's dream to feeling totally let down when Napoleon takes over everything. It's honestly depressing how propaganda twists the truth and how loyalty means nothing, at all, in the end. Animal Farm shows that even the best ideas are easy to lose when people (or pigs) want power more than anything else.
          </p>
          <blockquote
            className="relative text-xl italic text-card-foreground bg-card rounded-xl py-8 px-10 shadow-lg transition-transform duration-700 hover:scale-105 hover:shadow-2xl border-l-8 border-corruption/80 mx-auto max-w-2xl"
          >
            <span className="absolute left-8 text-5xl text-corruption/50 select-none pointer-events-none leading-none">“</span>
            <span className="block leading-relaxed">
              The creatures outside looked from pig to man, and from man to pig, and from pig to man again; <br />
              but already it was impossible to say which was which.
            </span>
            <span className="absolute bottom-4 right-11 text-5xl text-corruption/50 select-none pointer-events-none leading-none">”</span>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-corruption text-primary-foreground/80 text-center">
        <p className="text-sm">
          Independent Study Project Reading Journal • George Orwell's <em>Animal Farm</em> (1945) <br />
          <br />
          I worked on this project and did a lot of research on the book, and I hope you enjoyed reading it as much as I did!
          <br />
          <br />
          Omar Rihani - 2025 - The Journey Begins...
        </p>
      </footer>
    </div>
  );
};

export default Index;
