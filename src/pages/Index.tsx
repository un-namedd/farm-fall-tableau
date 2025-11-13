import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/animal-farm-hero.jpg";

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Parallax */}
      <div ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            y: heroY,
            scale: heroScale
          }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-corruption/80 via-betrayal/70 to-background"
            style={{ opacity: heroOpacity }}
          />
        </motion.div>

        <motion.div 
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-7xl md:text-9xl font-bold mb-8 text-primary-foreground tracking-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          >
            ANIMAL FARM
          </motion.h1>
          
          <motion.div 
            className="space-y-4 text-xl md:text-2xl text-primary-foreground/90 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.p 
              className="italic"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >Idealism Corrupted</motion.p>
            <motion.p 
              className="italic"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >Propaganda Triumphant</motion.p>
            <motion.p 
              className="italic"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >Loyalty Betrayed</motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 py-16 space-y-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Visual Concept Blueprint */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="border-betrayal/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-4xl text-betrayal">Visual Concept Blueprint</CardTitle>
              <CardDescription>Design rationale for the presentation title slide</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                The central image represents the <strong className="text-betrayal">ultimate betrayal of Animalism</strong>—a pig transforming into a human, representing Napoleon's complete abandonment of the revolutionary principles. The trampled green flag symbolizes the death of Old Major's dream, while the silhouetted windmill represents the exploitation of labor.
              </p>
              <ul className="space-y-2 text-foreground/70">
                <li>• <strong className="text-betrayal">Burgundy reds</strong> - corruption and violence of Napoleon's regime</li>
                <li>• <strong className="text-hopeFaded">Faded greens</strong> - the death of idealism and hope</li>
                <li>• <strong className="text-propaganda">Sickly yellows</strong> - propaganda and deceit</li>
                <li>• <strong className="text-corruption">Charcoal blacks</strong> - moral darkness and tyranny</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Reading Schedule */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="border-hopeFaded/30 shadow-xl">
            <CardHeader>
              <CardTitle className="text-4xl text-hopeFaded">1. Reading Schedule</CardTitle>
              <CardDescription>Ten-week reading schedule, one chapter per week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { week: 1, chapters: "Chapter One", events: "Old Major's dream and speech" },
                  { week: 2, chapters: "Chapter Two", events: "Old Major's death, rise of Animalism, and the Rebellion" },
                  { week: 3, chapters: "Chapter Three", events: "The establishment of the Seven Commandments, \"Four legs good, two legs bad,\" and the pigs' initial privileges (milk)" },
                  { week: 4, chapters: "Chapter Four", events: "The spread of news and the Battle of the Cowshed" },
                  { week: 5, chapters: "Chapter Five", events: "Mollie's disappearance, disputes between Snowball and Napoleon, and Snowball's expulsion" },
                  { week: 6, chapters: "Chapter Six", events: "Building the windmill, engaging in trade, and the pigs moving into the farmhouse (Commandment modification)" },
                  { week: 7, chapters: "Chapter Seven", events: "The bitter winter, food shortages, executions, and the abolition of \"Beasts of England\"" },
                  { week: 8, chapters: "Chapter Eight", events: "Napoleon's increasing power (titles, security), the sale of timber, and the Battle of the Windmill" },
                  { week: 9, chapters: "Chapter Nine", events: "Boxer's injury, his betrayal/sale to the knacker, and the pigs buying whisky" },
                  { week: 10, chapters: "Chapter Ten", events: "Years pass, final transformation of the pigs, and the new singular commandment" }
                ].map((item, idx) => (
                  <motion.div 
                    key={item.week} 
                    className="flex gap-4 p-4 border-l-4 border-hopeFaded/40 bg-muted/30 rounded"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-16">
                      <div className="text-xl font-bold text-hopeFaded">Week {item.week}</div>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground mb-1">{item.chapters}</div>
                      <div className="text-sm text-muted-foreground">{item.events}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Written Reflection */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="border-propaganda/30 shadow-xl">
            <CardHeader>
              <CardTitle className="text-4xl text-propaganda">2. Why I Chose This Novel</CardTitle>
              <CardDescription>Short written reflection (approx. 100 words)</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                <em>Animal Farm</em> is an essential choice because it provides a powerful examination of how idealism is corrupted by power. The initial desire for <strong className="text-hopeFaded">freedom and equality</strong> quickly dissolves as the pigs seize control, demonstrating how easily revolutionary movements can turn into oppression, where one tyrant simply replaces another. The novel's use of <strong className="text-propaganda">propaganda and manipulation</strong> offers crucial insight into social control and the fragility of memory and truth, making it a compelling study of political dynamics.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Character Development */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="border-betrayal/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-4xl text-betrayal">3. Character Development</CardTitle>
              <CardDescription>Notes about character development in three parts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-hopeFaded mb-3">First Third: Establishment</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    In the beginning, the leaders, Napoleon and Snowball, are established as highly intelligent pigs who elaborate Old Major's teachings into <strong>Animalism</strong>. Snowball is <strong>more vivacious, quicker in speech, and more inventive</strong>. Napoleon, a large Berkshire boar, is fierce-looking, not much of a talker, but has a reputation for <strong>getting his own way</strong>. Boxer is introduced as enormous, immensely strong, and universally respected for his <strong>steadiness of character and tremendous powers of work</strong>. His personal motto is immediately adopted: <strong className="text-hopeFaded">"I will work harder!"</strong>.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-propaganda mb-3">Second Third: Consolidation of Power</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Napoleon reveals his ruthless strategy by <strong className="text-betrayal">expelling Snowball</strong> using the nine puppies he had secretly reared. He centralizes power, ending Sunday Meetings and taking exclusive control of decisions through a pig committee. Boxer, despite being "vaguely troubled" by Snowball's expulsion, adopts a second maxim, demonstrating blind loyalty: <strong className="text-propaganda">"Napoleon is always right"</strong>. The pigs cement their status as the privileged class, reserving apples and milk, and moving into the farmhouse.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-betrayal mb-3">Final Third: Complete Transformation</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Napoleon completes his transformation into a full tyrant, becoming increasingly isolated, attended by dogs and a black cockerel. He awards himself military decorations, and the farmhouse is filled with luxury, including whisky. Boxer, having worked beyond his strength, suffers a lung injury. Instead of receiving the retirement he dreamed of, Boxer is sold to the <strong className="text-betrayal">horse slaughterer and glue boiler</strong>. Napoleon achieves the ultimate betrayal of Animalism when he appears <strong className="text-betrayal">walking on his hind legs</strong> carrying a whip.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Historical Context */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="border-hopeFaded/30 shadow-xl">
            <CardHeader>
              <CardTitle className="text-4xl text-hopeFaded">4. Biographical & Historical Context</CardTitle>
              <CardDescription>Explanation based on research (approx. 250 words)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">The Life of the Author</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    The author is <strong>George Orwell</strong>. The novel was <strong>first published in 1945</strong>.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">The Time in Which the Author Was Writing</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    The 1945 publication date places the novel at the end of World War II. The text itself contains political and social commentary reflecting anxieties about <strong className="text-betrayal">tyranny</strong> and the abuse of power, framed through the concept of <strong>Rebellion</strong>.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">The Novel's Setting/Time Period</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    The novel begins on the <strong>Manor Farm</strong> under the ownership of Mr. Jones, who is often drunk and neglectful. Following the successful Rebellion, the farm is renamed <strong>Animal Farm</strong>. The animals aim to establish a society free from human tyranny where they are <strong className="text-hopeFaded">rich and free</strong>, but the internal conflict immediately begins, symbolized by the ideological clash between Snowball's invention (the windmill) and Napoleon's focus on <strong className="text-betrayal">control and survival</strong>. The society shifts from a revolutionary state to one ruled by pigs who increasingly adopt the <strong>vices of Man</strong>.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Literary Criticism */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="border-propaganda/30 shadow-xl">
            <CardHeader>
              <CardTitle className="text-4xl text-propaganda">5. Literary Criticism Analysis</CardTitle>
              <CardDescription>Analysis of the novel using literary criticism</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-betrayal mb-3">Marxist Analysis</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    The novel strongly reflects Marxist ideas of <strong className="text-betrayal">class conflict</strong>. The pigs, acting as the <strong>Bourgeoisie</strong> (ruling class), quickly take control over the intellectual and managerial aspects of the farm, directing and supervising work rather than performing physical labor. The <strong>Proletariat</strong> (working class), exemplified by Boxer and Clover, perform the strenuous work necessary for the farm to thrive. Napoleon and Squealer practice <strong className="text-propaganda">cultural hegemony</strong> by constantly manipulating information (Squealer's figures), controlling ideology (Animalism, the Commandments), and using fear (the threat of Jones's return) to ensure the working animals remain subservient and accept the status quo.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-hopeFaded mb-3">Feminist Analysis</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Applying the Feminist lens involves examining the representation and <strong>agency of female characters</strong>. Clover is portrayed as a <strong>stout motherly mare</strong> who performs hard labor and acts as a conscience, yet she lacks the political ability to articulate her thoughts or challenge the patriarchy (the pig leadership). Mollie, the white mare, is driven by vanity and comfort (sugar and ribbons, which Snowball calls the "badge of slavery") and ultimately deserts the farm for human attention. The only female act of collective rebellion—by the hens refusing to surrender their eggs—was <strong className="text-betrayal">swiftly and ruthlessly</strong> suppressed by Napoleon, leading to nine deaths. The powerful pigs who control the farm policy (Major, Snowball, Napoleon, Squealer) are exclusively male boars.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Text to Text Connections */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="border-betrayal/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-4xl text-betrayal">6. Text to Text Connections</CardTitle>
              <CardDescription>Notes on connections to other texts (approx. 200 words)</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                The events on Animal Farm, where revolutionary ideals are betrayed and history is constantly rewritten by those in power, bear striking thematic resemblances to other texts depicting totalitarian regimes or compromised revolutions. The use of fear and violence to maintain control, such as the <strong className="text-betrayal">sudden, terrifying executions</strong> of confessing animals by Napoleon's dogs, parallels scenes found in fiction and media that explore political purges. Furthermore, Squealer's role as the mouthpiece for Napoleon, capable of convincing the animals that "black into white" and changing the historical record—like denying Snowball's bravery at the Battle of the Cowshed or altering the Commandments—connects strongly to other texts that depict organized, pervasive <strong className="text-propaganda">state propaganda</strong> intended to blur reality. The transformation of the pigs, adopting human vices and attire, reflects how power often corrupts and leads to the very behavior the revolution sought to overthrow.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Media Connections */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="border-hopeFaded/30 shadow-xl">
            <CardHeader>
              <CardTitle className="text-4xl text-hopeFaded">7. Media Connections</CardTitle>
              <CardDescription>Three reputable media pieces connected to the novel's themes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-propaganda/40 pl-4">
                  <h3 className="text-xl font-bold text-propaganda mb-2">Infographic</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    An infographic illustrating <strong>Global Income Inequality or Wealth Concentration</strong> would be chosen. This connects to Squealer's constant use of dubious statistics to "prove" the animals are better off, despite visible evidence of hunger and hardship. The visual data would reflect the growing disparity between the pigs' rations (beer, milk, apples, sugar) and the severe reductions imposed on the other working animals.
                  </p>
                </div>
                
                <div className="border-l-4 border-betrayal/40 pl-4">
                  <h3 className="text-xl font-bold text-betrayal mb-2">Article</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    A news article discussing <strong>historical revisionism or the deliberate manipulation of national memory</strong> would be selected. This directly relates to Napoleon and Squealer consistently rewriting the past, particularly Snowball's role, shifting him from a hero of the Battle of the Cowshed to a secret agent of Jones "from the very start".
                  </p>
                </div>
                
                <div className="border-l-4 border-hopeFaded/40 pl-4">
                  <h3 className="text-xl font-bold text-hopeFaded mb-2">Video or Podcast</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    A video or podcast analyzing the <strong>"Cult of Personality"</strong> in political leadership would be chosen. This connects to Napoleon's manufactured elevation through titles (e.g., "Father of All Animals," "Leader, Comrade Napoleon"), his personal anthem composed by Minimus, and the mandated <strong className="text-propaganda">Spontaneous Demonstrations</strong>, all designed to glorify Napoleon and inspire unquestioning obedience from the working animals.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Personal Reflection */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="border-propaganda/30 shadow-xl">
            <CardHeader>
              <CardTitle className="text-4xl text-propaganda">8. Personal Reflection: "I wonder what this means..."</CardTitle>
              <CardDescription>Chosen prompt: I wonder what this means...</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                I wonder what the longevity and silence of <strong className="text-betrayal">Benjamin the donkey</strong> truly means. Benjamin is literate and understands the changes to the Commandments, but he rarely speaks, offering only the cynical remark that "Donkeys live a long time. None of you has ever seen a dead donkey". His wisdom seems to translate into a fatalistic nihilism, refusing to fight against the oppression of the pigs, though he is devoted to Boxer. He breaks his silence only to reveal the horrific truth that Boxer is being sent to the knacker. His inaction, despite his intelligence, raises the question of whether knowing the truth but refusing to act makes one complicit in the oppression.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Surprise Element */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="border-destructive/30 shadow-xl">
            <CardHeader>
              <CardTitle className="text-4xl text-destructive">9. What Came as a Surprise</CardTitle>
              <CardDescription>Chosen prompt: What came as a surprise in the novel?</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                The single most surprising moment in the novel is when the pigs, led by Squealer, suddenly begin <strong className="text-betrayal">walking on their hind legs</strong>. This act directly violates the core principle of Animalism, <strong>"Whatever goes upon two legs is an enemy"</strong>. The terror of the other animals is palpable. The surprise is compounded by the sheep, who had been secretly trained by Squealer, immediately changing their bleating slogan from "Four legs good, two legs bad" to <strong className="text-propaganda">"Four legs good, two legs better!"</strong>. This sudden, final reversal marks the moment the pigs completely reject the revolutionary principles and assume the identity of their former human masters, culminating in Napoleon carrying a whip.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Letter to Character */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="border-secondary/30 shadow-xl bg-card/50">
            <CardHeader>
              <CardTitle className="text-4xl text-secondary">10. Letter to a Character</CardTitle>
              <CardDescription>Chosen prompt: Write a letter to a character in your story</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 font-serif">
                <p className="text-foreground/90">Dear Boxer,</p>
                
                <p className="text-foreground/80 leading-relaxed">
                  I write to you from the field, observing the spot where the windmill was finally completed, though it is now used for profit rather than power. I wish I could have reached you sooner on that day when the van came. Your constant unwavering dedication—<strong className="text-hopeFaded">"I will work harder!"</strong> and <strong className="text-propaganda">"Napoleon is always right"</strong>—was truly admirable, but it was tragically misplaced. You labored relentlessly, forcing your mighty shoulders against boulders, even while nursing a terrible injury. Your great strength was the foundation upon which Napoleon built his tyranny. He used your effort, knowing you had been promised a peaceful retirement. It is heartbreaking to know that the pigs rewarded your ultimate loyalty by selling you for money, which they used to buy <strong className="text-betrayal">another case of whisky</strong>. Please know that your comrades, especially Clover and Benjamin, remembered your sacrifice, even if Napoleon immediately distorted your last words.
                </p>
                
                <p className="text-foreground/80">
                  With endless sorrow,<br />
                  <em>A Fellow Creature of Animal Farm</em>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;