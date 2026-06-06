// Rural Health Education Platform - Google Analytics Integration
// Initialize Google Analytics with your tracking ID

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// Replace 'YOUR-GA-ID' with your actual Google Analytics 4 property ID (G-XXXXXXXXXX)
gtag('config', 'YOUR-GA-ID', {
  'page_path': window.location.pathname,
  'send_page_view': true
});

// Track page views
function trackPageView(pageName) {
  gtag('event', 'page_view', {
    'page_title': pageName,
    'page_path': window.location.pathname
  });
}

// Track link clicks
document.addEventListener('click', function(event) {
  var target = event.target.closest('a');
  if (target && target.href) {
    var linkUrl = target.href;
    var linkText = target.textContent || target.innerText;
    
    // Only track external links or links to other pages
    if (linkUrl.indexOf(window.location.hostname) === -1 || linkUrl.indexOf('#') > -1) {
      gtag('event', 'link_click', {
        'event_category': 'engagement',
        'event_label': linkText,
        'value': linkUrl
      });
    }
  }
});

// Track form submissions (feedback form)
var feedbackForm = document.querySelector('form');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', function() {
    gtag('event', 'form_submit', {
      'event_category': 'engagement',
      'event_label': 'Feedback Form',
      'value': 'User submitted feedback'
    });
  });
}

// Track scroll depth
var scrollTracked = false;
window.addEventListener('scroll', function() {
  var scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
  
  // Track at 50% and 90% scroll
  if (scrollPercentage > 50 && !scrollTracked) {
    gtag('event', 'scroll_depth', {
      'event_category': 'engagement',
      'event_label': 'Scrolled 50%',
      'value': scrollPercentage
    });
    scrollTracked = true;
  }
  
  if (scrollPercentage > 90) {
    gtag('event', 'scroll_depth', {
      'event_category': 'engagement',
      'event_label': 'Scrolled 90%',
      'value': scrollPercentage
    });
  }
});

// Track time on page
var timeOnPage = 0;
setInterval(function() {
  timeOnPage++;
}, 1000);

window.addEventListener('beforeunload', function() {
  gtag('event', 'page_exit', {
    'event_category': 'engagement',
    'event_label': document.title,
    'value': timeOnPage
  });
});

// Analytics configuration guide:
// 1. Go to https://analytics.google.com
// 2. Sign in with Google account
// 3. Create new property for this website
// 4. Get your tracking ID (looks like: G-XXXXXXXXXX)
// 5. Replace 'YOUR-GA-ID' in the gtag config above with your actual ID
// 6. This script will automatically track:
//    - Page views
//    - Link clicks
//    - Form submissions
//    - Scroll depth
//    - Time on page
// 7. View analytics dashboard to see user behavior and popular pages
