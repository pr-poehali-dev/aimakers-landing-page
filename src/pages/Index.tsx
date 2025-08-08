import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="w-full px-6 py-4 border-b border-gray-800/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon name="Cpu" size={18} className="text-white" />
            </div>
            <h1 className="text-2xl font-semibold text-foreground">
              AIMakers API
            </h1>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Возможности</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">Как работает</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
            <Button 
              asChild 
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white font-medium px-6 py-2 rounded-xl"
            >
              <a href="https://digital.tab-is.com/" target="_blank" rel="noopener noreferrer">
                Начать работу
              </a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Упростите доступ
            </span>
            <br />
            <span className="text-foreground">к AI моделям</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Технический прокси-сервис для удобного доступа к OpenAI API через собственный интерфейс
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white px-8 py-4 text-lg rounded-xl font-medium"
            >
              <Icon name="ArrowRight" className="mr-2" />
              Получить API ключ
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-gray-700 text-foreground hover:bg-secondary px-8 py-4 text-lg rounded-xl font-medium"
            >
              <Icon name="FileText" className="mr-2" />
              Документация
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Возможности
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Простой и надежный способ интеграции с моделями OpenAI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-800 bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Key" size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">Простая интеграция</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Получите API ключ и URL - больше ничего не нужно
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Никаких сложных настроек. Просто замените URL в ваших запросах и используйте наш API ключ.
                </p>
              </CardContent>
            </Card>

            <div className="text-center group">
              <div className="w-16 h-16 bg-white border border-gray-200 rounded-sm flex items-center justify-center mx-auto mb-8 group-hover:bg-black group-hover:border-black transition-all duration-300">
                <Icon name="Shield" size={28} className="text-gray-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-light mb-4 text-black">Надежный прокси</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Стабильное соединение с OpenAI API. Мы обеспечиваем надежность ваших запросов.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-white border border-gray-200 rounded-sm flex items-center justify-center mx-auto mb-8 group-hover:bg-black group-hover:border-black transition-all duration-300">
                <Icon name="DollarSign" size={28} className="text-gray-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-light mb-4 text-black">Прозрачная цена</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Цены OpenAI × 2 в рублях, без подписок. Платите только за использование.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-black tracking-tight">
              Как это работает
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              Три простых шага для начала работы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-lg font-light text-black">01</span>
              </div>
              <h3 className="text-2xl font-light mb-6 text-black">Получите доступ</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Зарегистрируйтесь и получите API ключ и URL для отправки запросов
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-lg font-light text-black">02</span>
              </div>
              <h3 className="text-2xl font-light mb-6 text-black">Замените URL</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                В вашем коде замените официальный URL OpenAI на наш прокси URL
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-lg font-light text-black">03</span>
              </div>
              <h3 className="text-2xl font-light mb-6 text-black">Используйте API</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Отправляйте запросы как обычно — мы проксируем их в OpenAI
              </p>
            </div>
          </div>

          <div className="mt-20 bg-gray-50 border border-gray-100 rounded-sm p-12">
            <h4 className="text-xl font-light mb-8 text-center text-black">Пример интеграции</h4>
            <div className="bg-white border border-gray-200 rounded-sm p-8 overflow-x-auto">
              <code className="text-sm font-mono text-gray-700 leading-relaxed">
                <span className="text-gray-400">// Замените URL в вашем коде</span><br />
                <span className="text-black">const</span> <span className="text-gray-700">response</span> = <span className="text-black">await</span> <span className="text-gray-700">fetch</span>(<span className="text-gray-500">'https://api.aimakers.dev/v1/chat/completions'</span>, &#123;<br />
                &nbsp;&nbsp;<span className="text-gray-700">method</span>: <span className="text-gray-500">'POST'</span>,<br />
                &nbsp;&nbsp;<span className="text-gray-700">headers</span>: &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">'Authorization'</span>: <span className="text-gray-500">'Bearer YOUR_API_KEY'</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">'Content-Type'</span>: <span className="text-gray-500">'application/json'</span><br />
                &nbsp;&nbsp;&#125;,<br />
                &nbsp;&nbsp;<span className="text-gray-700">body</span>: <span className="text-black">JSON</span>.<span className="text-gray-700">stringify</span>(&#123; /* ваши параметры */ &#125;)<br />
                &#125;);
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
            Готовы начать?
          </h2>
          <p className="text-xl mb-12 text-gray-300 font-light leading-relaxed">
            Получите доступ к AIMakers API за несколько минут
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-black hover:bg-gray-100 font-light px-10 py-4 text-lg rounded-sm"
              asChild
            >
              <a href="https://digital.tab-is.com/" target="_blank" rel="noopener noreferrer">
                <Icon name="ArrowRight" className="mr-2" />
                Получить API ключ
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border border-gray-600 text-white hover:bg-white hover:text-black font-light px-10 py-4 text-lg rounded-sm"
            >
              <Icon name="MessageCircle" className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 text-gray-600 px-6 py-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                  <Icon name="Cpu" size={18} className="text-white" />
                </div>
                <h3 className="text-xl font-light text-black">AIMakers API</h3>
              </div>
              <p className="text-gray-500 font-light leading-relaxed">
                Технический прокси-сервис для доступа к моделям OpenAI
              </p>
            </div>
            
            <div>
              <h4 className="font-light mb-6 text-black">Продукт</h4>
              <ul className="space-y-3 text-gray-500 font-light">
                <li><a href="#features" className="hover:text-black transition-colors">Возможности</a></li>
                <li><a href="#how-it-works" className="hover:text-black transition-colors">Как работает</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-black transition-colors">API Reference</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-light mb-6 text-black">Поддержка</h4>
              <ul className="space-y-3 text-gray-500 font-light">
                <li><a href="#" className="hover:text-black transition-colors">Центр помощи</a></li>
                <li><a href="#contact" className="hover:text-black transition-colors">Связаться с нами</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Статус сервиса</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-light mb-6 text-black">Правовая информация</h4>
              <ul className="space-y-3 text-gray-500 font-light">
                <li><a href="#" className="hover:text-black transition-colors">Условия использования</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-16 pt-8 text-center text-gray-400 font-light">
            <p>© 2024 AIMakers API. Мы не аффилированы с OpenAI. Все права на модели принадлежат их правообладателям.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;