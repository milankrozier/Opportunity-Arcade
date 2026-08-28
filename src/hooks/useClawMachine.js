import { useState, useRef, useEffect, useCallback } from 'react';
import { BALL_COLORS, CABINET_INK, KIND_WORDS } from '../data/kindWords';

export default function useClawMachine() {
  const [clawPhase, setClawPhase] = useState('idle');
  const [clawTarget, setClawTarget] = useState(3);
  const [prize, setPrize] = useState(null);
  const [prizeColor, setPrizeColor] = useState(BALL_COLORS[3]);
  const [soundOn, setSoundOn] = useState(false);

  const timersRef = useRef([]);
  const wordBagRef = useRef([]);
  const lastWordRef = useRef(null);
  const audioRef = useRef(null);
  const soundOnRef = useRef(soundOn);

  useEffect(() => {
    soundOnRef.current = soundOn;
  }, [soundOn]);

  useEffect(() => () => {
    timersRef.current.forEach(clearTimeout);
    if (audioRef.current) audioRef.current.close();
  }, []);

  const nextWord = useCallback(() => {
    if (wordBagRef.current.length === 0) {
      const bag = KIND_WORDS.slice();
      for (let i = bag.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [bag[i], bag[j]] = [bag[j], bag[i]];
      }
      if (bag[0] === lastWordRef.current && bag.length > 1) {
        [bag[0], bag[1]] = [bag[1], bag[0]];
      }
      wordBagRef.current = bag;
    }
    const word = wordBagRef.current.pop();
    lastWordRef.current = word;
    return word;
  }, []);

  const ensureAudio = useCallback(() => {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    if (!audioRef.current) audioRef.current = new Ctx();
    if (audioRef.current.state === 'suspended') audioRef.current.resume();
    return audioRef.current;
  }, []);

  const blip = useCallback((freq, start, dur, gain, type) => {
    const ctx = audioRef.current;
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const amp = ctx.createGain();
    osc.type = type || 'square';
    osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
    amp.gain.setValueAtTime(0.0001, ctx.currentTime + start);
    amp.gain.linearRampToValueAtTime(gain, ctx.currentTime + start + 0.012);
    amp.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + dur);
    osc.connect(amp).connect(ctx.destination);
    osc.start(ctx.currentTime + start);
    osc.stop(ctx.currentTime + start + dur + 0.02);
  }, []);

  const sfx = useCallback((name) => {
    if (!soundOnRef.current || !ensureAudio()) return;
    if (name === 'coin') { blip(880, 0, 0.09, 0.05); blip(1320, 0.09, 0.12, 0.045); }
    else if (name === 'move') { blip(220, 0, 0.05, 0.022, 'triangle'); blip(220, 0.34, 0.05, 0.022, 'triangle'); blip(220, 0.68, 0.05, 0.022, 'triangle'); }
    else if (name === 'grab') { blip(150, 0, 0.11, 0.05, 'sawtooth'); }
    else if (name === 'open') { blip(660, 0, 0.07, 0.04); blip(990, 0.07, 0.09, 0.038); }
    else if (name === 'win') { [523, 659, 784, 1047].forEach((hz, i) => blip(hz, i * 0.085, 0.16, 0.042, 'triangle')); }
  }, [blip, ensureAudio]);

  const toggleSound = useCallback(() => {
    setSoundOn((v) => {
      const next = !v;
      soundOnRef.current = next;
      if (next) { ensureAudio(); sfx('coin'); }
      return next;
    });
  }, [ensureAudio, sfx]);

  const playClaw = useCallback(() => {
    if (clawPhase !== 'idle') return;
    const target = Math.floor(Math.random() * BALL_COLORS.length);
    const msg = nextWord();
    sfx('coin');
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    setClawPhase('moving');
    setClawTarget(target);
    setPrize(null);
    setPrizeColor(BALL_COLORS[target]);

    const step = (ms, phase, extra, cue) => timersRef.current.push(setTimeout(() => {
      setClawPhase(phase);
      if (extra?.prize !== undefined) setPrize(extra.prize);
      if (cue) sfx(cue);
    }, ms));

    timersRef.current.push(setTimeout(() => sfx('move'), 180));
    step(1100, 'dropping');
    step(2200, 'grabbing', null, 'grab');
    step(2800, 'lifting');
    step(3800, 'returning', null, 'move');
    step(4900, 'dropped', null, 'open');
    step(5700, 'idle', { prize: msg }, 'win');
  }, [clawPhase, nextWord, sfx]);

  const playing = clawPhase !== 'idle';
  const atBall = ['moving', 'dropping', 'grabbing', 'lifting'].includes(clawPhase);
  const holding = ['grabbing', 'lifting', 'returning', 'dropped'].includes(clawPhase);
  const dropped = clawPhase === 'dropped';
  const ballLeft = (i) => 31 + i * 7.9;
  const clawLeft = atBall ? ballLeft(clawTarget) : (playing ? 11 : 56);

  const gloss = (size) => ({
    position: 'absolute', top: size * 0.2, left: size * 0.24, width: size * 0.3, height: size * 0.2,
    borderRadius: '50%', background: 'rgba(255,255,255,.8)', transform: 'rotate(-24deg)',
  });
  const ballFace = (size, color) => ({
    width: size, height: size, borderRadius: '50%', background: color,
    border: `3px solid ${CABINET_INK}`, boxSizing: 'border-box',
    boxShadow: 'inset -5px -7px 12px rgba(59,20,120,.28)',
  });

  const clawStyle = {
    position: 'absolute', top: 18, left: `${clawLeft}%`, transform: 'translateX(-50%)',
    transition: 'left 1s cubic-bezier(.4,0,.2,1)', display: 'flex', flexDirection: 'column',
    alignItems: 'center', zIndex: 3,
  };
  const cableStyle = {
    width: 5, borderRadius: 3, height: ['dropping', 'grabbing'].includes(clawPhase) ? 232 : 10,
    background: CABINET_INK, transition: 'height .9s ease',
  };
  const armAngle = holding ? 10 : 32;
  const armBase = {
    width: 9, height: 34, borderRadius: 5, background: 'linear-gradient(180deg,#e9d5ff,#a78bfa)',
    border: `3px solid ${CABINET_INK}`, boxSizing: 'border-box', transformOrigin: 'top center',
    transition: 'transform .5s ease',
  };
  const armLeftStyle = { ...armBase, transform: `rotate(-${armAngle}deg)` };
  const armRightStyle = { ...armBase, transform: `rotate(${armAngle}deg)` };
  const heldBallStyle = {
    ...ballFace(34, prizeColor), position: 'absolute', top: 12, left: '50%',
    opacity: holding ? (dropped ? 0.12 : 1) : 0,
    transform: `translateX(-50%) translateY(${dropped ? 250 : 0}px)`,
    transition: 'transform .7s ease-in, opacity .4s ease',
  };
  const heldGlossStyle = gloss(34);
  const pile = BALL_COLORS.map((c, i) => ({
    style: {
      ...ballFace(40, c), position: 'absolute', bottom: 16, left: `${ballLeft(i)}%`,
      transform: 'translateX(-50%)', opacity: holding && i === clawTarget ? 0 : 1,
      transition: 'opacity .25s ease', zIndex: 2,
    },
    gloss: gloss(40),
  }));
  const backRow = ['#a78bfa', '#60a5fa', '#f472b6', '#2dd4bf'].map((c, i) => ({
    style: {
      ...ballFace(32, c), position: 'absolute', bottom: 50, left: `${36 + i * 14}%`,
      transform: 'translateX(-50%)', opacity: 0.75, zIndex: 1,
    },
    gloss: gloss(32),
  }));
  const prizeDotStyle = { ...ballFace(30, prizeColor), position: 'relative' };
  const prizeGlossStyle = gloss(30);
  const coinButtonStyle = {
    fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 'var(--weight-bold)', letterSpacing: '.18em',
    textTransform: 'uppercase', color: '#ffffff', border: `3px solid ${CABINET_INK}`, borderRadius: 14,
    padding: '15px 30px', backgroundImage: 'var(--brand-gradient)', cursor: playing ? 'default' : 'pointer',
    transform: playing ? 'translateY(4px)' : 'none',
    boxShadow: playing ? `0 1px 0 ${CABINET_INK}` : `0 5px 0 ${CABINET_INK}`,
    animation: playing ? 'none' : 'coinGlow 2.2s ease-in-out infinite', transition: 'transform .15s ease',
  };
  const coinLabel = playing ? 'Claw In Motion' : (prize ? 'Insert Another Coin' : 'Insert Coin');
  const soundButtonStyle = {
    fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 'var(--weight-bold)', letterSpacing: '.18em',
    textTransform: 'uppercase', color: CABINET_INK, border: `3px solid ${CABINET_INK}`, borderRadius: 12,
    padding: '11px 16px', background: soundOn ? '#ddd6fe' : '#fdf4ff', boxShadow: `0 4px 0 ${CABINET_INK}`,
    cursor: 'pointer',
  };
  const soundLabel = soundOn ? 'Sound On' : 'Sound Off';
  const clawStatus = playing ? 'The Claw Is Working On It' : 'Insert A Coin To Play';

  return {
    playClaw, toggleSound, soundOn, soundLabel, soundButtonStyle,
    coinLabel, coinButtonStyle, clawStatus,
    clawStyle, cableStyle, armLeftStyle, armRightStyle, heldBallStyle, heldGlossStyle,
    prizeDotStyle, prizeGlossStyle, pile, backRow,
    prize: prize || '', hasPrize: !!prize && !playing, noPrize: !prize || playing,
  };
}
