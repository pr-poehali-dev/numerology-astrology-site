import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-purple-950/80 backdrop-blur-sm border-b border-purple-800/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Star" className="text-purple-300" size={24} />
              <span className="text-xl font-bold text-white">АСТРАЛЬНЫЙ ПУТЬ</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-purple-100 hover:text-white transition-colors">Главная</a>
              <a href="#services" className="text-purple-100 hover:text-white transition-colors">Услуги</a>
              <a href="#about" className="text-purple-100 hover:text-white transition-colors">Обо мне</a>
              <a href="#contact" className="text-purple-100 hover:text-white transition-colors">Контакты</a>
            </div>
            <Button variant="outline" className="border-purple-300 text-purple-100 hover:bg-purple-800">
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="inline-flex items-center space-x-2 mb-6">
              <Badge variant="outline" className="bg-purple-900/50 border-purple-400 text-purple-200 px-4 py-1">
                <Icon name="Sparkles" size={16} className="mr-2" />
                Персональные прогнозы
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Откройте тайны
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                вашей судьбы
              </span>
            </h1>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Персональные гороскопы, нумерологические расчёты и астрологические прогнозы 
              для понимания вашего жизненного пути
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                <Icon name="Calendar" size={20} className="mr-2" />
                Получить прогноз
              </Button>
              <Button variant="outline" size="lg" className="border-purple-300 text-purple-100 hover:bg-purple-800 px-8 py-3">
                <Icon name="Play" size={20} className="mr-2" />
                Как это работает
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Мои услуги</h2>
            <p className="text-purple-200 text-lg max-w-2xl mx-auto">
              Индивидуальный подход к каждому клиенту с использованием древних знаний и современных методик
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-purple-900/30 border-purple-700/50 backdrop-blur-sm hover:bg-purple-800/40 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <Icon name="Calculator" className="text-purple-300" size={32} />
                </div>
                <CardTitle className="text-white text-xl">Нумерология</CardTitle>
                <CardDescription className="text-purple-200">
                  Расчёт числа судьбы, совместимости и жизненного пути
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-purple-100">
                    <Icon name="Check" size={16} className="text-purple-400 mr-2" />
                    Число судьбы и миссии
                  </div>
                  <div className="flex items-center text-purple-100">
                    <Icon name="Check" size={16} className="text-purple-400 mr-2" />
                    Совместимость с партнёром
                  </div>
                  <div className="flex items-center text-purple-100">
                    <Icon name="Check" size={16} className="text-purple-400 mr-2" />
                    Благоприятные даты
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Заказать расчёт
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-purple-900/30 border-purple-700/50 backdrop-blur-sm hover:bg-purple-800/40 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <Icon name="Moon" className="text-purple-300" size={32} />
                </div>
                <CardTitle className="text-white text-xl">Астрология</CardTitle>
                <CardDescription className="text-purple-200">
                  Персональные гороскопы и астрологические прогнозы
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-purple-100">
                    <Icon name="Check" size={16} className="text-purple-400 mr-2" />
                    Натальная карта
                  </div>
                  <div className="flex items-center text-purple-100">
                    <Icon name="Check" size={16} className="text-purple-400 mr-2" />
                    Прогноз на год
                  </div>
                  <div className="flex items-center text-purple-100">
                    <Icon name="Check" size={16} className="text-purple-400 mr-2" />
                    Синастрия отношений
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Получить гороскоп
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-purple-900/30 border-purple-700/50 backdrop-blur-sm hover:bg-purple-800/40 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <Icon name="Users" className="text-purple-300" size={32} />
                </div>
                <CardTitle className="text-white text-xl">Консультации</CardTitle>
                <CardDescription className="text-purple-200">
                  Личные сессии для глубокого анализа жизненной ситуации
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-purple-100">
                    <Icon name="Check" size={16} className="text-purple-400 mr-2" />
                    Онлайн консультация
                  </div>
                  <div className="flex items-center text-purple-100">
                    <Icon name="Check" size={16} className="text-purple-400 mr-2" />
                    Детальный разбор
                  </div>
                  <div className="flex items-center text-purple-100">
                    <Icon name="Check" size={16} className="text-purple-400 mr-2" />
                    Рекомендации
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Записаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-purple-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Обо мне</h2>
              <p className="text-purple-200 text-lg mb-6 leading-relaxed">
                Меня зовут Елена, и я практикующий астролог и нумеролог с 15-летним опытом. 
                Моя миссия — помочь людям понять свой жизненный путь и найти гармонию через 
                древние знания звёзд и чисел.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Icon name="Award" className="text-purple-400 mr-3" size={20} />
                  <span className="text-purple-100">Сертифицированный астролог ISAR</span>
                </div>
                <div className="flex items-center">
                  <Icon name="BookOpen" className="text-purple-400 mr-3" size={20} />
                  <span className="text-purple-100">Автор 3 книг по нумерологии</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Heart" className="text-purple-400 mr-3" size={20} />
                  <span className="text-purple-100">Более 2000 довольных клиентов</span>
                </div>
              </div>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать мне
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl overflow-hidden relative">
                <img 
                  src="/img/c656edda-098a-4aae-af3b-98db7883022f.jpg" 
                  alt="Мистический космический фон" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-purple-900/80 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-purple-100 text-sm italic">
                      "Звёзды не принуждают, они лишь располагают к..."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Свяжитесь со мной</h2>
            <p className="text-purple-200 text-lg">
              Готовы узнать, что говорят звёзды о вашем будущем?
            </p>
          </div>
          
          <Card className="bg-purple-900/30 border-purple-700/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Icon name="Phone" className="text-purple-400 mr-4" size={24} />
                    <div>
                      <p className="text-white font-semibold">Телефон</p>
                      <p className="text-purple-200">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" className="text-purple-400 mr-4" size={24} />
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-purple-200">elena@astralway.ru</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Clock" className="text-purple-400 mr-4" size={24} />
                    <div>
                      <p className="text-white font-semibold">Время работы</p>
                      <p className="text-purple-200">Пн-Пт: 10:00-20:00</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white mb-2">Ваше имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 bg-purple-800/50 border border-purple-600 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 bg-purple-800/50 border border-purple-600 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Сообщение</label>
                    <textarea 
                      rows={3}
                      className="w-full px-4 py-2 bg-purple-800/50 border border-purple-600 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                      placeholder="Расскажите, что вас интересует..."
                    />
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-950 border-t border-purple-800/20 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Star" className="text-purple-300" size={24} />
              <span className="text-xl font-bold text-white">АСТРАЛЬНЫЙ ПУТЬ</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>
          <div className="border-t border-purple-800/20 mt-6 pt-6 text-center">
            <p className="text-purple-300">© 2024 Астральный путь. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;