import { createContext, useContext, useState, useCallback } from 'react';

const LightboxContext = createContext(null);

export function LightboxProvider({ children }) {
  const [src, setSrc] = useState(null);
  const openLightbox = useCallback((imgSrc) => setSrc(imgSrc), []);
  const closeLightbox = useCallback(() => setSrc(null), []);

  return (
    <LightboxContext.Provider value={{ src, openLightbox, closeLightbox }}>
      {children}
      {src && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(6,8,18,.88)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, cursor: 'zoom-out',
          }}
        >
          <div
            role="img"
            aria-label="Enlarged photo"
            style={{
              width: '92vw', height: '86vh', backgroundImage: `url("${src}")`,
              backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
            }}
          />
        </div>
      )}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  return useContext(LightboxContext);
}
