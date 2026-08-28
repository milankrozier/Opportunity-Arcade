import useClawMachine from '../hooks/useClawMachine';

const starPolygon = 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)';

export default function ClawMachine() {
  const {
    playClaw, toggleSound, soundOn, soundLabel, soundButtonStyle,
    coinLabel, coinButtonStyle, clawStatus,
    clawStyle, cableStyle, armLeftStyle, armRightStyle, heldBallStyle, heldGlossStyle,
    prizeDotStyle, prizeGlossStyle, pile, backRow,
    prize, hasPrize, noPrize,
  } = useClawMachine();

  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px var(--container-pad) 96px' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          You Found A Secret Level
        </div>
        <h1 style={{ margin: '12px 0 0', fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-5xl)', color: 'var(--text-heading)', lineHeight: 'var(--leading-tight)' }}>
          The Kind Words <span style={{ backgroundImage: 'var(--brand-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Claw Machine.</span>
        </h1>
        <p style={{ margin: '16px auto 0', maxWidth: 480, color: 'var(--text-body)', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-normal)' }}>
          Insert a coin and the claw takes it from there. Every capsule has something in it worth hearing.
        </p>
      </div>

      <div style={{ marginTop: 48, background: 'var(--surface-dark-gradient)', borderRadius: 'var(--radius-2xl)', padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 26 }}>

        <div style={{ width: '100%', maxWidth: 420, borderRadius: 28, background: 'linear-gradient(180deg,#c4b5fd 0%,#a78bfa 45%,#8b5cf6 100%)', border: '4px solid #3b1478', boxShadow: '0 16px 0 rgba(59,20,120,.55), 0 26px 50px rgba(12,6,35,.45)', padding: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>

          <div style={{ borderRadius: 16, background: '#fdf4ff', border: '3px solid #3b1478', padding: '13px 14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <div style={{ width: 17, height: 17, background: '#ec4bab', clipPath: starPolygon }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 20, fontWeight: 'var(--weight-bold)', letterSpacing: '.34em', textTransform: 'uppercase', backgroundImage: 'var(--brand-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              Kind Words
            </span>
            <div style={{ width: 17, height: 17, background: '#ec4bab', clipPath: starPolygon }} />
          </div>

          <div style={{ position: 'relative', height: 360, borderRadius: 14, background: 'linear-gradient(180deg,#f9fbff 0%,#eaf0ff 100%)', border: '3px solid #3b1478', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 20, left: 0, right: 0, height: 4, background: 'repeating-linear-gradient(90deg,#c4b5fd 0 6px,transparent 6px 12px)' }} />
            <div style={clawStyle}>
              <div style={cableStyle} />
              <div style={{ width: 54, height: 15, borderRadius: 6, background: 'linear-gradient(180deg,#f9a8d4,#ec4bab)', border: '3px solid #3b1478', boxSizing: 'border-box' }} />
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', gap: 20 }}>
                <div style={armLeftStyle} />
                <div style={armRightStyle} />
                <div style={heldBallStyle}><div style={heldGlossStyle} /></div>
              </div>
            </div>
            {backRow.map((ball, i) => (
              <div key={`back-${i}`} style={ball.style}><div style={ball.gloss} /></div>
            ))}
            {pile.map((ball, i) => (
              <div key={`pile-${i}`} style={ball.style}><div style={ball.gloss} /></div>
            ))}
            <div style={{ position: 'absolute', left: 0, bottom: 0, width: 88, height: 104, borderRadius: '0 16px 0 0', background: 'linear-gradient(180deg,rgba(167,139,250,.35),rgba(139,92,246,.55))', borderRight: '3px solid #3b1478', borderTop: '3px solid #3b1478', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: 10 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 'var(--weight-bold)', letterSpacing: '.2em', textTransform: 'uppercase', color: '#3b1478' }}>Prize</span>
            </div>
          </div>

          <div style={{ borderRadius: 16, background: '#ddd6fe', border: '3px solid #3b1478', padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'linear-gradient(180deg,#f9a8d4,#ec4bab)', border: '3px solid #3b1478', boxSizing: 'border-box' }} />
                <div style={{ width: 6, height: 14, background: '#3b1478' }} />
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#4f7df3', border: '3px solid #3b1478', boxSizing: 'border-box' }} />
                <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#2dd4bf', border: '3px solid #3b1478', boxSizing: 'border-box' }} />
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 'var(--weight-bold)', letterSpacing: '.18em', textTransform: 'uppercase', color: '#3b1478' }}>Coin</span>
              <div style={{ width: 12, height: 30, borderRadius: 3, background: '#3b1478' }} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <button onClick={playClaw} style={coinButtonStyle}>{coinLabel}</button>
          <button onClick={toggleSound} aria-pressed={soundOn} style={soundButtonStyle}>{soundLabel}</button>
        </div>

        <div style={{ width: '100%', maxWidth: 420, minHeight: 132, borderRadius: 22, background: '#ffffff', border: '3px solid #3b1478', boxShadow: '0 8px 0 rgba(59,20,120,.45)', padding: '26px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          {hasPrize && (
            <div style={{ animation: 'prizePop .45s ease-out both', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 14, height: 14, background: '#9061f9', clipPath: starPolygon }} />
                <div style={prizeDotStyle}><div style={prizeGlossStyle} /></div>
                <div style={{ width: 14, height: 14, background: '#9061f9', clipPath: starPolygon }} />
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-2xl)', color: '#3b1478', lineHeight: 'var(--leading-tight)', textWrap: 'pretty' }}>
                {prize}
              </div>
            </div>
          )}
          {noPrize && (
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 'var(--weight-bold)', letterSpacing: '.18em', textTransform: 'uppercase', color: '#8b5cf6' }}>
              {clawStatus}
            </div>
          )}
        </div>
      </div>

      <p style={{ margin: '28px 0 0', textAlign: 'center', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)' }}>
        You found the secret level, so play as many rounds as you want. Then go get the thing you were looking for.
      </p>
    </div>
  );
}
