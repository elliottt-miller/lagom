const BANNER_HTML = `
    <div style="position: fixed; display:flex; flex-direction: column; align-items: border: 1px solid red; center; left: 20px; bottom: 20px; z-index: 9999; margin-right: 20px; max-width: 235px">
      <div style="display:flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; padding: 15px; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(8px); border: 1px solid rgba(0, 0, 0, 0.07); border-radius: 15px; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);">
        

        <div style="display: flex; flex-direction: column; gap: 6px; align-items: center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" overflow="visible">
                <g>
                    <path d="M 0 0 L 16 0 L 16 16 L 0 16 Z" fill="transparent"></path>
                    <path d="M 8 1.333 C 9.841 1.333 11.333 2.826 11.333 4.667 L 11.333 6.667 C 12.438 6.667 13.333 7.562 13.333 8.667 L 13.333 12.667 C 13.333 13.771 12.438 14.667 11.333 14.667 L 4.667 14.667 C 3.562 14.667 2.667 13.771 2.667 12.667 L 2.667 8.667 C 2.667 7.562 3.562 6.667 4.667 6.667 L 4.667 4.667 C 4.667 2.826 6.159 1.333 8 1.333 M 8 9.333 C 7.302 9.333 6.722 9.871 6.67 10.567 L 6.667 10.667 C 6.667 11.403 7.264 12 8 12 C 8.736 12 9.333 11.403 9.333 10.667 C 9.333 9.93 8.736 9.333 8 9.333 M 8 2.667 C 6.895 2.667 6 3.562 6 4.667 L 6 6.667 L 10 6.667 L 10 4.667 C 10 3.562 9.105 2.667 8 2.667" fill="rgb(0,0,0)">
                    </path>
                </g>
            </svg>
            <div style="text-align:center; font-weight: 800; font-size: 16px; line-height: 1.1; text-align: left; text-transform: uppercase; color: #000;">
            <span style="display: block; text-align: center; font-weight:800; font-family: 'Bricolage Grotesque', sans-serif;">BUY LICENSE TO PUBLISH YOUR STORE</span>
          </div>
          <div style="font-weight: 500; font-size: 12px; line-height: 1.4; text-align: left; color: rgba(0, 0, 0, 0.7);">
            <span style="display: block; text-align: center; color:rgba(0,0,0,0.6); font-family: 'DM Sans', sans-serif; font-weight: 300; text-wrap: pretty;">Ready to remove this banner? Purchase & activate a license to go live.</span>
          </div>
        </div>
        <div style="width:100%; display:flex; align-items: center; justify-content: center;">
          <a
          href="https://buy.stripe.com/eVq5kD4OpeF8ea3cZ35EY0U"
          target="_blank"
          rel="noopener"
          style="display: flex; align-items: center; justify-content: center; width:100%; padding: 10px 20px; background-color: #40d41a; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 800; font-size: 15px; text-align: center; text-transform: uppercase; transition: background-color 0.2s ease;"
          onmouseover="this.style.backgroundColor='#33b514'"
          onmouseout="this.style.backgroundColor='#40d41a'"
          
          >
            <span style="font-weight:800; font-family: 'Bricolage Grotesque', sans-serif; width:100%">BUY LICENCE</span>
          </a>
        </div>
        
        <a
          href="https://frameship.io"
          target="_blank"
          rel="noopener"
          style="display: flex; align-items: center; justify-content: center;"
        >
          <div
            style="width: 126px; height: 10px; background-size: contain; scale:1.3; transform-origin:center center; display:flex; align-items: center; justify-content: center;">
            
            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="7" fill="none" overflow="visible"><g><path d="M 56.834 4.955 L 56.834 3.632 L 58.081 3.632 C 58.493 3.632 58.8 3.551 59.003 3.388 C 59.206 3.219 59.307 2.94 59.307 2.554 C 59.307 2.188 59.213 1.916 59.024 1.74 C 58.841 1.557 58.561 1.465 58.182 1.465 L 56.834 1.465 L 56.834 0.142 L 58.273 0.142 C 58.659 0.142 59.017 0.19 59.348 0.285 C 59.679 0.373 59.966 0.516 60.209 0.712 C 60.459 0.909 60.652 1.156 60.787 1.455 C 60.929 1.754 61 2.113 61 2.533 C 61 3.069 60.878 3.517 60.635 3.876 C 60.399 4.236 60.054 4.507 59.601 4.69 C 59.148 4.867 58.594 4.955 57.939 4.955 Z M 55.608 6.857 L 55.608 0.143 L 57.25 0.143 L 57.25 6.858 L 55.608 6.858 Z M 53.143 6.858 L 53.143 0.142 L 54.795 0.142 L 54.795 6.858 Z M 50.693 6.858 L 50.693 0.142 L 52.335 0.142 L 52.335 6.858 Z M 46.689 6.858 L 46.689 0.142 L 48.331 0.142 L 48.331 6.858 Z M 47.915 4.172 L 47.915 2.788 L 51.554 2.788 L 51.554 4.172 Z M 43.385 7 C 42.912 7 42.496 6.946 42.138 6.837 C 41.787 6.729 41.493 6.573 41.256 6.369 C 41.024 6.172 40.843 5.92 40.729 5.637 C 40.621 5.345 40.574 5.023 40.587 4.67 L 42.108 4.334 C 42.121 4.646 42.185 4.901 42.3 5.097 C 42.418 5.284 42.587 5.432 42.787 5.525 C 42.99 5.613 43.216 5.657 43.466 5.657 C 43.669 5.657 43.848 5.633 44.003 5.586 C 44.159 5.531 44.28 5.46 44.368 5.372 C 44.463 5.277 44.51 5.169 44.51 5.047 C 44.51 4.884 44.449 4.751 44.328 4.65 C 44.206 4.541 44.037 4.45 43.821 4.375 C 43.584 4.292 43.344 4.217 43.101 4.151 C 42.809 4.069 42.518 3.981 42.229 3.887 C 41.956 3.79 41.695 3.664 41.449 3.51 C 41.215 3.363 41.017 3.165 40.871 2.93 C 40.729 2.693 40.658 2.398 40.658 2.045 C 40.658 1.611 40.766 1.241 40.983 0.936 C 41.206 0.631 41.51 0.4 41.895 0.244 C 42.287 0.082 42.733 0 43.233 0 C 43.76 0 44.229 0.092 44.642 0.275 C 45.054 0.451 45.371 0.712 45.594 1.058 C 45.817 1.404 45.905 1.828 45.858 2.33 L 44.358 2.574 C 44.365 2.371 44.344 2.191 44.297 2.035 C 44.25 1.879 44.175 1.747 44.074 1.638 C 43.979 1.53 43.858 1.448 43.709 1.394 C 43.561 1.333 43.385 1.302 43.182 1.302 C 42.973 1.302 42.797 1.33 42.655 1.384 C 42.52 1.438 42.415 1.513 42.341 1.608 C 42.273 1.702 42.238 1.817 42.239 1.933 C 42.239 2.076 42.294 2.194 42.402 2.289 C 42.51 2.384 42.665 2.469 42.868 2.544 C 43.071 2.611 43.31 2.683 43.588 2.757 C 43.881 2.839 44.172 2.931 44.459 3.032 C 44.749 3.123 45.025 3.253 45.28 3.419 C 45.526 3.57 45.731 3.78 45.878 4.029 C 46.034 4.28 46.111 4.599 46.111 4.985 C 46.111 5.433 45.993 5.806 45.757 6.105 C 45.527 6.403 45.206 6.627 44.794 6.776 C 44.388 6.926 43.919 7 43.385 7 Z M 35.356 6.858 L 35.356 0.142 L 36.998 0.142 L 36.998 6.858 Z M 36.582 6.858 L 36.582 5.484 L 40.14 5.484 L 40.14 6.858 Z M 36.582 4.09 L 36.582 2.859 L 39.674 2.859 L 39.674 4.09 Z M 36.582 1.516 L 36.582 0.142 L 40.14 0.142 L 40.14 1.516 Z M 27.021 6.858 L 27.021 0.142 L 29.484 0.142 L 30.852 4.914 L 30.872 4.914 L 32.21 0.142 L 34.542 0.142 L 34.542 6.858 L 33.021 6.858 L 33.021 1.801 L 33.001 1.801 L 31.491 6.858 L 30.051 6.858 L 28.561 1.801 L 28.541 1.801 L 28.541 6.858 Z M 19.974 6.858 L 22.214 0.142 L 24.343 0.142 L 26.573 6.858 L 24.799 6.858 L 23.299 1.475 L 23.238 1.475 L 21.728 6.858 Z M 21.241 5.667 L 21.241 4.507 L 25.509 4.507 L 25.509 5.667 Z M 14.044 6.858 L 14.044 0.142 L 16.821 0.142 C 17.118 0.142 17.399 0.17 17.662 0.224 C 17.933 0.271 18.176 0.346 18.392 0.448 C 18.615 0.549 18.808 0.678 18.97 0.834 C 19.133 0.992 19.261 1.183 19.345 1.394 C 19.433 1.604 19.476 1.845 19.476 2.116 C 19.476 2.327 19.439 2.527 19.365 2.717 C 19.297 2.9 19.186 3.066 19.031 3.215 C 18.882 3.364 18.686 3.49 18.443 3.592 C 18.206 3.687 17.922 3.754 17.591 3.795 L 17.591 3.876 C 18.024 3.897 18.358 3.982 18.595 4.131 C 18.831 4.28 19.007 4.47 19.122 4.701 C 19.246 4.931 19.338 5.178 19.395 5.433 L 19.75 6.858 L 17.936 6.858 L 17.683 5.525 C 17.642 5.294 17.578 5.108 17.49 4.965 C 17.409 4.823 17.29 4.718 17.135 4.65 C 16.98 4.582 16.774 4.548 16.517 4.548 L 15.686 4.548 L 15.686 6.858 Z M 15.686 3.276 L 16.638 3.276 C 17.01 3.276 17.294 3.205 17.49 3.063 C 17.686 2.92 17.784 2.703 17.784 2.411 C 17.784 2.093 17.693 1.855 17.51 1.699 C 17.328 1.543 17.051 1.465 16.679 1.465 L 15.686 1.465 L 15.686 3.276 Z M 8.877 6.858 L 8.877 0.142 L 10.519 0.142 L 10.519 6.858 Z M 9.698 4.467 L 9.698 3.124 L 13.104 3.124 L 13.104 4.467 Z M 9.698 1.516 L 9.698 0.142 L 13.448 0.142 L 13.448 1.516 Z" fill="rgb(0,0,0)"></path><path d="M 6.673 5.258 C 6.673 6.143 5.959 6.86 5.078 6.86 L 1.596 6.86 C 0.716 6.86 0.002 6.143 0.002 5.258 L 0.002 3.512 C 0.886 4.4 2.086 4.899 3.337 4.899 C 4.588 4.899 5.789 4.4 6.673 3.511 L 6.673 5.258 Z M 0.001 3.512 L 0 3.511 L 0.001 3.51 L 0.001 3.513 Z M 6.674 3.511 L 6.673 3.511 L 6.673 3.51 Z M 6.407 1.861 C 6.554 1.861 6.673 1.981 6.673 2.128 L 6.673 3.51 L 5.03 1.861 Z M 1.643 1.861 L 0.002 3.51 L 0.002 2.128 C 0.002 1.981 0.121 1.861 0.267 1.861 L 1.643 1.861 Z M 5.03 1.861 L 1.643 1.861 L 3.337 0.161 Z" fill="rgb(64,212,27)"></path></g></svg>
           
        </div>
        </a>
      </div>
    
`;

//Function to grab the fonts from google and add them to the head of the document
function ensureFontLinks() {
  const existing = document.querySelector("link[data-banner-fonts]");
  if (existing) return;

  const head = document.head || document.getElementsByTagName("head")[0];
  if (!head) return;

  const preconnect1 = document.createElement("link");
  preconnect1.rel = "preconnect";
  preconnect1.href = "https://fonts.googleapis.com";
  preconnect1.setAttribute("data-banner-fonts", "");

  const preconnect2 = document.createElement("link");
  preconnect2.rel = "preconnect";
  preconnect2.href = "https://fonts.gstatic.com";
  preconnect2.crossOrigin = "";
  preconnect2.setAttribute("data-banner-fonts", "");

  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = "../../styles/css2-600c45.css";
  stylesheet.setAttribute("data-banner-fonts", "");

  head.append(preconnect1, preconnect2, stylesheet);
}
//Run the function to ensure the font links are loaded
ensureFontLinks();

class LicenseCache {
  constructor(cacheDuration = 60000) {
    // 1 minute default
    this.cacheDuration = cacheDuration;
    this.cacheKey = "frameship-license-cache";
    this.memoryCache = null;
    this.memoryCacheTime = null;
  }

  // Get cached license data
  get() {
    // First check in-memory cache (fastest)
    if (
      this.memoryCache &&
      this.memoryCacheTime &&
      Date.now() - this.memoryCacheTime < this.cacheDuration
    ) {
      return this.memoryCache;
    }

    // Then check localStorage (cross-tab persistence)
    try {
      const stored = localStorage.getItem(this.cacheKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.data && parsed.timestamp && Date.now() - parsed.timestamp < this.cacheDuration) {
          // Update memory cache
          this.memoryCache = parsed.data;
          this.memoryCacheTime = parsed.timestamp;
          return parsed.data;
        }
      }
    } catch (error) {
      console.warn("Error reading license cache from localStorage:", error);
    }

    return null;
  }

  // Set license data in cache
  set(data) {
    const cacheData = {
      data: data,
      timestamp: Date.now(),
    };

    // Update memory cache
    this.memoryCache = data;
    this.memoryCacheTime = cacheData.timestamp;

    // Update localStorage
    try {
      localStorage.setItem(this.cacheKey, JSON.stringify(cacheData));
    } catch (error) {
      console.warn("Error saving license cache to localStorage:", error);
    }
  }

  // Clear cache
  clear() {
    this.memoryCache = null;
    this.memoryCacheTime = null;
    try {
      localStorage.removeItem(this.cacheKey);
    } catch (error) {
      console.warn("Error clearing license cache from localStorage:", error);
    }
  }

  // Check if cache is valid
  isValid() {
    const cached = this.get();
    return cached !== null;
  }
}

// Safely mount the banner once the DOM is ready. Guard against duplicates.
const mountBanner = () => {
  if (!document || !document.body) return;
  if (document.getElementById("license-banner")) return; // already mounted
  const banner = document.createElement("div");
  banner.id = "license-banner";
  banner.innerHTML = BANNER_HTML;
  document.body.appendChild(banner);
};

const scheduleMount = () => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountBanner, { once: true });
  } else {
    mountBanner();
  }
};

// Mock license check script with caching
(async function () {
  const licenseCache = new LicenseCache(60000); // 1 minute cache

  try {
    // Check cache first
    let licenseData = licenseCache.get();

    if (!licenseData) {
      // Cache miss - make API call
      // console.log("License cache miss - fetching from API");

      // Get license ID from frameship-shopify-config script tag
      let licenseId = null;
      try {
        const configEl = document.getElementById("frameship-shopify-config");
        if (configEl?.textContent) {
          const config = JSON.parse(configEl.textContent);
          licenseId = config.licenseId || null;
        }
      } catch (error) {
        console.warn("Error reading license ID from script tag:", error);
      }

      if (!licenseId) {
        // No license ID found, assume free license
        licenseData = { free: true };
        licenseCache.set(licenseData);
        if (licenseData.free === true) {
          scheduleMount();
        }
        return;
      }

      // Get current URL
      const currentUrl = encodeURIComponent(window.location.href);

      // Build request URL with parameters (no user_id needed)
      // const licenseUrl = `http://localhost:8787/license-check?url=${currentUrl}&license_id=${encodeURIComponent(
      //   licenseId
      // )}`;
      const licenseUrl = `https://frameship-backend.account-ba7.workers.dev/license-check?url=${currentUrl}&license_id=${encodeURIComponent(
        licenseId
      )}`;

      // Make request to backend license endpoint
      const headers = {
        "Content-Type": "application/json",
        "X-API-Key": "9c170a2a758c830a7b191139343767cea3734f5e8c499e8f21d0dcc3a7979805",
      };
      const response = await fetch(licenseUrl, { headers });
      licenseData = await response.json();
      // licenseData = {
      //   free: true,
      // };
      // console.log("license-management licenseData", licenseData);

      // Cache the response
      licenseCache.set(licenseData);
      // console.log("License data cached for 1 minute");
    } else {
      console.log("License data loaded from cache");
    }

    // If free is true, show license banner
    if (licenseData.free === true) {
      scheduleMount();
    }
  } catch (error) {
    console.error("License check failed:", error);
    // If API fails, try to use cached data as fallback
    const cachedData = licenseCache.get();
    if (cachedData && cachedData.free === true) {
      console.log("Using cached license data as fallback");
      scheduleMount();
    }
  }
})();
