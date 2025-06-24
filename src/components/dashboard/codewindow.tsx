import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FileData {
  name: string;
  content: string;
}

const filesData: FileData[] = [
  {
    name: 'src/index.css',
    content: `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\nbody {\n  background-color: hsl(var(--background));\n  color: hsl(var(--foreground));\n}`,
  },
  {
    name: 'src/App.tsx',
    content: `import React from 'react';\n\nfunction App() {\n  return (\n    <div className="App">\n      <h1>Ascendion Dashboard</h1>\n    </div>\n  );\n}\n\nexport default App;`,
  },
  {
    name: 'tailwind.config.ts',
    content: `import type { Config } from 'tailwindcss';\n\nexport default {\n  content: ["./src/**/*.{js,ts,jsx,tsx}"],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n} satisfies Config;`,
  },
  {
    name: 'package.json',
    content: `{\n  "name": "ascendion-dashboard-clone",\n  "version": "0.1.0",\n  "private": true,\n  "dependencies": {\n    "react": "^18.3.1",\n    "tailwindcss": "^3.4.11"\n  }\n}`,
  },
];

const CodeWindow: React.FC = () => {
  const [activeTab, setActiveTab] = useState('code');
  const [selectedFile, setSelectedFile] = useState<string>(filesData[0].name);
  const [searchTerm, setSearchTerm] = useState('');

  const activeFileContent = filesData.find((file) => file.name === selectedFile)?.content || 'File not found.';
  const lineCount = activeFileContent.split('\n').length;

  const filteredFiles = filesData.filter(file => 
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="w-full h-full bg-card/50 border-border/50 flex flex-col">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full flex-grow flex flex-col">
        <CardHeader className="pb-0">
            <TabsList className="grid w-full grid-cols-4 bg-muted/50">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
                <TabsTrigger value="logs">Logs</TabsTrigger>
                <TabsTrigger value="artifacts">Artifacts</TabsTrigger>
            </TabsList>
        </CardHeader>
        <TabsContent value="code" className="flex-grow m-0">
            <div className="grid grid-cols-[250px_1fr] h-full">
                <div className="border-r border-border/50 flex flex-col">
                    <div className="p-2 border-b border-border/50">
                        <div className='relative'>
                            <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
                            <Input 
                                placeholder='Search files...' 
                                className='pl-9 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <ScrollArea className="flex-grow">
                        <div className="p-2 space-y-1">
                        {filteredFiles.map((file) => (
                            <Button
                            key={file.name}
                            variant="ghost"
                            className={cn(
                                'w-full justify-start text-sm font-normal',
                                selectedFile === file.name && 'bg-primary/20 text-foreground'
                            )}
                            onClick={() => setSelectedFile(file.name)}
                            >
                            <FileText className="mr-2 h-4 w-4" />
                            {file.name}
                            </Button>
                        ))}
                        </div>
                    </ScrollArea>
                </div>
                <div className="flex flex-col h-full">
                    <div className="p-2 border-b border-border/50 text-sm text-foreground">
                        {selectedFile}
                    </div>
                    <ScrollArea className="flex-grow bg-muted/30">
                        <div className="flex font-mono text-sm p-4">
                            <div className="text-right pr-4 text-muted-foreground/50 select-none">
                                {Array.from({ length: lineCount }, (_, i) => i + 1).map(i => <div key={i}>{i}</div>)}
                            </div>
                            <pre className='text-foreground'><code>{activeFileContent}</code></pre>
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </TabsContent>
        <TabsContent value="preview" className='flex-grow m-0 flex items-center justify-center'>
            <p className='text-muted-foreground'>Preview not available.</p>
        </TabsContent>
        <TabsContent value="logs" className='flex-grow m-0 flex items-center justify-center'>
            <p className='text-muted-foreground'>Logs will be displayed here.</p>
        </TabsContent>
         <TabsContent value="artifacts" className='flex-grow m-0 flex items-center justify-center'>
            <p className='text-muted-foreground'>Build artifacts will be available here.</p>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default CodeWindow;
