@tailwind base;
@tailwind components;
@tailwind utilities;

/* Definition of the design system. All colors, gradients, fonts, etc should be defined here. 
All colors MUST be HSL.
*/

@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

@layer base {
  :root {
    --background: 220 20% 7%;
    --foreground: 150 10% 85%;

    --card: 220 18% 10%;
    --card-foreground: 150 10% 85%;

    --popover: 220 18% 10%;
    --popover-foreground: 150 10% 85%;

    --primary: 152 60% 48%;
    --primary-foreground: 220 20% 7%;

    --secondary: 220 15% 15%;
    --secondary-foreground: 150 10% 75%;

    --muted: 220 15% 13%;
    --muted-foreground: 220 10% 50%;

    --accent: 172 55% 45%;
    --accent-foreground: 220 20% 7%;

    --destructive: 0 70% 55%;
    --destructive-foreground: 0 0% 98%;

    --border: 220 15% 18%;
    --input: 220 15% 18%;
    --ring: 152 60% 48%;

    --radius: 0.75rem;

    --terminal-green: 152 60% 48%;
    --terminal-cyan: 172 55% 45%;
    --terminal-dim: 220 10% 40%;
    --glow-primary: 0 0 20px hsl(152 60% 48% / 0.3);
    --glow-accent: 0 0 20px hsl(172 55% 45% / 0.3);

    --sidebar-background: 220 18% 10%;
    --sidebar-foreground: 150 10% 85%;
    --sidebar-primary: 152 60% 48%;
    --sidebar-primary-foreground: 220 20% 7%;
    --sidebar-accent: 220 15% 15%;
    --sidebar-accent-foreground: 150 10% 85%;
    --sidebar-border: 220 15% 18%;
    --sidebar-ring: 152 60% 48%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}
