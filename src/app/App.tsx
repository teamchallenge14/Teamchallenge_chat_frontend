import { Button } from '@/components/ui/button';

function App() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-slate-50">
      <h1 className="text-4xl font-bold text-slate-900">TeamChallenge Chat</h1>
      <p className="text-slate-500">Frontend setup is complete!</p>
      <Button>Click me (Shadcn)</Button>
    </div>
  );
}

export default App;
