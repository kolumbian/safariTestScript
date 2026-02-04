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

        const MutObserve = (callback) => {
            const observer = new MutationObserver((mutations) => {
                callback(mutations);
            });
                observer.observe(document.documentElement, {
                childList: true,
                subtree: true
            });
        };
  
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
                    '.ytp-ad-timed-pie-countdown-container',
                    '.ytp-ad-button',
                    '.ytp-ad-image-overlay',
                    '.ytp-ad-overlay-container',
                    '.ytp-ad-player-overlay-flyout-cta',
                    '.ytp-ad-progress',
                    '.ytp-ad-progress-list',
                    '.ad-container',
                    '.ytp-share-button',
                    //'.ytp-ad-module',
                    '.html5-video-player.ad-showing .ytp-title',
                    'ytd-ad-slot-renderer'
                    //'ytp-ad-persistent-progress-bar-container'
                ],
                'm.youtube.com': [
                    '[class$="-content"][section-identifier=""]>lazy-list>:not(ytm-comments-entry-point-header-renderer)',
                    '[class*="Google"]',
                    '.companion-ad-container',
                    '.ytp-ad-action-interstitial',
                    '.ytp-ad-action-interstitial-background-container',
                    '.ytp-ad-action-interstitial-slot',
                    //'.ytp-ad-timed-pie-countdown-container',
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
                    'div[class*="error"]',
                    'ytd-ad-slot-renderer'
                    //'ytp-ad-persistent-progress-bar-container'
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
        
                if (el) {
                    if ( widths.includes(window.innerWidth) ) {
            
                        if ( document.querySelector('#app>[role="tablist"]') ) {
                            topBtn = `${document.querySelector('#app>[role="tablist"]').clientHeight}px`;
                        }
                    }
            
                    const create = `
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.2439 5.86475H8.06927L3 10.883V17.9815L8.06927 22.9998H15.24L20.3092 17.9815V10.883L15.2439 5.86475ZM18.9802 17.4266L14.695 21.6725H8.62991L4.34475 17.4266V11.4225L8.62991 7.18044H14.695L18.9802 11.4225V17.4266V17.4266Z" fill="#E50004"/>
                        <path d="M14.6616 19L17.3091 16.5665V12.4434L14.6616 10.0099H12.4242V18.9868L14.6616 19ZM13.6472 11.1341H14.0573L16.0861 12.9989V15.9879L14.0573 17.8527H13.6472V11.1341ZM8.95656 10.0099L6.30908 12.4434V16.5533L7.52851 17.6741V14.7678H9.97095V18.9735H11.1904V10L8.95656 10.0099ZM9.98534 11.1341V13.6602H7.54289V13.0121L9.57167 11.1473L9.98534 11.1341Z" fill="#E50004"/>
                        <path d="M6.6064 6.50378V5.74905C6.6064 4.12484 8.0147 2.50063 9.64114 2.50063H13.977C15.592 2.50063 17.0118 4.12484 17.0118 5.74905V6.50378L18.3091 8V5.74464C18.3129 3.37894 16.2464 1 13.977 1H9.64114C7.37178 1 5.30908 3.3657 5.30908 5.74464V8L6.6064 6.50378Z" fill="#E50004"/>
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

                    let vid = document.querySelector('video');
                    if (vid && vid.duration) {

                        vid.playbackRate = 2;
                        vid.muted = true;
                        vid.style.opacity = '0.4';
                        vid.currentTime = vid.duration - 1;
                        vid.ended = true;
                
                        setInterval(() => {
                            const skipButton = document.querySelector("button.ytp-skip-ad-button");
                            const mobAdOverlay = document.querySelector(".ytp-ad-player-overlay");
                            if (skipButton) {
                                skipButton.style.position = "fixed";
                                skipButton.style.top = "0";
                                skipButton.style.left = "0";
                                skipButton.style.width = "100vw";
                                skipButton.style.height = "100vh";
                                skipButton.style.zIndex = "9999";
                                skipButton.style.display = "flex";
                                skipButton.style.justifyContent = "center";
                                skipButton.classList.add("ytp-ad-component--clickable");
                        
                                const buttonText = skipButton.querySelector(".ytp-skip-ad-button__text");
                                if (buttonText) {
                                    buttonText.style.fontSize = "-webkit-xxx-large";
                                }
                        
                                const buttonIcon = skipButton.querySelector(".ytp-skip-ad-button__icon");
                                if (buttonIcon) {
                                    buttonIcon.style.height = "10vh";
                                    buttonIcon.style.width = "6vw";
                                }
                            } else if (mobAdOverlay) {
                                mobAdOverlay.style.setProperty( "display", "block", "important" );
                                
                                document.querySelector(".ytp-ad-player-overlay-flyout-cta").style.setProperty( "display", "block", "important" );
                                document.querySelector(".ytp-ad-player-overlay-top-bar-gradients").style.setProperty( "display", "none", "important" );
                                document.querySelector(".ytp-ad-player-overlay-instream-info").style.setProperty( "display", "none", "important" );
                                document.querySelector(".ytp-ad-player-overlay-progress-bar").style.setProperty( "display", "none", "important" );
                                document.querySelector(".ytp-ad-player-overlay-instream-user-sentiment").style.setProperty( "display", "none", "important" );
                                document.querySelector(".ytp-ad-player-overlay-ad-disclosure-banner").style.setProperty( "display", "none", "important" );

                                let adSkipSlot = document.querySelector("button.ytp-ad-skip-button-modern");

                                //adding skip btn and it's functionality
                                if (!adSkipSlot) {
                                    let skipPreview = document.querySelector(".ytp-ad-player-overlay-skip-or-preview");
                                    skipPreview.innerHTML = '<div class="ytp-ad-skip-ad-slot" style="" id="skip-button:12"><div class="ytp-ad-skip-button-slot" style="display: block !important;" id="skip-button:13"><span class="ytp-ad-skip-button-container ytp-ad-skip-button-container-detached ytp-ad-skip-button-icon-mweb-delhi" style="display: block !important;"><button class="ytp-ad-skip-button-modern ytp-button ytp-ad-component--clickable sa" style="position: fixed; top: 0px; left: 0px; width: 100vw; height: 100vh; z-index: 9999; display: flex; justify-content: center; background: unset;"><div class="ytp-ad-text ytp-ad-skip-button-text-centered ytp-ad-skip-button-text" style="font-size: xxx-large; padding-top: 25%;" id="ad-text:14">Пропустити</div><span class="ytp-ad-skip-button-icon-modern" style="padding-top: 25%;"><svg fill="none" height="24" viewBox="0 0 24 24" width="24" aria-hidden="true" focusable="false" style="height: 8vh; width: 6vw; padding-left: 10px;"><path d="M20 20C20.26 20 20.51 19.89 20.70 19.70C20.89 19.51 21 19.26 21 19V5C21 4.73 20.89 4.48 20.70 4.29C20.51 4.10 20.26 4 20 4C19.73 4 19.48 4.10 19.29 4.29C19.10 4.48 19 4.73 19 5V19C19 19.26 19.10 19.51 19.29 19.70C19.48 19.89 19.73 20 20 20ZM5.04 19.77L18 12L5.04 4.22C4.84 4.10 4.60 4.03 4.36 4.03C4.12 4.03 3.89 4.09 3.68 4.21C3.47 4.32 3.30 4.49 3.18 4.70C3.06 4.91 2.99 5.14 3 5.38V18.61C2.99 18.85 3.06 19.08 3.18 19.29C3.30 19.50 3.47 19.67 3.68 19.79C3.89 19.90 4.12 19.96 4.36 19.96C4.60 19.96 4.84 19.89 5.04 19.77Z" fill="white"></path></svg></span></button></span></div></div>';
                                    console.log(">>> ADDED SKIP BUTTON");
                                }

                                if (document.querySelector("button.ytp-ad-skip-button-modern.sa")) {
                                    let video = document.querySelector("video");
                                    if (video && video.duration) {
                                        document.querySelector('.ytp-ad-skip-button-slot').addEventListener('click', function (e) {
                                            console.log(">>> VID CURRENTTIME:", video.currentTime);
                                            console.log(">>> VID DURATION:", video.duration);
                                            video.currentTime = video.duration - 1;
                                            video.ended = true;
                                            console.log(">>> CLICKED SKIP BUTTON");
                                        });
                                    }
                                }
                                //

                                const mobSkipButton = document.querySelector("button.ytp-ad-skip-button-modern");
                                
                                if (mobSkipButton) {
                                    document.querySelector(".ytp-ad-skip-button-slot").style.setProperty( "display", "block", "important" );
                                    document.querySelector(".ytp-ad-skip-button-container").style.setProperty( "display", "block", "important" );
                                    
                                    mobSkipButton.style.position = "fixed";
                                    mobSkipButton.style.top = "0";
                                    mobSkipButton.style.left = "0";
                                    mobSkipButton.style.width = "100vw";
                                    mobSkipButton.style.height = "100vh";
                                    mobSkipButton.style.zIndex = "9999";
                                    mobSkipButton.style.display = "flex";
                                    mobSkipButton.style.justifyContent = "center";
                                    mobSkipButton.style.background = "unset";
                                    mobSkipButton.classList.add("ytp-ad-component--clickable");
    
                                    const mobButtonText = mobSkipButton.querySelector(".ytp-ad-skip-button-text");
                                    if (mobButtonText) {
                                        mobButtonText.style.fontSize = "-webkit-xxx-large";
                                        mobButtonText.style.paddingTop = "25%";
                                    }
    
                                    const mobButtonIcon = mobSkipButton.querySelector(".ytp-ad-skip-button-icon-modern");
                                    if (mobButtonIcon) {
                                        mobButtonIcon.style.paddingTop = "25%";
    
                                        const mobButtonIconSVG = mobButtonIcon.querySelector("svg");
                                        mobButtonIconSVG.style.height = "8vh";
                                        mobButtonIconSVG.style.width = "6vw";
                                        mobButtonIconSVG.style.paddingLeft = "10px";
                                    }
                                }
                            } else {
                            }
                        }, 1000);
                    }
                } else {
                    setInterval(() => {
                        if (document.querySelector(".ad-showing") == null && window.location.href.indexOf("watch?") > -1) {
                            let vid = document.querySelector("video");
                            if (vid && vid.duration) {
        
                                vid.muted = false;
                                vid.style.opacity = "unset";
                            } 
                        }
                    }, 1000);
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

            // Remove ads data
            (() => {
                const _origFetch = window.fetch;
                window.fetch = async function(input, init) {
                    try {
                        const url = (typeof input === 'string') ? input : input.url;

                        //block ad urls
                        if(url.includes("googleads.g.doubleclick.net") || url.includes("youtube.com/youtubei/v1/player/ad_break") || url.includes("youtube.com/pagead/adview") || url.includes("youtube.com/api/stats/ads")){
                            //console.log("Blocked",url);
                            return "";
                        } else {
                            const response = await _origFetch.apply(this, arguments);

                            try {
                                const clone = response.clone();
                                let data = await clone.json();

                                if(data.responseContext.webResponseContextExtensionData.webResponseContextPreloadData.preloadMessageNames[0] == "adSlotRenderer" || data.responseContext.webResponseContextExtensionData.webResponseContextPreloadData.preloadMessageNames[0] == "shortsAdsRenderer"){
                                    data={};
                                }

                                //remove the ad content
                                delete data.adSlots;
                                delete data.playerAds;
                                delete data.adPlacements;

                                const newBody = JSON.stringify(data);

                                // Build new headers (update content-length + content-type)
                                const newHeaders = new Headers(response.headers);
                                newHeaders.set("content-length", String(newBody.length));
                                newHeaders.set("content-type", "application/json");

                                // Return modified Response
                                return new Response(newBody, {
                                    status: response.status,
                                    statusText: response.statusText,
                                    headers: newHeaders
                                });
                            } catch (e) {
                                // not JSON, return original
                                return response;
                            }
                        }
                    } catch (e) { /* ignore logging errors */ }
                };
            })();

            //modified XHR for the same purpose
            const XHR = window.XMLHttpRequest;
            const origOpen = XHR.prototype.open;
            const origSend = XHR.prototype.send;

            XHR.prototype.open = function(method, url, ...rest) {
                this._interceptedMethod = method;
                this._interceptedUrl = url;
                return origOpen.apply(this, [method, url, ...rest]);
            };

            XHR.prototype.send = function(body) {
                // Block certain URLs
                if (
                    this._interceptedUrl.includes("googleads.g.doubleclick.net") ||
                    this._interceptedUrl.includes("youtube.com/youtubei/v1/player/ad_break") ||
                    this._interceptedUrl.includes("youtube.com/pagead/adview") ||
                    this._interceptedUrl.includes("youtube.com/api/stats/ads")
                ) {
                    console.warn("Blocked:", this._interceptedUrl);
                    return;
                }

                // Intercept JSON responses
                this.addEventListener("readystatechange", function() {
                    if (this.readyState === 4 && this.responseType === "" || this.responseType === "text") {
                        try {
                            // Try parsing response as JSON
                            const contentType = this.getResponseHeader("Content-Type");
                            if (contentType && contentType.includes("application/json")) {
                                let json = JSON.parse(this.responseText);

                                // 
                                if (json.adPlacements) {
                                    console.log("Removed ad placements from response!");
                                    json.adPlacements = []; // remove ads
                                }

                                //remove the ad content
                                delete json.adSlots;
                                delete json.playerAds;
                                delete json.adPlacements;

                                // Redefine responseText to modified JSON
                                Object.defineProperty(this, "responseText", { value: JSON.stringify(json) });
                                Object.defineProperty(this, "response", { value: json });
                            }
                        } catch (err) {
                            // Ignore non-JSON or parse errors
                        }
                    }
                });

                return origSend.apply(this, arguments);
            };

            /*YT ADS BLOCKER*/
            // const adsBlock = () => {
            //     try{
            //         document.getElementsByClassName('video-stream')[0].removeAttribute('disablepictureinpicture');
            //     } catch {}

            //     /*Block Ads*/
            //     var ads=document.getElementsByTagName("ad-slot-renderer");
            //     for(var x in ads){
            //         try{ads[x].remove();}catch{}
            //     }
            //     try{
            //         document.getElementsByClassName("ad-interrupting")[0].getElementsByTagName("video")[0].currentTime=document.getElementsByClassName("ad-interrupting")[0].getElementsByTagName("video")[0].duration;
            //         document.getElementsByClassName("ytp-ad-skip-button-modern")[0].click();
            //     } catch {}
            // }
        
            creatingFillingStyles(window.location.hostname);
            
            checkURL(() => { createBlockAdlock() });
            removeAdsWindow();
            hideMainAds();
            // adsBlock();

            MutObserve(() => {
                checkURL(() => { 
                    createBlockAdlock() 
                });
                removeAdsWindow();
                hideMainAds();
                // adsBlock();
            });
        };
  
        startScript();
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



