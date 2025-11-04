// Bootstrap loader: fetch runtime config before starting React

async function loadConfig() {
  try {
    const res = await fetch('/config.json', { cache: 'no-store' });
    if (!res.ok) {
      console.warn('Failed to fetch /config.json:', res.status, res.statusText);
      (window as any).__CONFIG__ = {};
      return;
    }
    const cfg = await res.json();
    (window as any).__CONFIG__ = cfg;
  } catch (err) {
    console.warn('Error loading /config.json:', err);
    (window as any).__CONFIG__ = {};
  }
}

await loadConfig();

// Start React after config is ready
await import('./main.tsx');

// Ensure this file is treated as a module so top-level await is allowed
export {}