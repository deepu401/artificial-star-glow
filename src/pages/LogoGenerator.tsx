import React, { useRef } from "react";
import { Star, Sparkles, Zap, Download } from "lucide-react";
import html2canvas from "html2canvas";

interface LogoProps {
  size: number;
  showText?: boolean;
  compact?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size, showText = false, compact = false }) => {
  const glowIntensity = 0.9;
  const starSize = compact ? size * 0.6 : size * 0.8;
  
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Background for better visibility */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black rounded-lg"
        style={{ borderRadius: size > 64 ? '12px' : '8px' }}
      />

      {/* Outer Glow Ring */}
      <div
        className="absolute rounded-full"
        style={{
          width: starSize * 1.2,
          height: starSize * 1.2,
          background: `radial-gradient(circle, rgba(59, 130, 246, ${glowIntensity * 0.3}) 0%, rgba(147, 51, 234, ${glowIntensity * 0.2}) 50%, transparent 70%)`,
          filter: "blur(8px)",
        }}
      />

      {/* Middle Glow Ring */}
      <div
        className="absolute rounded-full"
        style={{
          width: starSize,
          height: starSize,
          background: `radial-gradient(circle, rgba(59, 130, 246, ${glowIntensity * 0.4}) 0%, rgba(147, 51, 234, ${glowIntensity * 0.3}) 60%, transparent 80%)`,
          filter: "blur(6px)",
        }}
      />

      {/* Main Star Container */}
      <div className="relative flex items-center justify-center">
        {/* Central Star */}
        <div className="relative">
          <Star
            size={starSize * 0.7}
            className="text-blue-400 fill-blue-400/20"
            style={{
              filter: `drop-shadow(0 0 ${starSize * 0.2}px rgba(59, 130, 246, ${glowIntensity}))`,
            }}
          />
          
          {/* Inner Sparkle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles
              size={starSize * 0.3}
              className="text-purple-400 fill-purple-400/30"
              style={{
                filter: `drop-shadow(0 0 ${starSize * 0.15}px rgba(147, 51, 234, ${glowIntensity * 0.8}))`,
              }}
            />
          </div>

          {/* Core Energy */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
              style={{
                width: starSize * 0.1,
                height: starSize * 0.1,
                boxShadow: `0 0 ${starSize * 0.3}px rgba(59, 130, 246, ${glowIntensity})`,
              }}
            />
          </div>
        </div>

        {/* Orbiting Elements - only for larger sizes */}
        {size > 64 && [...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: starSize * 1.1,
              height: starSize * 1.1,
              transform: `rotate(${i * 90}deg)`,
            }}
          >
            <div
              className="absolute"
              style={{
                top: '15%',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <Zap
                size={starSize * 0.08}
                className="text-cyan-400 fill-cyan-400/50"
                style={{
                  filter: `drop-shadow(0 0 ${starSize * 0.05}px rgba(34, 211, 238, ${glowIntensity * 0.6}))`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Text for larger versions */}
      {showText && size > 200 && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center">
          <div 
            className="text-xs font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            style={{ fontFamily: "'Orbitron', monospace" }}
          >
            ARTIFICIAL STAR
          </div>
        </div>
      )}
    </div>
  );
};

const LogoGenerator = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const logoSizes = [
    // Favicons
    { name: "Favicon 16x16", size: 16, type: "favicon" },
    { name: "Favicon 32x32", size: 32, type: "favicon" },
    { name: "Favicon 48x48", size: 48, type: "favicon" },
    { name: "Favicon 64x64", size: 64, type: "favicon" },
    
    // Apple Touch Icons
    { name: "Apple Touch Icon 57x57", size: 57, type: "apple" },
    { name: "Apple Touch Icon 60x60", size: 60, type: "apple" },
    { name: "Apple Touch Icon 72x72", size: 72, type: "apple" },
    { name: "Apple Touch Icon 76x76", size: 76, type: "apple" },
    { name: "Apple Touch Icon 114x114", size: 114, type: "apple" },
    { name: "Apple Touch Icon 120x120", size: 120, type: "apple" },
    { name: "Apple Touch Icon 144x144", size: 144, type: "apple" },
    { name: "Apple Touch Icon 152x152", size: 152, type: "apple" },
    { name: "Apple Touch Icon 180x180", size: 180, type: "apple" },
    
    // Android Icons
    { name: "Android 36x36", size: 36, type: "android" },
    { name: "Android 48x48", size: 48, type: "android" },
    { name: "Android 72x72", size: 72, type: "android" },
    { name: "Android 96x96", size: 96, type: "android" },
    { name: "Android 144x144", size: 144, type: "android" },
    { name: "Android 192x192", size: 192, type: "android" },
    
    // Social Media Profile Pictures
    { name: "Instagram Profile 110x110", size: 110, type: "social" },
    { name: "Facebook Profile 180x180", size: 180, type: "social" },
    { name: "Twitter Profile 128x128", size: 128, type: "social" },
    { name: "LinkedIn Profile 300x300", size: 300, type: "social", showText: true },
    { name: "YouTube Profile 800x800", size: 800, type: "social", showText: true },
    
    // Social Media Posts
    { name: "Instagram Square 1080x1080", size: 1080, type: "post", showText: true },
    { name: "Facebook Post 1200x1200", size: 1200, type: "post", showText: true },
    { name: "Twitter Post 1024x1024", size: 1024, type: "post", showText: true },
    
    // Business/Print Sizes
    { name: "Business Card 300x300", size: 300, type: "print", showText: true },
    { name: "Letterhead 400x400", size: 400, type: "print", showText: true },
    { name: "Large Print 600x600", size: 600, type: "print", showText: true },
    { name: "Banner 800x800", size: 800, type: "print", showText: true },
    
    // Web Icons
    { name: "Web Icon 256x256", size: 256, type: "web" },
    { name: "Web Icon 512x512", size: 512, type: "web" },
  ];

  const downloadLogo = async (size: number, name: string, showText?: boolean) => {
    try {
      // Create a temporary container
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'fixed';
      tempContainer.style.top = '-9999px';
      tempContainer.style.left = '-9999px';
      tempContainer.style.width = `${size}px`;
      tempContainer.style.height = `${size}px`;
      tempContainer.style.backgroundColor = 'transparent';
      tempContainer.style.pointerEvents = 'none';
      document.body.appendChild(tempContainer);

      // Render the logo directly into the container
      tempContainer.innerHTML = `
        <div style="width: ${size}px; height: ${size}px; position: relative; display: flex; align-items: center; justify-content: center;">
          <div style="position: absolute; width: ${size * 0.8 * 1.2}px; height: ${size * 0.8 * 1.2}px; background: radial-gradient(circle, rgba(59, 130, 246, 0.27) 0%, rgba(147, 51, 234, 0.18) 50%, transparent 70%); filter: blur(8px); border-radius: 50%;"></div>
          <div style="position: absolute; width: ${size * 0.8}px; height: ${size * 0.8}px; background: radial-gradient(circle, rgba(59, 130, 246, 0.36) 0%, rgba(147, 51, 234, 0.27) 60%, transparent 80%); filter: blur(6px); border-radius: 50%;"></div>
          <svg width="${size * 0.8 * 0.7}" height="${size * 0.8 * 0.7}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #60A5FA; fill: rgba(96, 165, 250, 0.2); filter: drop-shadow(0 0 ${size * 0.8 * 0.2}px rgba(59, 130, 246, 0.9));">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
          </svg>
          <div style="position: absolute; width: ${size * 0.8 * 0.1}px; height: ${size * 0.8 * 0.1}px; border-radius: 50%; background: linear-gradient(to right, #60A5FA, #A855F7); box-shadow: 0 0 ${size * 0.8 * 0.3}px rgba(59, 130, 246, 0.9);"></div>
        </div>
      `;

      // Wait a moment for rendering
      await new Promise(resolve => setTimeout(resolve, 100));

      // Capture with html2canvas
      const canvas = await html2canvas(tempContainer, {
        width: size,
        height: size,
        scale: 3,
        backgroundColor: null,
        useCORS: true,
        allowTaint: true,
        logging: false,
      });

      // Download the image
      const link = document.createElement('a');
      link.download = `${name.replace(/\s+/g, '_').toLowerCase()}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      
      // Trigger download without navigation
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up
      document.body.removeChild(tempContainer);

    } catch (error) {
      console.error('Error generating logo:', error);
      alert('Error generating logo. Please try again.');
    }
  };

  const groupedSizes = logoSizes.reduce((acc, item) => {
    if (!acc[item.type]) acc[item.type] = [];
    acc[item.type].push(item);
    return acc;
  }, {} as Record<string, typeof logoSizes>);

  const typeColors = {
    favicon: "border-blue-200 bg-blue-50",
    apple: "border-gray-200 bg-gray-50",
    android: "border-green-200 bg-green-50",
    social: "border-purple-200 bg-purple-50",
    post: "border-pink-200 bg-pink-50",
    print: "border-orange-200 bg-orange-50",
    web: "border-cyan-200 bg-cyan-50",
  };

  const typeNames = {
    favicon: "Website Favicons",
    apple: "Apple Touch Icons",
    android: "Android Icons",
    social: "Social Media Profiles",
    post: "Social Media Posts",
    print: "Print & Business",
    web: "Web Icons",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Artificial Star Logo Generator
          </h1>
          <p className="text-lg text-gray-600">
            Generate all favicon and social media logo sizes for your brand
          </p>
        </div>

        {Object.entries(groupedSizes).map(([type, sizes]) => (
          <div key={type} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full ${typeColors[type as keyof typeof typeColors]?.split(' ')[1] || 'bg-gray-200'}`} />
              {typeNames[type as keyof typeof typeNames]}
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
              {sizes.map((logoSize) => (
                <div
                  key={logoSize.name}
                  className={`p-4 rounded-lg border-2 ${typeColors[type as keyof typeof typeColors]} hover:shadow-lg transition-shadow`}
                >
                  <div className="flex flex-col items-center">
                    <div className="mb-3 flex items-center justify-center" style={{ height: '80px' }}>
                      <Logo
                        size={Math.min(logoSize.size, 64)}
                        showText={logoSize.showText}
                        compact={logoSize.size < 64}
                      />
                    </div>
                    
                    <div className="text-center mb-3">
                      <div className="text-sm font-medium text-gray-800">
                        {logoSize.size}×{logoSize.size}
                      </div>
                      <div className="text-xs text-gray-600">
                        {logoSize.name.replace(/\d+x\d+/, '').trim()}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => downloadLogo(logoSize.size, logoSize.name, logoSize.showText)}
                      className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition-colors"
                    >
                      <Download size={12} />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Instructions */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Usage Instructions</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
            <div>
              <h4 className="font-medium mb-2">Website Favicons:</h4>
              <ul className="space-y-1">
                <li>• 16x16: Standard favicon</li>
                <li>• 32x32: High-resolution favicon</li>
                <li>• 48x48: Windows taskbar</li>
                <li>• 64x64: High-DPI displays</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Social Media:</h4>
              <ul className="space-y-1">
                <li>• Instagram: 110x110 profile</li>
                <li>• Facebook: 180x180 profile</li>
                <li>• Twitter: 128x128 profile</li>
                <li>• LinkedIn: 300x300 profile</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Mobile Apps:</h4>
              <ul className="space-y-1">
                <li>• Apple Touch Icons: Various iOS sizes</li>
                <li>• Android Icons: Various Android sizes</li>
                <li>• Use appropriate sizes for your app</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Print & Business:</h4>
              <ul className="space-y-1">
                <li>• Business cards: 300x300</li>
                <li>• Letterheads: 400x400</li>
                <li>• Large prints: 600x600+</li>
                <li>• High resolution for quality</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden canvas for downloads */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      <style dangerouslySetInnerHTML={{
        __html: `@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');`
      }} />
    </div>
  );
};

export default LogoGenerator;