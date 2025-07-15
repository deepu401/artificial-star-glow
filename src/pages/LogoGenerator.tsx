import React, { useRef } from "react";
import { Star, Sparkles, Zap, Download } from "lucide-react";

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

  const downloadLogo = async (size: number, name: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = size;
    canvas.height = size;

    // Create a temporary div to render the logo
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.top = '-9999px';
    tempDiv.style.width = `${size}px`;
    tempDiv.style.height = `${size}px`;
    document.body.appendChild(tempDiv);

    // This is a simplified version - in a real app, you'd need to use html2canvas or similar
    // For now, we'll create a basic canvas version
    
    // Background
    const gradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
    gradient.addColorStop(0, '#000000');
    gradient.addColorStop(0.5, '#374151');
    gradient.addColorStop(1, '#000000');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    // Star shape (simplified)
    ctx.fillStyle = '#60A5FA';
    ctx.shadowColor = '#3B82F6';
    ctx.shadowBlur = size * 0.1;
    
    const centerX = size / 2;
    const centerY = size / 2;
    const outerRadius = size * 0.3;
    const innerRadius = size * 0.15;
    
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = (i * Math.PI * 2) / 5 - Math.PI / 2;
      const x = centerX + Math.cos(angle) * outerRadius;
      const y = centerY + Math.sin(angle) * outerRadius;
      
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
      
      const innerAngle = angle + Math.PI / 5;
      const innerX = centerX + Math.cos(innerAngle) * innerRadius;
      const innerY = centerY + Math.sin(innerAngle) * innerRadius;
      ctx.lineTo(innerX, innerY);
    }
    ctx.closePath();
    ctx.fill();

    // Center glow
    const centerGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, size * 0.1);
    centerGradient.addColorStop(0, '#60A5FA');
    centerGradient.addColorStop(1, '#A855F7');
    ctx.fillStyle = centerGradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, size * 0.05, 0, Math.PI * 2);
    ctx.fill();

    document.body.removeChild(tempDiv);

    // Download
    const link = document.createElement('a');
    link.download = `${name.replace(/\s+/g, '_').toLowerCase()}.png`;
    link.href = canvas.toDataURL();
    link.click();
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
                      onClick={() => downloadLogo(logoSize.size, logoSize.name)}
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