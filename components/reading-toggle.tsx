"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, Zap } from 'lucide-react';
import { ReactNode } from 'react';

interface ReadingToggleProps {
  quickContent: ReactNode;
  fullContent: ReactNode;
}

export function ReadingToggle({ quickContent, fullContent }: ReadingToggleProps) {
  const [isQuickRead, setIsQuickRead] = useState(true);

  return (
    <div className="space-y-6">
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            variant={isQuickRead ? "default" : "outline"}
            size="sm"
            onClick={() => setIsQuickRead(true)}
            className="flex-1 min-h-[44px]"
          >
            <Zap className="w-4 h-4 mr-2" />
            Quick Read (2 min)
          </Button>
          <Button
            variant={!isQuickRead ? "default" : "outline"}
            size="sm"
            onClick={() => setIsQuickRead(false)}
            className="flex-1 min-h-[44px]"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Full Story (5 min)
          </Button>
        </div>
      </Card>

      <div className="min-h-[400px]">
        {isQuickRead ? quickContent : fullContent}
      </div>
    </div>
  );
}