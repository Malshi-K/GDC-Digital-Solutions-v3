'use client';

import React, { useEffect, useRef } from 'react';

export default function DigitalAgencyPromo() {
  const canvasRef = useRef(null);
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const words = ['Websites', 'Google/Facebook Ads', 'SEO', 'Business Analysis'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };
    
    resize();
    window.addEventListener('resize', resize);

    let rotation = 0;
    const centerX = canvas.width / dpr / 2;
    const centerY = canvas.height / dpr / 2;
    const size = Math.min(centerX, centerY) * 1.2;
    const stripes = 48;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      
      rotation += 0.005;

      // Create triangular stripe pattern
      for (let i = 0; i < stripes; i++) {
        const progress = i / stripes;
        const angle = rotation + progress * Math.PI * 2;
        
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle);
        
        // Create dynamic triangle size based on wave function
        const wave = Math.sin(rotation * 2 + progress * Math.PI * 6) * 0.3 + 0.7;
        const triangleSize = size * wave;
        
        ctx.beginPath();
        // Draw triangle from center
        ctx.moveTo(0, -triangleSize * 0.6);
        ctx.lineTo(-triangleSize * 0.5, triangleSize * 0.4);
        ctx.lineTo(triangleSize * 0.5, triangleSize * 0.4);
        ctx.closePath();
        
        // Alternate colors for stripes
        if (i % 2 === 0) {
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, triangleSize);
          gradient.addColorStop(0, 'rgba(116, 7, 200, 0.5)'); // #7407c8
          gradient.addColorStop(1, 'rgba(194, 3, 157, 0.3)'); // #c2039d
          ctx.fillStyle = gradient;
        } else {
          ctx.fillStyle = 'rgba(245, 243, 255, 0.9)';
        }
        
        ctx.fill();
        ctx.strokeStyle = 'rgba(116, 7, 200, 0.4)';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.restore();
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-pink-50 overflow-hidden">
      <div className="container mx-auto px-24 py-8 relative">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-4 z-10 mt-8 lg:mt-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight" style={{ color: '#000' }}>
              We do{' '}
              <span className="inline-block relative align-top" style={{ minWidth: '650px', height: '1.2em' }}>
                {words.map((word, index) => (
                  <span
                    key={index}
                    className="absolute left-0 top-0 transition-all duration-500 ease-in-out whitespace-nowrap"
                    style={{
                      color: '#7407c8',
                      opacity: currentWordIndex === index ? 1 : 0,
                      transform: currentWordIndex === index ? 'translateY(0)' : 'translateY(20px)'
                    }}
                  >
                    {word}
                  </span>
                ))}
              </span>              
            </h1>

            <p className="text-base sm:text-lg lg:text-xl max-w-lg leading-relaxed" style={{ color: '#737373' }}>
              We make exceptional digital marketing, web & app development, consulting, for startups and enterprises.
            </p>

            <button 
              className="text-white px-8 py-4 rounded-full text-base sm:text-lg font-medium transition-all shadow-lg hover:shadow-xl"
              style={{ 
                background: 'linear-gradient(135deg, #7407c8 0%, #c2039d 100%)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Contact us
            </button>
          </div>

          {/* Right Content - 3D Triangle Animation */}
          <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] xl:h-[800px]">
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>        
      </div>
    </div>
  );
}