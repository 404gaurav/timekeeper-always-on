import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const ClockDisplay = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const timeString = formatTime(time);
  const dateString = formatDate(time);

  return (
    <div className="min-h-screen bg-clock-gradient flex items-center justify-center p-4">
      <Card className="bg-card/30 backdrop-blur-sm border-primary/20 p-8 text-center max-w-md w-full">
        <div className="space-y-6">
          {/* Time Display */}
          <div className="relative">
            <h1 
              className="text-6xl md:text-7xl font-mono font-bold text-foreground tracking-wider shadow-time-glow transition-smooth"
              style={{ 
                textShadow: 'var(--time-glow)',
                fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace'
              }}
            >
              {timeString}
            </h1>
          </div>
          
          {/* Date Display */}
          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {dateString}
            </p>
          </div>
          
          {/* Subtle accent line */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full opacity-60"></div>
        </div>
      </Card>
    </div>
  );
};

export default ClockDisplay;