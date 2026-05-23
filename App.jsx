import React, { useState, useEffect } from 'react';
import logoImage from './pictures/june rental logo.png';
import aceProImage from './pictures/Insta360-Ace-Pro-2.png';
import jblImage from './pictures/JBL_PARTYBOX_OTG_ESSENTIAL.png';
import instaxImage from './pictures/intaxminipink.png';
import tiktokLogo from './pictures/tiktoklogo.png';
import coverPhoto from './pictures/facebookpaage cover photo.png';

const products = [
  {
    id: 'acepro2',
    name: 'Insta360 Ace Pro 2',
    image: aceProImage,
    tagline: 'Capture it all. Anywhere.',
    rates: [
      { label: '1 Day', price: '₱500' },
      { label: '2–4 Days', price: '₱450/day' },
      { label: '5+ Days', price: '₱400/day' },
    ],
    inclusions: ['Screen Tempered Glass', 'Charger Cord/Adapter', 'Tripod', 'Extra Battery'],
    addons: ['Waterproof Protective Case ₱50/day', 'Chest Belt ₱50/day'],
    deposit: '₱1,000',
    badge: 'Action Camera',
    link: 'https://web.facebook.com/junesnapandsoundrentals',
  },
  {
    id: 'partybox',
    name: 'JBL PartyBox On-The-Go Essential',
    image: jblImage,
    tagline: 'Bring the beat. Own the night.',
    rates: [
      { label: '1 Day', price: '₱450' },
      { label: '2–4 Days', price: '₱400/day' },
      { label: '5+ Days', price: '₱380/day' },
    ],
    inclusions: ['JBL Wireless Microphone', 'Power Cable', 'Carrying Strap', 'Extra Battery for Mic'],
    addons: [],
    deposit: '₱500',
    badge: 'Speaker System',
    link: 'https://web.facebook.com/junesnapandsoundrentals',
  },
  {
    id: 'instax12',
    name: 'Instax Mini 12 (Pink)',
    image: instaxImage,
    tagline: 'Snap it. Print it. Keep it forever.',
    rates: [
      { label: '1 Day', price: '₱200' },
      { label: '2–4 Days', price: '₱180/day' },
      { label: '5+ Days', price: '₱150/day' },
    ],
    inclusions: ['Protective Case', 'Neck Strap', 'AA Battery'],
    addons: ['10 Films ₱360'],
    deposit: '₱300',
    badge: 'Instant Camera',
    link: 'https://web.facebook.com/junesnapandsoundrentals',
  },
];

const navItems = [
  { label: 'Home', target: 'hero' },
  { label: 'Products', target: 'products' },
  { label: 'Rates', target: 'rates' },
  { label: 'How It Works', target: 'howItWorks' },
  { label: 'Contact', target: 'contact' },
];

const FacebookIcon = () => (
  <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07c0 5.04 3.66 9.24 8.44 9.92v-7.03h-2.54v-2.89h2.54V9.42c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.26 0-1.65.78-1.65 1.58v1.9h2.81l-.45 2.89h-2.36v7.03C18.34 21.31 22 17.11 22 12.07z" />
  </svg>
);

const HeroImage = ({ src, title }) => {
  const [hasError, setHasError] = useState(false);

  return hasError ? (
    <div className="image-fallback">
      <span>{title}</span>
    </div>
  ) : (
    <img
      src={src}
      alt={title}
      onError={() => setHasError(true)}
      className="hero-product-image"
    />
  );
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState({ acepro2: false, partybox: false, instax12: false });

  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap';
    document.head.appendChild(fontLink);

    return () => {
      document.head.removeChild(fontLink);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('.fade-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (elementId) => {
    setMenuOpen(false);
    const section = document.getElementById(elementId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleAccordion = (id) => {
    setOpenAccordion((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="page-shell">
      <div className="background-visual" style={{ backgroundImage: `url(${coverPhoto})` }} />
      <style>{`
        :root {
          color-scheme: dark;
        }

        * {
          box-sizing: border-box;
        }

        html, body, #root {
          margin: 0;
          min-height: 100%;
          background: #0a0a0a;
          color: #f0ede6;
          font-family: 'DM Sans', sans-serif;
          scroll-behavior: smooth;
        }

        body {
          overflow-x: hidden;
          background-image: radial-gradient(circle at top left, rgba(201,169,110,0.06) 0%, transparent 20%),
            radial-gradient(circle at 80% 10%, rgba(201,169,110,0.05) 0%, transparent 18%),
            radial-gradient(circle at 50% 70%, rgba(255,255,255,0.03) 0%, transparent 22%);
          background-attachment: fixed;
        }

        .page-shell {
          position: relative;
          overflow: hidden;
          perspective: 1400px;
        }

        .background-visual {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-size: 170%;
          background-position: 50% 48%;
          background-repeat: no-repeat;
          opacity: 0.14;
          filter: saturate(1.2) blur(12px) contrast(0.88);
          transform: translateZ(-1px) scale(1.02);
          animation: backgroundShift 28s ease-in-out infinite alternate;
          pointer-events: none;
        }

        .page-shell::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 25% 20%, rgba(201,169,110,0.12), transparent 30%),
            radial-gradient(circle at 80% 15%, rgba(232,201,138,0.1), transparent 22%),
            radial-gradient(circle at 60% 80%, rgba(201,169,110,0.08), transparent 26%);
          pointer-events: none;
        }

        .app-container {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 28px 80px;
        }

        .nav-bar {
          position: fixed;
          top: 16px;
          left: 24px;
          right: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 26px;
          z-index: 30;
          background: rgba(12, 12, 12, 0.88);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 24px;
          box-shadow: 0 25px 80px rgba(0,0,0,0.28);
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .brand-mark {
          width: 42px;
          height: 42px;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(201,169,110,0.2);
          display: grid;
          place-items: center;
          background: rgba(255,255,255,0.05);
        }

        .brand-mark img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .logo-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .logo-primary {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #f5f0e8;
          margin: 0;
        }

        .logo-secondary {
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #a89f8c;
          font-size: 10px;
        }

        .nav-items {
          display: flex;
          gap: 22px;
          align-items: center;
          flex-wrap: wrap;
        }

        .nav-link {
          color: #f5f0e8;
          text-decoration: none;
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid transparent;
          transition: all 0.25s ease;
          background: rgba(255,255,255,0.03);
        }

        .nav-link:hover {
          color: #fff;
          background: rgba(201,169,110,0.14);
          border-color: rgba(201,169,110,0.22);
          transform: translateY(-1px);
        }

        .nav-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 22px;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(201,169,110,0.95), rgba(232,201,138,0.92));
          color: #0a0a0a;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(201,169,110,0.2);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 40px rgba(201,169,110,0.24);
        }

        .nav-link:hover {
          color: #f5f0e8;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          height: 1px;
          background: #c9a96e;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
          opacity: 0.7;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .hamburger {
          display: none;
          width: 48px;
          height: 48px;
          border: 1px solid rgba(201,169,110,0.24);
          border-radius: 18px;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.03);
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .hamburger:hover {
          transform: translateY(-1px);
          background: rgba(255,255,255,0.05);
        }

        .hamburger div {
          width: 18px;
          height: 2px;
          background: #f5f0e8;
          position: relative;
        }

        .hamburger div::before,
        .hamburger div::after {
          content: '';
          position: absolute;
          width: 18px;
          height: 2px;
          background: #f5f0e8;
          left: 0;
        }

        .hamburger div::before {
          top: -6px;
        }

        .hamburger div::after {
          top: 6px;
        }

        .mobile-menu {
          position: fixed;
          top: 72px;
          right: 28px;
          background: rgba(10, 10, 10, 0.96);
          border: 1px solid rgba(201,169,110,0.18);
          border-radius: 20px;
          padding: 18px;
          display: none;
          flex-direction: column;
          gap: 16px;
          width: min(260px, calc(100% - 56px));
        }

        .mobile-menu.open {
          display: flex;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          gap: 40px;
          padding: 120px 0 80px;
          position: relative;
          z-index: 1;
          transform-style: preserve-3d;
        }

        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 30%, rgba(232,201,138,0.12), transparent 16%),
            radial-gradient(circle at 75% 15%, rgba(201,169,110,0.1), transparent 14%),
            linear-gradient(180deg, rgba(255,255,255,0.02), transparent 45%);
          pointer-events: none;
        }

        .hero-copy {
          flex: 1 1 60%;
          max-width: 620px;
          position: relative;
          z-index: 2;
        }

        .hero-headline {
          margin: 0;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(48px, 7vw, 96px);
          line-height: 0.95;
          letter-spacing: 0.1em;
          color: #e8c98a;
          text-transform: uppercase;
        }

        .hero-subline {
          margin: 24px 0 28px;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: #f5f0e8;
          opacity: 0.9;
        }

        .hero-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 36px;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(201,169,110,0.18);
          border-radius: 999px;
          color: #f5f0e8;
          font-size: 13px;
          line-height: 1.3;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 18px 34px;
          border: 1px solid rgba(201,169,110,0.9);
          border-radius: 999px;
          color: #f5f0e8;
          background: transparent;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          font-weight: 700;
          font-size: 13px;
          position: relative;
          overflow: hidden;
          transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(201,169,110,0.12);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 30px rgba(201,169,110,0.18);
        }

        .cta-button:hover::before {
          opacity: 1;
        }

        .hero-visual {
          flex: 1 1 40%;
          position: relative;
          min-height: 520px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
          align-items: center;
          justify-items: center;
          transform-style: preserve-3d;
        }

        .hero-visual::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 28px;
          background: linear-gradient(145deg, rgba(255,255,255,0.02), transparent 40%);
          pointer-events: none;
        }

        .hero-image-card {
          width: 100%;
          min-height: 220px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(201,169,110,0.15);
          border-radius: 24px;
          backdrop-filter: blur(10px);
          padding: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
          transform-style: preserve-3d;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .hero-image-card:hover {
          transform: translateY(-6px) rotateX(3deg) rotateY(-4deg);
          box-shadow: 0 32px 85px rgba(0,0,0,0.35);
        }

        .hero-image-card:nth-child(1) {
          transform: translateY(24px) rotate(-1.5deg);
        }

        .hero-image-card:nth-child(2) {
          transform: translateY(-16px) rotate(1deg);
        }

        .hero-image-card:nth-child(3) {
          grid-column: 1 / -1;
          transform: translateY(12px) rotate(-1deg);
        }

        .hero-product-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .image-fallback {
          width: 100%;
          height: 100%;
          border-radius: 18px;
          background: rgba(255,255,255,0.04);
          border: 1px dashed rgba(201,169,110,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f5f0e8;
          text-align: center;
          font-size: 14px;
          padding: 16px;
        }

        .section-title {
          text-align: center;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(38px, 5vw, 56px);
          letter-spacing: 0.08em;
          margin: 0 auto 20px;
          color: #f0ede6;
          max-width: 760px;
        }

        .divider-line {
          width: 96px;
          height: 1px;
          margin: 0 auto 56px;
          background: rgba(201,169,110,0.3);
          border: none;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .product-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(201,169,110,0.15);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.24);
        }

        .product-card img {
          width: 100%;
          height: 280px;
          object-fit: contain;
          background: #111111;
        }

        .product-card-content {
          padding: 28px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .product-badge {
          display: inline-flex;
          align-items: center;
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid rgba(201,169,110,0.4);
          color: #f5f0e8;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: rgba(255,255,255,0.02);
          width: fit-content;
        }

        .product-title {
          margin: 0;
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          letter-spacing: 0.06em;
          color: #f0ede6;
        }

        .product-tagline {
          margin: 0;
          font-style: italic;
          color: #a89f8c;
          font-size: 14px;
        }

        .rates-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 4px;
          background: rgba(255,255,255,0.02);
          border-radius: 16px;
          overflow: hidden;
        }

        .rates-table th,
        .rates-table td {
          padding: 14px 12px;
          text-align: left;
          font-size: 13px;
        }

        .rates-table thead {
          background: rgba(201,169,110,0.15);
        }

        .rates-table th {
          color: #f5f0e8;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .rates-table tbody tr:nth-child(odd) {
          background: rgba(255,255,255,0.02);
        }

        .details-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          color: #a89f8c;
          font-size: 13px;
        }

        .detail-chip {
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(201,169,110,0.12);
        }

        .accordion-toggle {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 18px;
          border-radius: 16px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(201,169,110,0.12);
          color: #f5f0e8;
          cursor: pointer;
          transition: background 0.2s ease;
          font-size: 14px;
        }

        .accordion-toggle:hover {
          background: rgba(255,255,255,0.05);
        }

        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease;
        }

        .accordion-content.open {
          max-height: 420px;
        }

        .accordion-list {
          margin: 0;
          padding: 14px 18px 18px 22px;
          list-style: disc;
          color: #d3cab7;
          font-size: 14px;
          line-height: 1.8;
        }

        .accordion-list li {
          margin-bottom: 8px;
        }

        .cta-small {
          align-self: flex-start;
          margin-top: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 22px;
          border-radius: 999px;
          border: 1px solid rgba(201,169,110,0.9);
          background: transparent;
          color: #f5f0e8;
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-size: 12px;
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .cta-small:hover {
          transform: translateY(-2px);
          background: rgba(201,169,110,0.14);
        }

        .how-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
          align-items: stretch;
        }

        .how-step {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(201,169,110,0.15);
          border-radius: 22px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-height: 280px;
          position: relative;
          overflow: hidden;
        }

        .step-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(52px, 7vw, 80px);
          margin: 0;
          color: #e8c98a;
          line-height: 0.85;
        }

        .step-icon {
          font-size: 32px;
        }

        .step-title {
          margin: 0;
          font-size: 18px;
          letter-spacing: 0.08em;
          color: #f0ede6;
        }

        .step-copy {
          color: #b9b1a4;
          line-height: 1.8;
          font-size: 14px;
        }

        .how-divider {
          display: none;
        }

        .rates-summary {
          overflow-x: auto;
          padding-bottom: 18px;
        }

        .summary-table {
          width: 100%;
          min-width: 720px;
          border-collapse: collapse;
          background: rgba(255,255,255,0.02);
          border-radius: 18px;
          overflow: hidden;
        }

        .summary-table th,
        .summary-table td {
          padding: 18px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          font-size: 14px;
        }

        .summary-table thead {
          background: rgba(201,169,110,0.18);
          color: #0a0a0a;
        }

        .summary-table tbody tr:nth-child(even) {
          background: rgba(255,255,255,0.03);
        }

        .summary-table th {
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 700;
          color: #111111;
        }

        .summary-table td:first-child {
          font-family: 'Cormorant Garamond', serif;
          color: #f0ede6;
        }

        .contact-section {
          display: grid;
          gap: 24px;
          margin-top: 24px;
        }

        .contact-hero {
          text-align: center;
          max-width: 860px;
          margin: 0 auto;
        }

        .contact-hero h2 {
          margin: 0 0 18px;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 5vw, 52px);
          color: #f0ede6;
        }

        .contact-hero p {
          margin: 0;
          color: #bcb3a8;
          font-size: 15px;
          line-height: 1.8;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 36px;
        }

        .contact-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(201,169,110,0.15);
          border-radius: 24px;
          padding: 26px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          min-height: 220px;
        }

        .contact-card .social-icon,
        .contact-card .social-image {
          width: 44px;
          height: 44px;
          color: #e8c98a;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .contact-card .social-image {
          width: 44px;
          height: 44px;
          border-radius: 16px;
          background: rgba(255,255,255,0.05);
          padding: 8px;
          object-fit: contain;
        }

        .contact-card h3 {
          margin: 0;
          font-size: 16px;
          color: #f0ede6;
          letter-spacing: 0.04em;
        }

        .contact-card p {
          margin: 0;
          color: #bcb3a8;
          font-size: 14px;
          line-height: 1.7;
        }

        .footer-bar {
          margin-top: 44px;
          padding-top: 22px;
          border-top: 1px solid rgba(201,169,110,0.2);
          text-align: center;
          color: #7d746a;
          font-size: 12px;
        }

        .fade-section {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-18px) translateX(10px); }
        }

        @keyframes backgroundShift {
          0% { background-position: 45% 48%; opacity: 0.14; }
          50% { background-position: 55% 38%; opacity: 0.12; }
          100% { background-position: 50% 58%; opacity: 0.16; }
        }

        .bubble {
          position: absolute;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(201,169,110,0.25);
          filter: blur(1.5px);
          animation: float 8s ease-in-out infinite;
          pointer-events: none;
        }

        .bubble:nth-child(1) { left: 12%; top: 18%; animation-duration: 7s; }
        .bubble:nth-child(2) { left: 68%; top: 12%; width: 12px; height: 12px; opacity: 0.16; animation-duration: 5.6s; }
        .bubble:nth-child(3) { left: 43%; top: 48%; width: 22px; height: 22px; opacity: 0.22; animation-duration: 9.2s; }
        .bubble:nth-child(4) { left: 82%; top: 40%; width: 14px; height: 14px; opacity: 0.18; animation-duration: 6.5s; }
        .bubble:nth-child(5) { left: 25%; top: 72%; width: 16px; height: 16px; opacity: 0.17; animation-duration: 8.8s; }
        .bubble:nth-child(6) { left: 57%; top: 82%; width: 20px; height: 20px; opacity: 0.28; animation-duration: 7.9s; }
        .bubble:nth-child(7) { left: 10%; top: 54%; width: 12px; height: 12px; opacity: 0.15; animation-duration: 9.5s; }
        .bubble:nth-child(8) { left: 88%; top: 76%; width: 18px; height: 18px; opacity: 0.13; animation-duration: 10s; }

        @media (max-width: 1024px) {
          .hero {
            flex-direction: column;
            padding-top: 110px;
          }

          .hero-visual {
            width: 100%;
            min-height: auto;
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .nav-items {
            display: none;
          }

          .hamburger {
            display: flex;
          }

          .hero {
            padding-top: 110px;
          }

          .hero-visual {
            grid-template-columns: 1fr;
          }

          .hero-image-card:nth-child(1),
          .hero-image-card:nth-child(2),
          .hero-image-card:nth-child(3) {
            transform: none;
          }

          .how-grid,
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .product-grid {
            grid-template-columns: 1fr;
          }

          .app-container {
            padding: 0 20px 64px;
          }
        }

        @media (max-width: 480px) {
          .nav-bar {
            padding: 16px 18px;
          }

          .hero-headline {
            font-size: clamp(36px, 10vw, 64px);
          }

          .hero-subline {
            font-size: 12px;
          }

          .cta-button {
            width: 100%;
          }

          .product-card img {
            height: 220px;
          }

          .hero-image-card {
            min-height: 200px;
          }

          .section-title {
            font-size: 36px;
          }

          .how-step {
            padding: 22px;
          }

          .contact-hero h2 {
            font-size: 30px;
          }
        }
      `}</style>

      <header className="nav-bar">
        <div className="nav-brand">
          <div className="brand-mark">
            <img src={logoImage} alt="JUNÉ Rentals logo" />
          </div>
          <div className="logo-group">
            <h1 className="logo-primary">JUNÉ</h1>
            <span className="logo-secondary">RENTALS</span>
          </div>
        </div>

        <nav className="nav-items">
          {navItems.map((item) => (
            <button key={item.target} className="nav-link" onClick={() => scrollTo(item.target)}>
              {item.label}
            </button>
          ))}
          <a
            className="nav-cta"
            href="https://web.facebook.com/junesnapandsoundrentals"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </nav>

        <button className="hamburger" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle navigation">
          <div />
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <button key={item.target} className="nav-link" onClick={() => scrollTo(item.target)}>
            {item.label}
          </button>
        ))}
        <a
          className="nav-cta"
          href="https://web.facebook.com/junesnapandsoundrentals"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: '100%', textAlign: 'center' }}
        >
          Book Now
        </a>
      </div>

      <main className="app-container">
        <section id="hero" className="hero fade-section">
          <div className="hero-copy">
            <p className="hero-headline">RENT. CREATE. REPEAT.</p>
            <p className="hero-subline">GEAR. TECH. MOMENTS. YOURS.</p>
            <div className="hero-pills">
              <span className="pill">📅 Flexible Rental</span>
              <span className="pill">✅ Quality Gear</span>
              <span className="pill">📷 Perfect for Any Occasion</span>
            </div>
            <a
              className="cta-button"
              href="https://web.facebook.com/junesnapandsoundrentals"
              target="_blank"
              rel="noopener noreferrer"
            >
              BOOK NOW
            </a>
          </div>

          <div className="hero-visual">
            <div className="bubble" />
            <div className="bubble" />
            <div className="bubble" />
            <div className="bubble" />
            <div className="bubble" />
            <div className="bubble" />
            <div className="bubble" />
            <div className="bubble" />
            <div className="hero-image-card">
              <HeroImage src={products[0].image} title={products[0].name} />
            </div>
            <div className="hero-image-card">
              <HeroImage src={products[1].image} title={products[1].name} />
            </div>
            <div className="hero-image-card">
              <HeroImage src={products[2].image} title={products[2].name} />
            </div>
          </div>
        </section>

        <section id="products" className="fade-section">
          <h2 className="section-title">OUR COLLECTION</h2>
          <hr className="divider-line" />
          <div className="product-grid">
            {products.map((product) => (
              <article key={product.id} className="product-card">
                <HeroImage src={product.image} title={product.name} />
                <div className="product-card-content">
                  <span className="product-badge">{product.badge}</span>
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-tagline">{product.tagline}</p>
                  <table className="rates-table">
                    <thead>
                      <tr>
                        <th>Duration</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.rates.map((rate) => (
                        <tr key={rate.label}>
                          <td>{rate.label}</td>
                          <td>{rate.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button className="accordion-toggle" onClick={() => toggleAccordion(product.id)}>
                    <span>What&apos;s included</span>
                    <span>{openAccordion[product.id] ? '−' : '+'}</span>
                  </button>
                  <div className={`accordion-content ${openAccordion[product.id] ? 'open' : ''}`}>
                    <ul className="accordion-list">
                      {product.inclusions.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {product.addons.length > 0 && (
                    <div className="details-row">
                      <span className="detail-chip">Add-Ons</span>
                      {product.addons.map((addon) => (
                        <span key={addon} className="detail-chip">{addon}</span>
                      ))}
                    </div>
                  )}
                  <div className="details-row">
                    <span className="detail-chip">Deposit {product.deposit}</span>
                    <span className="detail-chip">2 Valid IDs</span>
                    <span className="detail-chip">Proof of Billing</span>
                  </div>
                  <a
                    className="cta-small"
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Inquire Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="howItWorks" className="fade-section" style={{ marginTop: '80px' }}>
          <h2 className="section-title">HOW IT WORKS</h2>
          <hr className="divider-line" />
          <div className="how-grid">
            <div className="how-step">
              <p className="step-number">01</p>
              <span className="step-icon">🔍</span>
              <h3 className="step-title">Browse</h3>
              <p className="step-copy">Choose your gear from premium cameras, speakers, and instant film setups.</p>
            </div>
            <div className="how-step">
              <p className="step-number">02</p>
              <span className="step-icon">📩</span>
              <h3 className="step-title">Book</h3>
              <p className="step-copy">Message us on Facebook or TikTok to reserve your date and package.</p>
            </div>
            <div className="how-step">
              <p className="step-number">03</p>
              <span className="step-icon">📋</span>
              <h3 className="step-title">Submit Requirements</h3>
              <p className="step-copy">Send 2 valid IDs and proof of billing for a smooth pickup process.</p>
            </div>
            <div className="how-step">
              <p className="step-number">04</p>
              <span className="step-icon">🎉</span>
              <h3 className="step-title">Create</h3>
              <p className="step-copy">Pick up your gear and start creating unforgettable moments.</p>
            </div>
          </div>
        </section>

        <section id="rates" className="fade-section" style={{ marginTop: '80px' }}>
          <h2 className="section-title">RENTAL RATES SUMMARY</h2>
          <hr className="divider-line" />
          <div className="rates-summary">
            <table className="summary-table">
              <thead>
                <tr>
                  <th>Duration</th>
                  {products.map((product) => (
                    <th key={product.id}>{product.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {['1 Day', '2–4 Days', '5+ Days'].map((duration, index) => (
                  <tr key={duration}>
                    <td>{duration}</td>
                    {products.map((product) => (
                      <td key={`${product.id}-${duration}`}>{product.rates[index].price}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="contact" className="fade-section" style={{ marginTop: '80px' }}>
          <div className="contact-section">
            <div className="contact-hero">
              <h2>Ready to create something unforgettable?</h2>
              <p>Reach out to JUNÉ Rentals for premium gear and curated rental experiences.</p>
              <a
                className="cta-button"
                href="https://web.facebook.com/junesnapandsoundrentals"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: '28px' }}
              >
                BOOK NOW ON FACEBOOK
              </a>
            </div>

            <div className="contact-grid">
              <div className="contact-card">
                <span>📱</span>
                <h3>Call / Text</h3>
                <p>09668600047</p>
              </div>
              <a
                className="contact-card"
                href="https://web.facebook.com/junesnapandsoundrentals"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
                <h3>Facebook</h3>
                <p>JUNÉ Snap & Sound Rentals</p>
              </a>
              <a
                className="contact-card"
                href="https://www.tiktok.com/@junesnapandsoundrentals"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-image" src={tiktokLogo} alt="TikTok logo" />
                <h3>TikTok</h3>
                <p>@junesnapandsoundrentals</p>
              </a>
            </div>
          </div>
        </section>

        <div className="footer-bar">© 2025 JUNÉ Rentals · All rights reserved</div>
      </main>
    </div>
  );
}
