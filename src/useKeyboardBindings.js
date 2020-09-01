import React, {useEffect} from 'react';

export default function useKeyboardBindings(map){

    useEffect(() => {
      const handlePress = ev => {
        const handler = map[ev.key];
        if (typeof handler === 'function') {
          handler();
        }
      };

      window.addEventListener('keypress', handlePress);
      return () => {
        window.removeEventListener('keypress', handlePress);
      };
    }, [map]);
  };
