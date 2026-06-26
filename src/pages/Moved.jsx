import { useEffect, useState } from 'react';
import assetUrl from '../utils/assetUrl';

const NEW_URL = 'https://www.core-network.ai/#/tuc';
const DELAY_SECONDS = 5;

const Moved = () => {
    const [secondsLeft, setSecondsLeft] = useState(DELAY_SECONDS);

    useEffect(() => {
        const tick = setInterval(() => {
            setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
        }, 1000);
        const redirect = setTimeout(() => {
            window.location.replace(NEW_URL);
        }, DELAY_SECONDS * 1000);
        return () => {
            clearInterval(tick);
            clearTimeout(redirect);
        };
    }, []);

    return (
        <main
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.5rem',
                padding: '2rem',
                textAlign: 'center',
                fontFamily: "'Lato', system-ui, sans-serif",
                color: '#1a1a1a',
                background: '#ffffff',
            }}
        >
            <img
                src={assetUrl('/assets/logos/core_logo_no_text.png')}
                alt="CORE"
                style={{ height: '96px', width: 'auto' }}
            />
            <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>We&rsquo;ve moved</h1>
            <p style={{ fontSize: '1.125rem', maxWidth: '34rem', lineHeight: 1.6, margin: 0, color: '#444' }}>
                The CORE research group website of TU Clausthal now lives at{' '}
                <strong>core-network.ai</strong>.
            </p>
            <a
                href={NEW_URL}
                style={{
                    display: 'inline-block',
                    padding: '0.85rem 1.75rem',
                    borderRadius: '9999px',
                    background: '#009020',
                    color: '#ffffff',
                    fontWeight: 700,
                    textDecoration: 'none',
                    fontSize: '1rem',
                }}
            >
                Go to the new site &rarr;
            </a>
            <p style={{ fontSize: '0.875rem', color: '#888', margin: 0 }} aria-live="polite">
                Redirecting in {secondsLeft}s&hellip;
            </p>
        </main>
    );
};

export default Moved;
