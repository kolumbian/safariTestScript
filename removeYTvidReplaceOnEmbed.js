(() => {
    function startBlockYT() {

      const allowedHostnames = [
        "www.youtube.com",
        "m.youtube.com",
        "music.youtube.com"
      ];
      if (!allowedHostnames.includes(window.location.hostname)) {
        return {
          msg: "This is not YouTube"
        };
      }
  
      const startScript = () => {
        const targetEl = document.querySelector('body');
        
        const headlines = {
          'www.youtube.com': [
            'ytd-video-masthead-ad-advertiser-info-renderer',
            'ytm-promoted-sparkles-web-renderer', 
            'ytd-search-pyv-renderer',
            'YTM-PROMOTED-VIDEO-RENDERER',
            '[class*="ytd-display-ad-"]',
            '[layout*="display-ad-"]',
            'a[href^="http://www.youtube.com/cthru?"]',
            'a[href^="https://www.youtube.com/cthru?"]',
            'ytd-compact-promoted-video-renderer',
            'ytd-companion-slot-renderer',
            'ytd-display-ad-renderer',
            'ytd-promoted-sparkles-text-search-renderer',
            'ytd-promoted-sparkles-web-renderer',
            'ytd-single-option-survey-renderer',
            'ytd-video-masthead-ad-v3-renderer',
            'ytm-companion-slot',
            'ytm-promoted-sparkles-text-search-renderer',
            'ytm-promoted-sparkles-web-renderer',
            'div#content>[class][layout*="-ad-"][style*="-ad-"]',
            'ytm-promoted-video-renderer',
            '#__ffYoutube1',
            '#__ffYoutube2',
            '#__ffYoutube3',
            '#__ffYoutube4',
            '#offer-module',
            '#pla-shelf > ytd-pla-shelf-renderer[class="style-scope ytd-watch"]',
            '#promotion-shelf',
            '#related > ytd-watch-next-secondary-results-renderer > #items > ytd-compact-promoted-video-renderer.ytd-watch-next-secondary-results-renderer',
            '#watch7-branded-banner',
            '#YtKevlarVisibilityIdentifier',
            '#YtSparklesVisibilityIdentifier',
            '#feed-pyv-container',
            '#feedmodule-PRO',
            '#homepage-chrome-side-promo',
            '#masthead-ad',
            '#merch-shelf',
            '#pla-shelf',
            '#premium-yva',
            '#promo-info',
            '#promo-list',
            '#search-pva',
            '#shelf-pyv-container',
            '#video-masthead',
            '#watch-branded-actions',
            '#watch-buy-urls',
            '#watch-channel-brand-div',
            '.GoogleActiveViewElement',
            '.banner-promo-style-type-masthead-v2',
            '.carousel-offer-url-container',
            '.companion-ad-container',
            '.list-view[style="margin: 7px 0pt;"]',
            '.promoted-sparkles-text-search-root-container',
            '.promoted-videos',
            '.searchView.list-view',
            '.sparkles-light-cta',
            '.watch-extra-info-column',
            '.watch-extra-info-right',
            '.ytd-action-companion-ad-renderer',
            '.ytd-display-ad-renderer',
            '.ytd-carousel-ad-renderer',
            '.ytd-compact-promoted-video-renderer',
            '.ytd-companion-slot-renderer',
            '.ytd-merch-shelf-renderer',
            '.ytd-player-legacy-desktop-watch-ads-renderer',
            '.ytd-promoted-sparkles-text-search-renderer',
            '.ytd-promoted-video-renderer',
            '.ytd-search-pyv-renderer',
            '.ytd-video-masthead-ad-v3-renderer',
            '.ytp-ad-action-interstitial-background-container',
            '.ytp-ad-action-interstitial-slot',
            '.ytp-ad-button',
            '.ytp-ad-image-overlay',
            '.ytp-ad-overlay-container',
            '.ytp-ad-player-overlay-flyout-cta',
            '.ytp-ad-progress',
            '.ytp-ad-progress-list',
            '.ad-container',
            '.ytp-share-button',
            '.ytp-ad-module',
            '.html5-video-player.ad-showing .ytp-title'
          ],
          'm.youtube.com': [
            '[class$="-content"][section-identifier=""]>lazy-list>:not(ytm-comments-entry-point-header-renderer)',
            '[class*="Google"]',
            '.companion-ad-container',
            '.ytp-ad-action-interstitial',
            '.ytp-cued-thumbnail-overlay > div[style*="/sddefault.jpg"]',
            `a[href^="/watch?v="][onclick^="return koya.onEvent(arguments[0]||window.event,'"]:not([role]):not([class]):not([id])`,
            `a[href^="/watch?v="][onclick^="return koya.onEvent(arguments[0]||window.event,'"]:not([role]):not([class]):not([id]) + div`,
            `a[onclick*='"ping_url":"http://www.google.com/aclk?']`,
            'ytm-companion-ad-renderer',
            'ytm-companion-slot',
            'ytm-promoted-sparkles-text-search-renderer',
            'ytm-promoted-sparkles-web-renderer',
            'ytm-promoted-video-renderer',
            '.ytp-ad-player-overlay',
            'iv[class*="error"]',
          ],
        };
  
        const checkURL = (fun) => {
          let start = window.location.hostname;
  
          const domain = ['www.youtube.com', 'm.youtube.com', 'music.youtube.com'];
  
          if ( domain.includes(start) ) {
            
            if ( !document.querySelector('.info-start-adlock__content > svg') ) {
              
              fun();
            }
          } 
        };
  
        const createBlockAdlock = () => {
          const widths = [320, 375, 414];
          const el = document.querySelector(["[logo-src].ytmusic-nav-bar", "ytm-home-logo", "ytd-logo"]);
  
          if ( widths.includes(window.innerWidth) ) {
  
            if ( document.querySelector('#app>[role="tablist"]') ) {
                
              topBtn = `${document.querySelector('#app>[role="tablist"]').clientHeight}px`;
            }
          }
  
          const create = `
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="13" viewBox="0 0 56 13" fill="none">
              <path d="M33.5713 3.43816C31.2024 3.43816 29.2793 5.38986 29.2793 7.78101C29.2793 10.1722 31.2024 12.1239 33.5713 12.1239C35.9402 12.1239 37.8634 10.1722 37.8634 7.78101C37.8634 5.38986 35.9402 3.43816 33.5713 3.43816ZM35.7492 7.78101C35.7492 8.99597 34.7685 9.97828 33.5713 9.97828C32.3742 9.97828 31.3935 8.99597 31.3935 7.78101C31.3935 6.56605 32.3742 5.5708 33.5713 5.5708C34.7685 5.5708 35.7492 6.56605 35.7492 7.78101Z" fill="#E50004"/>
              <path d="M44.4741 9.4225C44.0666 9.78441 43.5571 9.9912 43.0222 9.9912C41.825 9.9912 40.8444 9.00889 40.8444 7.79393C40.8444 6.57897 41.825 5.58373 43.0222 5.58373C43.6336 5.58373 44.2067 5.84224 44.627 6.29462L44.8562 6.54019L46.3845 5.06673L46.168 4.82115C45.3529 3.94224 44.2194 3.43816 43.035 3.43816C40.6661 3.43816 38.7429 5.38986 38.7429 7.78101C38.7429 10.1722 40.6661 12.1239 43.035 12.1239C44.0666 12.1239 45.06 11.749 45.8496 11.064L46.0916 10.8572L44.7543 9.20277L44.4741 9.4225Z" fill="#E50004"/>
              <path d="M6.13877 0H3.89723L0 12.0204H2.22881L2.95476 9.78433H6.83925L7.50152 12.0204H9.70485L6.13877 0ZM6.20245 7.65169H3.6425L4.97979 3.51564L6.20245 7.65169Z" fill="#E50004"/>
              <path d="M52.4083 6.82443L55.3758 3.36049H52.3701L50.0649 6.06185V-4.57764e-05H47.7852V12.0203H50.0649V9.56456L50.88 8.6081L53.2362 12.0203H55.9999L52.4083 6.82443Z" fill="#E50004"/>
              <path d="M23.2944 9.74551V-4.57764e-05H21.0273V12.0203H28.376V9.74551H23.2944Z" fill="#E50004"/>
              <path d="M17.0029 -4.57764e-05V3.99383C16.3661 3.63192 15.6401 3.43804 14.9014 3.43804C12.5325 3.43804 10.6094 5.38974 10.6094 7.78089C10.6094 10.172 12.5325 12.1237 14.9014 12.1237C15.6401 12.1237 16.3661 11.9299 17.0029 11.568V12.0203H19.2699V-4.57764e-05H17.0029V-4.57764e-05ZM14.9014 9.99109C13.7042 9.99109 12.7363 9.00878 12.7363 7.79381C12.7363 6.57885 13.7042 5.59654 14.9014 5.59654C16.0986 5.59654 17.0665 6.57885 17.0665 7.79381C17.0665 8.99585 16.0986 9.99109 14.9014 9.99109Z" fill="#E50004"/>
              <path d="M54.1277 0.685031C54.1277 0.55578 54.1532 0.452377 54.2168 0.336051C54.2678 0.232649 54.3569 0.142178 54.4461 0.0904776C54.548 0.0258519 54.6499 0 54.7645 0C54.8791 0 54.9937 0.0258519 55.0829 0.0904776C55.1848 0.155103 55.2612 0.232649 55.3121 0.336051C55.3631 0.439452 55.4013 0.55578 55.4013 0.685031C55.4013 0.801357 55.3758 0.917688 55.3249 1.02109C55.2739 1.12449 55.1975 1.21497 55.0956 1.27959C54.9937 1.34422 54.8918 1.37006 54.7645 1.37006C54.6499 1.37006 54.5352 1.34422 54.4333 1.27959C54.3315 1.21497 54.255 1.13742 54.2041 1.02109C54.1532 0.904763 54.1277 0.801357 54.1277 0.685031ZM54.2423 0.685031C54.2423 0.788432 54.2678 0.891832 54.3187 0.982308C54.3697 1.07278 54.4334 1.13741 54.5098 1.18911C54.5862 1.24082 54.6881 1.26666 54.7772 1.26666C54.8791 1.26666 54.9683 1.24082 55.0447 1.18911C55.1338 1.13741 55.1975 1.07278 55.2357 0.982308C55.2867 0.891832 55.3121 0.801362 55.3121 0.697961C55.3121 0.59456 55.2867 0.491157 55.2357 0.413606C55.1848 0.32313 55.1211 0.2585 55.0447 0.206799C54.9555 0.155099 54.8664 0.129251 54.7772 0.129251C54.6753 0.129251 54.5862 0.155099 54.5098 0.206799C54.4206 0.2585 54.3569 0.32313 54.3187 0.413606C54.255 0.478232 54.2423 0.58163 54.2423 0.685031ZM54.6371 0.749657V1.05986H54.5098V0.284355H54.7645C54.8536 0.284355 54.9301 0.310205 54.981 0.34898C55.0319 0.387756 55.0574 0.452377 55.0574 0.529928C55.0574 0.607479 55.0192 0.659185 54.9428 0.697961C55.0192 0.723811 55.0574 0.788432 55.0574 0.878908V0.930612C55.0574 0.982312 55.0574 1.02108 55.0702 1.04693V1.05986H54.9428C54.9301 1.03401 54.9301 0.995234 54.9301 0.943534C54.9301 0.891833 54.9301 0.853059 54.9301 0.840134C54.9173 0.775509 54.8791 0.749657 54.8154 0.749657H54.6371V0.749657ZM54.6371 0.633335H54.7772C54.8154 0.633335 54.8536 0.620408 54.8791 0.607483C54.9046 0.581633 54.9173 0.555778 54.9173 0.529928C54.9173 0.491152 54.9046 0.452383 54.8791 0.439458C54.8536 0.426533 54.8154 0.413606 54.7518 0.413606H54.6244V0.633335H54.6371Z" fill="#E50004"/>
            </svg>
          `;
  
          const block = document.createElement('div');
        
          block.classList.add('info-start-adlock__content');
          el.style.display = "flex";
            
          el.append(block);
  
          if ( document.getElementsByClassName('info-start-adlock__content') ) {
  
            block.innerHTML = create;
  
            const styles = document.createElement('style');
            
            styles.innerHTML = `
              #primary { position: relative; }
              .info-start-adlock__content { 
                width: 100%; 
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 1%!important;
              }
              .info-start-adlock__content>svg { margin-left: 6%; }
            `;
  
            document.head.append(styles);
          }
        };
  
        const creatingFillingStyles = (hostname) => {
          const selectors = headlines[hostname];
  
          if (!selectors) {
  
            return;
          }
          
          const rule = `${selectors.join(', ')} { display: none!important; }`;
          const style = document.createElement('style');
          style.innerHTML = rule;
          document.head.appendChild(style);
        };
  
        const removeAdsWindow = () => {
          if (document.querySelector('.ad-showing')) {
  
            const vid = document.querySelectorAll('video[class^="video-stream"][controlslist]:not([src])');
            if (vid && vid.duration) {

              vid.currentTime = vid.duration;

              setTimeout(() => {
                const skipButton = document.querySelector("button.ytp-ad-skip-button");
                if (skipButton) {
                  skipButton.click();
                }
              }, 100);
            }
          }
        };
  
        const hideMainAds = () => {
          const adsElements = document.querySelectorAll('div#content>[class][layout*="-ad-"][style*="-ad-"]');
  
          if (adsElements.length !== 0) {
            adsElements.forEach((el) => {
              if (el.parentNode && el.parentNode.parentNode) {
                const prnt = el.parentNode.parentNode;
  
                if (prnt.localName === 'ytd-rich-item-renderer') {
    
                  prnt.style.setProperty( "display", "none", "important" );
                }
              }
              
            });
          }
        };
  
        const MutObserve = ( option ) => {
          const targetEl = option.el;
          const callback = option.fun;
  
          const observer = new MutationObserver((mutations) => {
            if( Boolean(mutations) ) {
              
              callback(mutations);
            }
          });
  
          observer.observe(targetEl, {
            childList: true,
            subtree: true,
          });
        };
        
        
        // TEST
        const goToEmbed = () => {
            let ifrRes;
            let matches;
            let wdth;
            let hght;

            let interval1 = setInterval(() => {
                if (document.querySelector('video')) {
                    clearInterval(interval1);

                    let styles = document.querySelector('video').style.cssText;

                    matches = styles.match(/width:\s*(\d+)px;.*height:\s*(\d+)px;.*left:\s*(\d+)px;/);

                    if (matches) {
                        wdth = parseInt(matches[1], 10);
                        hght = parseInt(matches[2], 10);

                        console.log(wdth, hght);
                    }

                }
                
            }, 100)

            let interval2 = setInterval(() => {
                if (document.querySelector('yt-button-view-model>button-view-model>button') && !document.querySelector('yt-share-target-renderer.yt-third-party-share-target-section-renderer>button')) {
                    clearInterval(interval2);

                    document.querySelector('ytd-popup-container').style.display = 'none';
                    document.querySelector('tp-yt-iron-overlay-backdrop').style.display = 'none';
                
                    document.querySelector('yt-button-view-model>button-view-model>button').click();

                }
                
            }, 100)

            let interval3 = setInterval(() => {
                if (document.querySelector('yt-share-target-renderer.yt-third-party-share-target-section-renderer>button') && !document.querySelector('#scrollable #mirror')) {
                    clearInterval(interval3);
                
                    document.querySelector('yt-share-target-renderer.yt-third-party-share-target-section-renderer>button').click();

                }
                
            }, 100)

            let interval4 = setInterval(() => {
                if (document.querySelector('#scrollable #mirror') && document.querySelector('video') && hght !== 'clear') {
                    clearInterval(interval4);

                    document.querySelector('yt-sharing-embed-renderer').style.display = 'none';
                    
                    document.querySelector('#embed-panel>#title-bar>yt-icon').click();
                
                    let inner = document.querySelector('#scrollable #mirror').innerHTML;

                    ifrRes = inner.replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&nbsp;', '').replace(/width="\d+"/, `width="${wdth}"`).replace(/height="\d+"/, `height="${hght}"`);
                
                    console.log(ifrRes);

                    hght = 'clear';
                
                }
                
            }, 100)

            let interval5 = setInterval(() => {
                if (ifrRes && ifrRes !== 'clear') {
                    clearInterval(interval5);
                    
                    document.querySelector('#player-container').innerHTML = ifrRes;

                    ifrRes = 'clear';
                }
                
            }, 500)

            let interval6 = setInterval(() => {
                if (document.querySelector('#full-bleed-container>iframe')) {
                    clearInterval(interval6);
                    
                    document.querySelector('#full-bleed-container').style.justifyContent = 'center';
                }
                
            }, 100)
        };
        
  
        creatingFillingStyles(window.location.hostname);
        
        checkURL(() => { createBlockAdlock() });
        goToEmbed();
        removeAdsWindow();
        hideMainAds();
  
        MutObserve({
          el: document.querySelector('#app'), 
          fun: () => {
  
            checkURL(() => { 
              createBlockAdlock() 
            });
            goToEmbed();
            removeAdsWindow();
            hideMainAds();
          }
        })
      };
  
      const script = document.createElement('script');
      const scriptText = startScript.toString();
      script.innerHTML = `(${scriptText})();`;
      document.head.appendChild(script);
      document.head.removeChild(script);
      return {
        msg: "Ad-free YouTube is active"
      };
    }

    (() => {
        let stopes = (m) => { 
          console.log(m);
        };
        if ( typeof completion !== 'undefined' ) {
          stopes = completion;
        }
        try {
          const result = startBlockYT();
          stopes(result.msg);
        } catch (ex) {
          stopes(ex.toString());
        }
    })();
})();
