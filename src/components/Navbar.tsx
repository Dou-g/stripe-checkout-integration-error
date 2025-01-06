import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import UserMenu from './UserMenu';

interface NavbarProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
  onLoginClick: () => void; 
  showHero: boolean;
}

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=2000',
    title: 'Découvrez notre nouvelle collection',
    subtitle: 'Des pièces uniques sélectionnées avec soin pour vous offrir style et élégance au quotidien'
  },
  {
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=2000',
    title: 'Nos créations exclusives',
    subtitle: 'Une sélection raffinée pour votre style personnel'
  },
  {
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2000',
    title: 'L\'élégance à la sénégalaise',
    subtitle: 'Découvrez notre savoir-faire unique'
  }
];

export default function Navbar({ cartItemsCount, onCartClick, onNavigate, currentPage, onLoginClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <> 
    {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-30 bg-black bg-opacity-70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-white lg:hidden hover:text-gray-200"
              >
                <Menu className="h-6 w-6" />
              </button>
              <span 
                onClick={() => onNavigate('home')}
                className="ml-2 text-2xl font-bold cursor-pointer text-white hover:text-gray-200 transition-colors"
              >
                BG
              </span>
              <DesktopMenu onNavigate={onNavigate} currentPage={currentPage} />
            </div>
            
            <UserMenu
              cartItemsCount={cartItemsCount}
              onCartClick={onCartClick}
              onLoginClick={onLoginClick}
            />
          </div>
        </div>
      </nav>

      {currentPage === 'home' && ( // Render Swiper only on the home page
        <div className="relative h-[600px] overflow-hidden pt-24">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }} 
            loop={true} 
            modules={[Autoplay]} 
            className="absolute inset-0 h-full w-full z-0"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-white z-10">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              modules={[Autoplay]}
              className="w-full"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl">{slide.subtitle}</p>
                    <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
                      <button
                        onClick={() => onNavigate('shop')}
                        className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-medium inline-flex items-center justify-center"
                      >
                        Découvrir nos produits
                      </button>
                      <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200 text-lg font-medium inline-flex items-center justify-center">
                        En savoir plus
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      {currentPage !== 'home' && (
        <div className="pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          </div>
        </div>
      )}

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={onNavigate} // Ensure onNavigate is passed
        currentPage={currentPage}
      />
    </>
  );
}