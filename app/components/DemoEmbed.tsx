// components/DemoEmbed.tsx
export default function DemoEmbed() {
  return (
    <div style={{ position: 'relative' /* 16:9 */ }}>
      <iframe
        src="https://lucerna-bible-app.vercel.app"
        title="Lucerna Bible App Demo"
        style={{
          width: '100%',
          height: '80vh',
          border: 'none',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        }}
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}