import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      {/* Header */}
      <header className="w-full px-6 py-4 border-b border-gray-200/50 backdrop-blur-sm bg-white/80 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue to-purple rounded-lg flex items-center justify-center">
              <Icon name="Cpu" size={20} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue to-purple bg-clip-text text-transparent">
              AIMakers API
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#features" className="text-gray-700 hover:text-blue transition-colors">Возможности</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue transition-colors">Как работает</a>
            <a href="#contact" className="text-gray-700 hover:text-blue transition-colors">Контакты</a>
            <Button 
              asChild 
              className="bg-gradient-to-r from-blue to-purple hover:from-blue/90 hover:to-purple/90 text-white"
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
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/img/0c7fb532-4fca-47d4-9c88-a7abb5552adc.jpg" 
            alt="AI Network" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue to-purple bg-clip-text text-transparent animate-fade-in">
              Упростите доступ к AI моделям
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
              Технический прокси-сервис для удобного доступа к OpenAI API через собственный интерфейс
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue to-purple hover:from-blue/90 hover:to-purple/90 text-white px-8 py-4 text-lg"
              >
                <Icon name="Zap" className="mr-2" />
                Получить API ключ
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-blue text-blue hover:bg-blue hover:text-white px-8 py-4 text-lg"
              >
                <Icon name="FileText" className="mr-2" />
                Документация
              </Button>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-light/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue to-purple bg-clip-text text-transparent">
              Возможности
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Простой и надежный способ интеграции с моделями OpenAI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue to-purple rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Key" size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl">Простая интеграция</CardTitle>
                <CardDescription>
                  Получите API ключ и URL - больше ничего не нужно
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Никаких сложных настроек. Просто замените URL в ваших запросах и используйте наш API ключ.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue to-purple rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl">Надежный прокси</CardTitle>
                <CardDescription>
                  Стабильное соединение с OpenAI API
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Мы обеспечиваем стабильную работу и проксирование всех ваших запросов к OpenAI.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue to-purple rounded-lg flex items-center justify-center mb-4">
                  <Icon name="DollarSign" size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl">Прозрачная цена</CardTitle>
                <CardDescription>
                  Цены OpenAI × 2 в рублях, без подписок
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Оплачиваете только за использование. Цены основаны на тарифах OpenAI с конвертацией в рубли и наценкой 2x.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue to-purple bg-clip-text text-transparent">
              Как это работает
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Три простых шага для начала работы с AIMakers API
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue to-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Получите доступ</h3>
              <p className="text-gray-600 text-lg">
                Зарегистрируйтесь и получите API ключ и URL для отправки запросов
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue to-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Замените URL</h3>
              <p className="text-gray-600 text-lg">
                В вашем коде замените официальный URL OpenAI на наш прокси URL
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue to-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Используйте API</h3>
              <p className="text-gray-600 text-lg">
                Отправляйте запросы как обычно - мы проксируем их в OpenAI
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-20">
              <img 
                src="/img/3a2702a0-8f23-4111-a80f-15e201203ef1.jpg" 
                alt="API Interface" 
                className="w-64 h-32 object-cover rounded"
              />
            </div>
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-4 text-center">Пример кода</h4>
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 overflow-x-auto">
                <code className="text-sm">
                  <span className="text-gray-400">// Замените URL в вашем коде</span><br />
                  <span className="text-blue-400">const</span> <span className="text-white">response</span> = <span className="text-blue-400">await</span> <span className="text-yellow-400">fetch</span>(<span className="text-green-400">'https://api.aimakers.dev/v1/chat/completions'</span>, &#123;<br />
                  &nbsp;&nbsp;<span className="text-white">method</span>: <span className="text-green-400">'POST'</span>,<br />
                  &nbsp;&nbsp;<span className="text-white">headers</span>: &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">'Authorization'</span>: <span className="text-green-400">'Bearer YOUR_API_KEY'</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">'Content-Type'</span>: <span className="text-green-400">'application/json'</span><br />
                  &nbsp;&nbsp;&#125;,<br />
                  &nbsp;&nbsp;<span className="text-white">body</span>: <span className="text-yellow-400">JSON</span>.<span className="text-yellow-400">stringify</span>(&#123; /* ваши параметры */ &#125;)<br />
                  &#125;);
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-gradient-to-r from-blue to-purple text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Готовы начать?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Получите доступ к AIMakers API за несколько минут
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-blue hover:bg-gray-100 px-8 py-4 text-lg"
              asChild
            >
              <a href="https://digital.tab-is.com/" target="_blank" rel="noopener noreferrer">
                <Icon name="ExternalLink" className="mr-2" />
                Получить API ключ
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue px-8 py-4 text-lg"
            >
              <Icon name="MessageCircle" className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue to-purple rounded-lg flex items-center justify-center">
                  <Icon name="Cpu" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">AIMakers API</h3>
              </div>
              <p className="text-gray-400">
                Технический прокси-сервис для доступа к моделям OpenAI
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Продукт</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Возможности</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">Как работает</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Центр помощи</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Связаться с нами</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Статус сервиса</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Правовая информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Условия использования</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 AIMakers API. Мы не аффилированы с OpenAI. Все права на модели принадлежат их правообладателям.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;