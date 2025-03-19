import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import { createRoot } from 'react-dom/client';

import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: "https://91044a526c40ff3fc4d2a4a8e0415efe@o4508977770921984.ingest.de.sentry.io/4508977780359248",
  integrations: [
    new Sentry.BrowserTracing(),
    // Uncomment if you really need session replay
    // new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of transactions for performance monitoring

  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

// Wrap the App component with Sentry Profiler for performance monitoring
const SentryApp = Sentry.withProfiler(App);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<SentryApp />);

export default SentryApp; // Export the wrapped App component