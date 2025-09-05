import Link from 'next/link'
import { ChartBar, Database, Brain, Code, Mail, Github, Linkedin, Download } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black-800 via-white-700 to-black-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              Angelo Amoriello
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="text-gray-300 hover:text-white transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl font-bold text-white">AA</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Quantitative Analyst
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              I am a quantitative analyst with a background in advanced mathematics and experience in modeling, optimization, and forecasting. I specialize in transforming complex data into actionable insights to drive strategic decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                <Download className="inline-block mr-2 h-5 w-5" />
                Download CV
              </button>
              <Link href="#contact" className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Chi Sono</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-gray-300 space-y-6">
              <p className="text-lg">
                I work as a freelancer helping companies make data-driven decisions and improve operational performance through advanced quantitative models.
              </p>
              <p className="text-lg">
                I have strong expertise in Operations Research, including linear and non-linear optimization, stochastic modeling, and scheduling complex systems. In data analysis and forecasting, I am proficient in Python (using libraries such as pandas, numpy, and scikit-learn), R, SQL, and techniques like ARIMA and Monte Carlo simulations to generate accurate predictions and actionable insights.ù
                My industry experience spans energy—especially battery asset optimization—gaming and betting analytics, and consulting, which allows me to tackle a wide range of quantitative and optimization challenges.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <ChartBar className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Analytics</h3>
                <p className="text-gray-300">Analisi avanzate e reporting</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Brain className="h-12 w-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">ML/AI</h3>
                <p className="text-gray-300">Machine Learning e AI</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Database className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Big Data</h3>
                <p className="text-gray-300">Gestione dati su larga scala</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Code className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Programming</h3>
                <p className="text-gray-300">Python, R, SQL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Progetti</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg mb-6 flex items-center justify-center">
                <ChartBar className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Analisi Predittiva Vendite</h3>
              <p className="text-gray-300 mb-4">
                Modello di machine learning per la previsione delle vendite utilizzando 
                dati storici e fattori esterni.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full text-sm">Scikit-learn</span>
                <span className="bg-green-600/30 text-green-300 px-3 py-1 rounded-full text-sm">Pandas</span>
              </div>
              <button className="text-purple-400 hover:text-purple-300 font-semibold">
                Visualizza Progetto →
              </button>
            </div>

            {/* Project 2 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-lg mb-6 flex items-center justify-center">
                <Brain className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Classificazione Immagini</h3>
              <p className="text-gray-300 mb-4">
                Sistema di deep learning per la classificazione automatica di immagini 
                con oltre 95% di accuratezza.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-orange-600/30 text-orange-300 px-3 py-1 rounded-full text-sm">TensorFlow</span>
                <span className="bg-red-600/30 text-red-300 px-3 py-1 rounded-full text-sm">Keras</span>
                <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-sm">CNN</span>
              </div>
              <button className="text-blue-400 hover:text-blue-300 font-semibold">
                Visualizza Progetto →
              </button>
            </div>

            {/* Project 3 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-lg mb-6 flex items-center justify-center">
                <Database className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Dashboard Analytics</h3>
              <p className="text-gray-300 mb-4">
                Dashboard interattivo per l'analisi in tempo reale di metriche business 
                con visualizzazioni dinamiche.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-yellow-600/30 text-yellow-300 px-3 py-1 rounded-full text-sm">Plotly</span>
                <span className="bg-indigo-600/30 text-indigo-300 px-3 py-1 rounded-full text-sm">Streamlit</span>
                <span className="bg-pink-600/30 text-pink-300 px-3 py-1 rounded-full text-sm">SQL</span>
              </div>
              <button className="text-green-400 hover:text-green-300 font-semibold">
                Visualizza Progetto →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Competenze</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-6">Languages</h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                  <div className="text-lg font-semibold text-white mb-2">Python</div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                  <div className="text-lg font-semibold text-white mb-2">R</div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                  <div className="text-lg font-semibold text-white mb-2">SQL</div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-6">ML/AI</h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                  <div className="text-lg font-semibold text-white mb-2">Scikit-learn</div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                  <div className="text-lg font-semibold text-white mb-2">TensorFlow</div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                  <div className="text-lg font-semibold text-white mb-2">PyTorch</div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-6">Data Tools</h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                  <div className="text-lg font-semibold text-white mb-2">Pandas</div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                  <div className="text-lg font-semibold text-white mb-2">NumPy</div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                  <div className="text-lg font-semibold text-white mb-2">Matplotlib</div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-violet-500 to-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-6">Cloud & Tools</h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                  <div className="text-lg font-semibold text-white mb-2">AWS</div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-amber-500 to-yellow-500 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                  <div className="text-lg font-semibold text-white mb-2">Docker</div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-sky-500 to-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                  <div className="text-lg font-semibold text-white mb-2">Git</div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Contatti</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">
              Cerchi un Data Scientist per il tuo progetto? Parliamone!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-600/30 p-4 rounded-lg">
                  <Mail className="h-6 w-6 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-gray-300">tuaemail@esempio.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600/30 p-4 rounded-lg">
                  <Linkedin className="h-6 w-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
                  <p className="text-gray-300">linkedin.com/in/tuoprofilo</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-gray-600/30 p-4 rounded-lg">
                  <Github className="h-6 w-6 text-gray-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">GitHub</h3>
                  <p className="text-gray-300">github.com/tuousername</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="Il tuo nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="tua@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="Dimmi del tuo progetto..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
                >
                  Invia Messaggio
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Il Tuo Nome. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </div>
  )
}