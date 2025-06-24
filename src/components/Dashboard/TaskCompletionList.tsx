import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Circle, BotMessageSquare, Image as ImageIcon, Wand2, Send, CheckSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Task {
  id: number;
  title: string;
  duration: string;
  status: 'completed' | 'in_progress' | 'pending';
  description?: string;
}

const tasksData: Task[] = [
  {
    id: 1,
    title: 'Project Overview',
    duration: '1:30',
    status: 'completed' as const,
  },
  {
    id: 2,
    title: 'Seed Project',
    duration: '0:02',
    status: 'completed' as const,
  },
  {
    id: 3,
    title: 'Components Created',
    duration: '1:00',
    status: 'completed' as const,
  },
  {
    id: 4,
    title: 'Pages Created',
    duration: '1:30',
    status: 'completed' as const,
  },
  {
    id: 5,
    title: 'Deploying Application',
    duration: '0:49',
    status: 'in_progress' as const,
    description: 'Wohoo! The deployment is completed. Please check the preview screen for the output.',
  },
];

const TaskCompletionList: React.FC = () => {
  return (
    <Card className="w-full h-full bg-card/50 border-border/50 flex flex-col">
      <CardHeader>
        <CardTitle className="text-foreground text-lg font-normal tracking-wide">
          Design a Spotify clone with a Doraemon-inspired color themes
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow px-6 py-0">
        <div className="relative">
          {tasksData.map((task, index) => (
            <div key={task.id} className="flex items-start gap-4 mb-4">
              <div className="flex flex-col items-center self-stretch">
                {task.status === 'completed' ? (
                  <CheckCircle2 className="h-6 w-6 text-primary bg-primary-foreground rounded-full" fill='hsl(var(--primary))' />
                ) : (
                  <BotMessageSquare className="h-6 w-6 text-primary" />
                )}
                {index < tasksData.length - 1 && (
                  <div className="w-px h-full bg-border/80 my-2"></div>
                )}
              </div>
              <div className="-mt-1">
                <p className="font-medium text-foreground">
                  {task.title} <span className="text-muted-foreground font-mono text-sm ml-2">{task.duration}</span>
                </p>
                {task.description && <p className="text-muted-foreground text-sm mt-1">{task.description}</p>}
              </div>
            </div>
          ))}

          <div className="flex items-start gap-4 mb-4 ml-1 pl-2 border-l border-dashed border-border/80">
             <div className="-ml-[13.5px]">
                <div className="h-6 w-6 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-border"></div>
                </div>
             </div>
            <div className="-mt-1 flex-1">
              <p className="text-muted-foreground text-sm">
                change the background color to black
              </p>
            </div>
          </div>

           <div className="flex items-start gap-4 mb-4">
              <div className="flex flex-col items-center self-stretch">
                 <CheckSquare className="h-6 w-6 text-success" fill="#1a2d26" />
              </div>
              <div className="-mt-1 flex-1">
                <p className="font-medium text-foreground">
                    Edit completed! Updated 24 files successfully.
                </p>
              </div>
            </div>

        </div>
      </CardContent>
      <CardFooter className="p-4">
        <div className="relative w-full">
          <Input
            placeholder="Ask me"
            className="bg-muted border-border/80 focus-visible:ring-primary focus-visible:ring-offset-0 pl-4 pr-24 h-12"
          />
          <div className="absolute inset-y-0 right-2 flex items-center space-x-1">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <ImageIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Wand2 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TaskCompletionList;
