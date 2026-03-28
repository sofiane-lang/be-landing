@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background-color: #460B5E;
    color: white;
    overflow-x: hidden;
  }
}

@layer utilities {
  .font-display {
    font-family: 'Montserrat', sans-serif;
  }

  .text-gradient-orange {
    background: linear-gradient(135deg, #FF6400, #FF9A00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .bg-mauve-grid {
    background-image:
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  .glow-orange {
    box-shadow: 0 0 40px rgba(255, 100, 0, 0.25), 0 0 80px rgba(255, 100, 0, 0.10);
  }

  .glow-mauve {
    box-shadow: 0 0 60px rgba(70, 11, 94, 0.5);
  }

  .card-hover {
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
  }

  .card-hover:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow: 0 32px 64px rgba(0,0,0,0.20);
  }

  .btn-primary {
    @apply bg-orange text-white font-display font-bold px-8 py-4 rounded-xl text-base tracking-wide;
    transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 8px 24px rgba(255, 100, 0, 0.35);
  }

  .btn-primary:hover {
    @apply bg-orangeH;
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 16px 40px rgba(255, 100, 0, 0.45);
  }

  .btn-outline {
    @apply border-2 border-white text-white font-display font-bold px-8 py-4 rounded-xl text-base tracking-wide bg-transparent;
    transition: all 0.25s ease;
  }

  .btn-outline:hover {
    @apply bg-white text-mauve;
    transform: translateY(-2px);
  }

  .section-cream {
    background-color: #F9F7F2;
    color: #1A1A1A;
  }

  .diagonal-clip {
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  }

  .diagonal-clip-reverse {
    clip-path: polygon(0 4%, 100% 0, 100% 100%, 0 100%);
  }
}
