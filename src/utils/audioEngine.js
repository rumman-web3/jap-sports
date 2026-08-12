/**
 * Web Audio API Sound Synthesizer for 日本スポーツ図鑑.
 * Zero external audio assets (0KB payload overhead for Lighthouse 100).
 * Generates organic Japanese-inspired sound effects (Taiko drum tap, woodblock click, ambient zen drone).
 */

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = false;
    this.ambientGain = null;
    this.ambientOsc = null;
    this.isAmbientPlaying = false;
  }

  init() {
    if (this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    } catch (e) {
      console.warn("Web Audio API not supported", e);
    }
  }

  toggleSound(forceState) {
    this.init();
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    this.enabled = forceState !== undefined ? forceState : !this.enabled;
    if (this.enabled) {
      this.playTaiko(0.2);
    } else {
      this.stopAmbient();
    }
    return this.enabled;
  }

  // Synthesize a soft Japanese Taiko drum strike
  playTaiko(vol = 0.3) {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Pitch sweep down for body of drum
      osc.type = "sine";
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(38, now + 0.18);

      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.36);
    } catch (_) {}
  }

  // Synthesize a wooden Hyoshigi (clapper) click
  playWoodClick(vol = 0.15) {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);

      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.06);
    } catch (_) {}
  }

  // Synthesize soft chime resonance
  playChime(vol = 0.2) {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + i * 0.04);

        gain.gain.setValueAtTime(0, now);
        gain.gain.setValueAtTime(vol * 0.4, now + i * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2 + i * 0.1);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + i * 0.04);
        osc.stop(now + 1.3 + i * 0.1);
      });
    } catch (_) {}
  }

  toggleAmbient() {
    this.init();
    if (!this.enabled) this.enabled = true;
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    if (this.isAmbientPlaying) {
      this.stopAmbient();
    } else {
      this.startAmbient();
    }
    return this.isAmbientPlaying;
  }

  startAmbient() {
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      this.ambientOsc = this.ctx.createOscillator();
      this.ambientGain = this.ctx.createGain();

      this.ambientOsc.type = "sine";
      this.ambientOsc.frequency.setValueAtTime(110, now); // A2 fundamental tone

      this.ambientGain.gain.setValueAtTime(0.001, now);
      this.ambientGain.gain.linearRampToValueAtTime(0.04, now + 2); // Soft swell

      this.ambientOsc.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);

      this.ambientOsc.start(now);
      this.isAmbientPlaying = true;
    } catch (_) {}
  }

  stopAmbient() {
    if (this.ambientGain && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.ambientGain.gain.linearRampToValueAtTime(0.0001, now + 0.8);
        setTimeout(() => {
          if (this.ambientOsc) {
            this.ambientOsc.stop();
            this.ambientOsc.disconnect();
          }
          this.isAmbientPlaying = false;
        }, 850);
      } catch (_) {
        this.isAmbientPlaying = false;
      }
    }
  }
}

export const audioEngine = new AudioEngine();
