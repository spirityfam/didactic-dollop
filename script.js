// === Glassmorphism Services with Video Modal ===
document.addEventListener('DOMContentLoaded', function() {
  const videoThumbnails = document.querySelectorAll('.service-video-thumbnail');
  const knowMoreBtns = document.querySelectorAll('.service-knowmore-btn-glass');
  const videoModal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  const modalClose = document.querySelector('.modal-close');
  const modalOverlay = document.querySelector('.modal-overlay');
  
  // Video thumbnail click handlers
  videoThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', function() {
      const videoId = this.getAttribute('data-video-id');
      const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
      
      modalVideo.src = videoUrl;
      videoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Close modal handlers
  function closeModal() {
    videoModal.classList.remove('active');
    modalVideo.src = '';
    document.body.style.overflow = '';
  }
  
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
      closeModal();
    }
  });
  
  // Know More button handlers
  knowMoreBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
      const serviceNames = [
        'In-Center Wellness Experience',
        'Virtual Nutrition Coaching', 
        '10-Day Weight Loss Challenge'
      ];
      
      // Open booking link for Virtual Nutrition Coaching
      if (index === 1) {
        window.open('https://calendly.com/spirityfam/30min', '_blank');
      } else {
        // For other services, you can add specific actions
        alert(`Learn more about ${serviceNames[index]}. This could open a detailed page or booking form.`);
      }
    });
  });
});

// === Mobile Navigation Toggle ===
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.querySelector('.nav-mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function() {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }
});

// === Testimonial Video Carousel ===
const carouselTrack = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.testimonial-slide'));
const leftArrow = document.querySelector('.carousel-arrow.left');
const rightArrow = document.querySelector('.carousel-arrow.right');
const indicators = Array.from(document.querySelectorAll('.indicator'));
let currentSlide = 0;
let autoPlayInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  indicators.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  let next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  let prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
}

rightArrow.addEventListener('click', nextSlide);
leftArrow.addEventListener('click', prevSlide);
indicators.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});

function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 7000);
}
function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

carouselTrack.addEventListener('mouseenter', stopAutoPlay);
carouselTrack.addEventListener('mouseleave', startAutoPlay);

showSlide(0);
startAutoPlay();

// === AOS Initialization ===
document.addEventListener('DOMContentLoaded', function() {
  if (window.AOS) {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: 'ease-in-out',
      delay: 0,
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      mirror: false,
      anchorPlacement: 'top-bottom'
    });
    
    // Force refresh after initialization
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  } else {
    // Fallback: make all elements visible if AOS fails to load
    console.warn('AOS not loaded, applying fallback visibility');
    const aosElements = document.querySelectorAll('[data-aos]');
    aosElements.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.visibility = 'visible';
    });
  }
});

// === GSAP + ScrollTrigger Animations ===
document.addEventListener('DOMContentLoaded', function() {
  if (window.gsap && window.ScrollTrigger) {
    gsap.utils.toArray('.service-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.7,
        delay: i * 0.1,
        ease: 'power2.out',
      });
    });
    gsap.utils.toArray('.about-icon-block').forEach((block, i) => {
      gsap.from(block, {
        scrollTrigger: {
          trigger: block,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        delay: i * 0.08,
        ease: 'power2.out',
      });
    });
    gsap.from('.hero-title', {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });
    gsap.from('.hero-subtitle', {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: 'power2.out',
    });
    gsap.from('.btn-primary', {
      scale: 0.8,
      opacity: 0,
      duration: 0.7,
      delay: 0.4,
      ease: 'back.out(1.7)',
    });
  }
});

// === Interactive About Us Section (GSAP Animated) ===
document.addEventListener('DOMContentLoaded', function() {
  const aboutPoints = document.querySelectorAll('.about-point');
  let openIndex = null;

  aboutPoints.forEach((point, idx) => {
    const desc = point.querySelector('.about-point-desc');
    gsap.set(desc, {height: 0, opacity: 0, display: 'none'});

    point.addEventListener('click', function(e) {
      e.stopPropagation();
      if (openIndex === idx) {
        // Collapse if already open
        gsap.to(desc, {height: 0, opacity: 0, duration: 0.35, display: 'none', onComplete: () => {
          point.classList.remove('active');
        }});
        openIndex = null;
      } else {
        // Close any open
        aboutPoints.forEach((other, i) => {
          if (i !== idx) {
            const otherDesc = other.querySelector('.about-point-desc');
            gsap.to(otherDesc, {height: 0, opacity: 0, duration: 0.35, display: 'none', onComplete: () => {
              other.classList.remove('active');
            }});
          }
        });
        // Open this one
        point.classList.add('active');
        gsap.set(desc, {display: 'block'});
        gsap.to(desc, {height: 'auto', opacity: 1, duration: 0.45, ease: 'power2.out'});
        openIndex = idx;
      }
    });
    // Keyboard accessibility
    point.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        point.click();
      }
    });
  });
});

// === Animated Services Section (GSAP) ===
document.addEventListener('DOMContentLoaded', function() {
  const serviceCards = document.querySelectorAll('.animated-services .service-card');
  const knowMoreBtns = document.querySelectorAll('.animated-services .service-knowmore-btn');
  let openIndex = null;

  knowMoreBtns.forEach((btn, idx) => {
    const card = serviceCards[idx];
    const panel = card.querySelector('.service-desc-panel');
    gsap.set(panel, {height: 0, autoAlpha: 0, display: 'none'});

    btn.addEventListener('click', function(e) {
      e.preventDefault();
      if (openIndex === idx) {
        // Collapse if already open
        gsap.to(panel, {
          height: 0,
          autoAlpha: 0,
          duration: 0.35,
          onStart: () => panel.style.overflow = 'hidden',
          onComplete: () => {
            panel.style.display = 'none';
            card.classList.remove('active');
            if (window.ScrollTrigger) ScrollTrigger.refresh();
          }
        });
        openIndex = null;
      } else {
        // Close any open
        serviceCards.forEach((other, i) => {
          const otherPanel = other.querySelector('.service-desc-panel');
          if (i !== idx && otherPanel && otherPanel.style.display !== 'none') {
            gsap.to(otherPanel, {
              height: 0,
              autoAlpha: 0,
              duration: 0.35,
              onStart: () => otherPanel.style.overflow = 'hidden',
              onComplete: () => {
                otherPanel.style.display = 'none';
                other.classList.remove('active');
                if (window.ScrollTrigger) ScrollTrigger.refresh();
              }
            });
          }
        });
        // Open this one
        card.classList.add('active');
        panel.style.display = 'flex';
        const targetHeight = panel.scrollHeight;
        gsap.fromTo(panel,
          {height: 0, autoAlpha: 0},
          {
            height: targetHeight,
            autoAlpha: 1,
            duration: 0.45,
            ease: 'power2.out',
            onUpdate: () => panel.style.overflow = 'hidden',
            onComplete: () => {
              panel.style.height = 'auto';
              panel.style.overflow = '';
              if (window.ScrollTrigger) ScrollTrigger.refresh();
            }
          }
        );
        openIndex = idx;
      }
    });
  });

  // GSAP ScrollTrigger for card entrance
  if (window.gsap && window.ScrollTrigger) {
    gsap.utils.toArray('.animated-services .service-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        duration: 0.7,
        delay: i * 0.1,
        ease: 'power2.out',
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // GSAP hero section animation (HealthifyMe style)
  if (window.gsap) {
    var left = document.querySelector('.hero-left-panel');
    var logo = document.querySelector('.hero-logo-img');
    var tagline = document.querySelector('.hero-tagline');
    var cta = document.querySelector('.hero-cta');
    var right = document.querySelector('.hero-right-panel');
    // Animate left content (logo, tagline, CTA)
    if (left && logo && tagline && cta) {
      gsap.from(logo, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 0.1
      });
      gsap.from(tagline, {
        x: -40,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
      });
      gsap.from(cta, {
        x: -20,
        opacity: 0,
        duration: 0.7,
        delay: 0.55,
        ease: 'back.out(1.7)',
      });
    }
    // Animate right background image (fade-in + slow scale-up)
    if (right) {
      gsap.fromTo(right,
        { opacity: 0, scale: 1.04 },
        { opacity: 1, scale: 1, duration: 1.5, delay: 0.3, ease: 'power2.out', clearProps: 'transform' }
      );
      setTimeout(function() {
        right.classList.add('blend-animate');
      }, 400);
    }
  }
});

// === VIDEO MODAL FUNCTIONALITY ===

// Fixed video modal implementation
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing video modal...');
    
    // Get modal elements
    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("youtubeFrame");
    const closeBtn = document.querySelector(".modal .close");
    
    // Check if elements exist
    if (!modal) {
        console.error('Modal element not found!');
        return;
    }
    if (!iframe) {
        console.error('Iframe element not found!');
        return;
    }
    if (!closeBtn) {
        console.error('Close button not found!');
        return;
    }
    
    console.log('Modal elements found successfully');
    
    // Get all service video elements
    const serviceVideos = document.querySelectorAll(".service-video");
    console.log('Found service videos:', serviceVideos.length);
    
    // Add click event listeners to each video
    serviceVideos.forEach((card, index) => {
        const videoId = card.getAttribute("data-video-id");
        console.log(`Video ${index + 1}:`, videoId);
        
                    card.addEventListener("click", function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Video clicked:', videoId);
                
                if (videoId) {
                    // Set iframe source with autoplay - using exact format from requirements
                    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                    iframe.src = videoUrl;
                    
                    // Show modal
                    modal.style.display = "block";
                    document.body.classList.add("modal-open");
                    
                    console.log('Modal opened for video:', videoId);
                    console.log('Video URL:', videoUrl);
                } else {
                    console.error('No video ID found for this card');
                }
            });
    });
    
    // Close modal when close button is clicked
    closeBtn.addEventListener("click", function() {
        console.log('Close button clicked');
        modal.style.display = "none";
        iframe.src = "";
        document.body.classList.remove("modal-open");
    });
    
    // Close modal when clicking outside
    window.addEventListener("click", function(e) {
        if (e.target === modal) {
            console.log('Modal backdrop clicked');
            modal.style.display = "none";
            iframe.src = "";
            document.body.classList.remove("modal-open");
        }
    });
    
    // Close modal with escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            console.log('Escape key pressed');
            modal.style.display = "none";
            iframe.src = "";
            document.body.classList.remove("modal-open");
        }
    });
    
    console.log('Video modal functionality initialized successfully');
});

// === ACCORDION FUNCTIONALITY ===
function toggleAccordion(element) {
    const allAccordions = document.querySelectorAll('.about-accordion-card');
    allAccordions.forEach(accordion => {
        if (accordion !== element) {
            const content = accordion.querySelector('.accordion-content');
            content.style.maxHeight = 0;
        }
    });
    
    // Toggle current accordion item
    const content = element.querySelector('.accordion-content');
    if (content.style.maxHeight === '0px' || content.style.maxHeight === '') {
        content.style.maxHeight = content.scrollHeight + 'px';
    } else {
        content.style.maxHeight = '0';
    }
}

// Enhanced GSAP Animations for Redesigned Sections
gsap.registerPlugin(ScrollTrigger);

// About Section Animations
gsap.from('.about-icon-item', {
    scrollTrigger: {
        trigger: '.about-section-redesigned',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
});

gsap.from('.about-card-glass', {
    scrollTrigger: {
        trigger: '.about-section-redesigned',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    x: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
    ease: 'power2.out'
});

// Services Section Animations
gsap.from('.service-card-glass', {
    scrollTrigger: {
        trigger: '.services-section-redesigned',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
});

// Testimonials Section Animations
gsap.from('.testimonial-card-glass', {
    scrollTrigger: {
        trigger: '.testimonials-section-redesigned',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'back.out(1.7)'
});

// Coaches Section Animations
gsap.from('.coach-card-glass', {
    scrollTrigger: {
        trigger: '.coaches-section-redesigned',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
});

// CTA Section Animations
gsap.from('.cta-heading', {
    scrollTrigger: {
        trigger: '.cta-section-redesigned',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
});

gsap.from('.cta-buttons', {
    scrollTrigger: {
        trigger: '.cta-section-redesigned',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: 'power2.out'
});

// Footer Animations
gsap.from('.footer-content', {
    scrollTrigger: {
        trigger: '.footer-redesigned',
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none reverse'
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
});

// Enhanced Hover Effects
document.addEventListener('DOMContentLoaded', function() {
    // Service card hover effects
    const serviceCards = document.querySelectorAll('.service-card-glass');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.02,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // About card hover effects
    const aboutCards = document.querySelectorAll('.about-card-glass');
    aboutCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                y: -5,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Testimonial card hover effects
    const testimonialCards = document.querySelectorAll('.testimonial-card-glass');
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                y: -5,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Coach card hover effects
    const coachCards = document.querySelectorAll('.coach-card-glass');
    coachCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                y: -8,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Enhanced button interactions
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-know-more, .btn-join-now, .btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
        
        button.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
        
        button.addEventListener('click', function() {
            gsap.to(this, {
                scale: 0.95,
                duration: 0.1,
                ease: 'power2.out',
                yoyo: true,
                repeat: 1
            });
        });
    });
});

// Parallax effect for section backgrounds
gsap.to('.about-section-redesigned', {
    scrollTrigger: {
        trigger: '.about-section-redesigned',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
    },
    backgroundPosition: '50% 100%',
    ease: 'none'
});

gsap.to('.testimonials-section-redesigned', {
    scrollTrigger: {
        trigger: '.testimonials-section-redesigned',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
    },
    backgroundPosition: '50% 100%',
    ease: 'none'
});

// Icon circle animations
document.addEventListener('DOMContentLoaded', function() {
    const iconCircles = document.querySelectorAll('.icon-circle');
    
    iconCircles.forEach((circle, index) => {
        gsap.set(circle, {
            rotation: 0
        });
        
        circle.addEventListener('mouseenter', function() {
            gsap.to(this, {
                rotation: 360,
                scale: 1.1,
                duration: 0.6,
                ease: 'back.out(1.7)'
            });
        });
        
        circle.addEventListener('mouseleave', function() {
            gsap.to(this, {
                rotation: 0,
                scale: 1,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
    });
});

// Social link hover effects
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.2,
                rotation: 10,
                duration: 0.3,
                ease: 'back.out(1.7)'
            });
        });
        
        link.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
});

// Spirity Wellness Club - Enhanced Scroll Animations
document.addEventListener('DOMContentLoaded', function() {
    console.log('Enhanced animations loading...');

    // Initialize AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
        delay: 0
    });

    // GSAP ScrollTrigger setup
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animations
    const heroAnimations = () => {
        const tl = gsap.timeline();
        
        tl.from('.hero-hm-logo', {
            duration: 1.2,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        })
        .from('.hero-hm-tagline', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.6')
        .from('.hero-hm-cta', {
            duration: 0.8,
            y: 20,
            opacity: 0,
            ease: 'back.out(1.7)'
        }, '-=0.4')
        .from('.hero-hm-illustration', {
            duration: 1.4,
            x: 100,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.8');
    };

    // Parallax effect for hero background
    gsap.to('.hero-hm-right', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero-healthifyme',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });

    // About Section Staggered Animations
    const aboutAnimations = () => {
        gsap.from('.about-accordion-card', {
            duration: 0.8,
            y: 60,
            opacity: 0,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.about-section-redesigned',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    };

    // Services Section Enhanced Animations
    const servicesAnimations = () => {
        // Service cards staggered entrance
        gsap.from('.service-card-glass', {
            duration: 1,
            y: 80,
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.services-section-redesigned',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });

        // Service video hover effects
        gsap.utils.toArray('.service-video').forEach(video => {
            gsap.set(video, { transformOrigin: 'center center' });
            
            video.addEventListener('mouseenter', () => {
                gsap.to(video, {
                    duration: 0.3,
                    scale: 1.05,
                    ease: 'power2.out'
                });
            });
            
            video.addEventListener('mouseleave', () => {
                gsap.to(video, {
                    duration: 0.3,
                    scale: 1,
                    ease: 'power2.out'
                });
            });
        });
    };

    // Testimonials Section Animations
    const testimonialsAnimations = () => {
        gsap.from('.testimonial-card-glass', {
            duration: 1,
            y: 60,
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.testimonials-section-redesigned',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });

        // Testimonial video hover effects
        gsap.utils.toArray('.testimonial-video').forEach(video => {
            gsap.set(video, { transformOrigin: 'center center' });
            
            video.addEventListener('mouseenter', () => {
                gsap.to(video, {
                    duration: 0.3,
                    scale: 1.03,
                    ease: 'power2.out'
                });
            });
            
            video.addEventListener('mouseleave', () => {
                gsap.to(video, {
                    duration: 0.3,
                    scale: 1,
                    ease: 'power2.out'
                });
            });
        });
    };

    // Coaches Section Animations
    const coachesAnimations = () => {
        gsap.from('.coach-card-glass', {
            duration: 1,
            y: 60,
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.coaches-section-redesigned',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    };

    // CTA Section Animations
    const ctaAnimations = () => {
        gsap.from('.cta-heading', {
            duration: 1,
            y: 40,
            opacity: 0,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.cta-section-redesigned',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });

        gsap.from('.cta-buttons', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.cta-section-redesigned',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    };

    // Footer Animations
    const footerAnimations = () => {
        gsap.from('.footer-content', {
            duration: 1,
            y: 40,
            opacity: 0,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.footer-redesigned',
                start: 'top 90%',
                end: 'bottom 10%',
                toggleActions: 'play none none reverse'
            }
        });
    };

    // Floating Buttons Animation
    const floatingButtonsAnimation = () => {
        gsap.from('.floating-btn', {
            duration: 1,
            y: 100,
            opacity: 0,
            stagger: 0.2,
            ease: 'back.out(1.7)',
            delay: 2
        });
    };

    // Smooth Section Transitions
    const smoothSectionTransitions = () => {
        gsap.utils.toArray('section').forEach(section => {
            gsap.from(section, {
                duration: 1.2,
                opacity: 0,
                y: 30,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 85%',
                    end: 'bottom 15%',
                    toggleActions: 'play none none reverse'
                }
            });
        });
    };

    // Enhanced Navigation Animations
    const navigationAnimations = () => {
        // Navbar entrance
        gsap.from('.navbar-fixed', {
            duration: 1,
            y: -100,
            opacity: 0,
            ease: 'power2.out'
        });

        // Nav links staggered entrance
        gsap.from('.nav-link', {
            duration: 0.6,
            y: -20,
            opacity: 0,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 0.3
        });
    };

    // Text Reveal Animations
    const textRevealAnimations = () => {
        gsap.utils.toArray('.section-heading').forEach(heading => {
            gsap.from(heading, {
                duration: 1,
                y: 40,
                opacity: 0,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: heading,
                    start: 'top 85%',
                    end: 'bottom 15%',
                    toggleActions: 'play none none reverse'
                }
            });
        });
    };

    // Card Hover Effects
    const cardHoverEffects = () => {
        gsap.utils.toArray('.service-card-glass, .testimonial-card-glass, .coach-card-glass').forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    duration: 0.3,
                    y: -5,
                    ease: 'power2.out'
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    duration: 0.3,
                    y: 0,
                    ease: 'power2.out'
                });
            });
        });
    };

    // Initialize all animations
    const initAnimations = () => {
        heroAnimations();
        aboutAnimations();
        servicesAnimations();
        testimonialsAnimations();
        coachesAnimations();
        ctaAnimations();
        footerAnimations();
        floatingButtonsAnimation();
        smoothSectionTransitions();
        navigationAnimations();
        textRevealAnimations();
        cardHoverEffects();
    };

    // Performance optimization: Use requestAnimationFrame
    requestAnimationFrame(() => {
        initAnimations();
    });

    // Refresh ScrollTrigger on window resize
    window.addEventListener('resize', () => {
        ScrollTrigger.refresh();
    });

    // Mobile optimization
    if (window.innerWidth <= 768) {
        // Reduce animation intensity on mobile
        gsap.set('.service-card-glass, .testimonial-card-glass, .coach-card-glass', {
            y: 0
        });
    }

    console.log('Enhanced animations loaded successfully!');
});

// Video Modal Functionality (Enhanced)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Video modal functionality loading...');
    
    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("videoIframe");
    const closeBtn = document.querySelector(".video-modal-close");
    
    if (!modal || !iframe || !closeBtn) {
        console.error('Modal elements missing:', {modal: !!modal, iframe: !!iframe, closeBtn: !!closeBtn});
        return;
    }
    
    const serviceVideos = document.querySelectorAll(".service-video");
    const testimonialVideos = document.querySelectorAll(".testimonial-video");
    const allVideos = [...serviceVideos, ...testimonialVideos];
    console.log('Found', allVideos.length, 'videos');
    
    allVideos.forEach((video, index) => {
        const videoId = video.getAttribute("data-video-id");
        console.log('Video', index + 1, ':', videoId);
        
        video.addEventListener("click", function(e) {
            e.preventDefault();
            console.log('Video clicked:', videoId);
            
            if (videoId) {
                const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                iframe.src = videoUrl;
                
                // Animate modal entrance
                gsap.set(modal, { display: 'block', opacity: 0, scale: 0.8 });
                gsap.to(modal, {
                    duration: 0.4,
                    opacity: 1,
                    scale: 1,
                    ease: 'back.out(1.7)'
                });
                
                document.body.classList.add("modal-open");
                console.log('Video URL:', videoUrl);
            }
        });
    });
    
    const closeModal = () => {
        gsap.to(modal, {
            duration: 0.3,
            opacity: 0,
            scale: 0.8,
            ease: 'power2.in',
            onComplete: () => {
                modal.style.display = 'none';
                iframe.src = '';
                document.body.classList.remove("modal-open");
            }
        });
    };
    
    closeBtn.addEventListener("click", closeModal);
    
    window.addEventListener("click", function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    console.log('Video modal functionality loaded successfully!');
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                gsap.to(window, {
                    duration: 1.2,
                    scrollTo: {
                        y: targetSection,
                        offsetY: 80
                    },
                    ease: 'power2.inOut'
                });
            }
        });
    });
});

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.nav-mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Animate menu items
            const menuItems = navMenu.querySelectorAll('.nav-link');
            if (navMenu.classList.contains('active')) {
                gsap.from(menuItems, {
                    duration: 0.4,
                    y: -20,
                    opacity: 0,
                    stagger: 0.1,
                    ease: 'power2.out'
                });
            }
        });
    }
});
