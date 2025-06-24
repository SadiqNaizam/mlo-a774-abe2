import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface LogEntry {
  timestamp: string;
  level: 'INFO' | 'WARN' | 'ERROR' | 'DEBUG';
  component: string;
  message: string;
}

const logData: LogEntry[] = [
  { timestamp: '2025-06-04T19:23:40.392Z', level: 'INFO', component: 'CodeWindow', message: 'Iframe loaded successfully' },
  { timestamp: '2025-06-04T19:26:41.264Z', level: 'INFO', component: 'CodeWindow', message: 'Processing edit response: [...]' },
  { timestamp: '2025-06-04T19:26:41.265Z', level: 'INFO', component: 'CodeWindow', message: 'Processing direct array response format' },
  { timestamp: '2025-06-04T19:26:41.266Z', level: 'DEBUG', component: 'CodeWindow', message: 'Processing direct edit response' },
  { timestamp: '2025-06-04T19:26:41.266Z', level: 'INFO', component: 'CodeWindow', message: 'Successfully parsed response as JSON' },
  { timestamp: '2025-06-04T19:26:41.267Z', level: 'ERROR', component: 'API', message: 'Failed to fetch artifacts: 404 Not Found' },
  { timestamp: '2025-06-04T19:26:41.267Z', level: 'INFO', component: 'CodeWindow', message: 'Processing 12 edited files' },
  { timestamp: '2025-06-04T19:26:41.267Z', level: 'DEBUG', component: 'CodeWindow', message: 'Processed file: fileName' },
  { timestamp: '2025-06-04T19:26:41.267Z', level: 'DEBUG', component: 'CodeWindow', message: 'Processed file: content' },
  { timestamp: '2025-06-04T19:26:41.267Z', level: 'WARN', component: 'Parser', message: 'Found deprecated syntax in tailwind.config.ts' },
  { timestamp: '2025-06-04T19:26:41.267Z', level: 'DEBUG', component: 'CodeWindow', message: 'Processed file: fileName' },
  { timestamp: '2025-06-04T19:26:41.267Z', level: 'DEBUG', component: 'CodeWindow', message: 'Processed file: content' },
  { timestamp: '2025-06-04T19:26:41.268Z', level: 'DEBUG', component: 'CodeWindow', message: 'Processed file: fileName' },
  { timestamp: '2025-06-04T19:26:41.268Z', level: 'INFO', component: 'Renderer', message: 'Render complete. Displaying output.' },
];

const getLogLevelClass = (level: LogEntry['level']) => {
  switch (level) {
    case 'INFO':
      return 'text-green-400';
    case 'WARN':
      return 'text-yellow-400';
    case 'ERROR':
      return 'text-red-500';
    case 'DEBUG':
      return 'text-blue-400';
    default:
      return 'text-muted-foreground';
  }
};

const LogViewer: React.FC = () => {
  return (
    <Card className="w-full h-full bg-card/50 border-border/50 flex flex-col">
      <CardHeader>
        <CardTitle className="text-foreground">Logs</CardTitle>
        <CardDescription>Real-time stream of application events.</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden">
        <ScrollArea className="h-full pr-4">
          <div className="font-mono text-xs text-foreground">
            {logData.map((log, index) => (
              <div key={index} className="flex items-start gap-3 mb-1">
                <span className="text-muted-foreground/60 whitespace-nowrap">{log.timestamp}</span>
                <span className={cn('font-bold', getLogLevelClass(log.level))}>[{log.level}]</span>
                <span className="text-primary/80">[{log.component}]</span>
                <span className="whitespace-pre-wrap">{log.message}</span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default LogViewer;
