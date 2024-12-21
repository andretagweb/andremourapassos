import React, { useEffect } from 'react';

const SoundCloudPlayer = () => {
  useEffect(() => {
    // Função para carregar o script do SoundCloud Widget
    const loadSoundCloudWidget = () => {
      const script = document.createElement('script');
      script.src = 'https://w.soundcloud.com/player/api.js';
      script.onload = () => initializeWidget(); // Inicializa o widget após o script carregar
      document.body.appendChild(script);
    };

    // Função para inicializar o widget
    const initializeWidget = () => {
      const widgetIframe = document.getElementById('soundcloud-widget');
      if (widgetIframe) {
        const widget = window.SC.Widget(widgetIframe);

        // Adiciona eventos ao widget
        widget.bind(window.SC.Widget.Events.READY, () => {
          console.log('Widget está pronto!');
        });

        widget.bind(window.SC.Widget.Events.PLAY, () => {
          console.log('Reprodução iniciada!');
        });

        widget.bind(window.SC.Widget.Events.PAUSE, () => {
          console.log('Reprodução pausada!');
        });
      }
    };

    // Carrega o script do SoundCloud Widget se ainda não estiver presente
    if (!window.SC) {
      loadSoundCloudWidget();
    } else {
      initializeWidget();
    }
  }, []);

  return (
    <section className="bg-white text-black flex items-center justify-center">
      <iframe
        id="soundcloud-widget"
        title="SoundCloud Playlist"
        width="100%"
        height="450"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/same-bloods-cocktail/sets/bloods-cocktail&color=%23852004&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
    </section>
  );
};

export default SoundCloudPlayer;
