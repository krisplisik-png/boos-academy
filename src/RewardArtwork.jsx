import React from 'react';
import {Asset} from './art';

export function RewardArtwork({number}) {
  return <div className="illustrated-reward">
    <div className="reward-brand">PEAKWAY ENGLISH STUDIO <span>AUTUMN MAGIC FEST 2026</span></div>
    <div className="printed-card">
      <Asset name="escape-reward-card" className="printed-card-image"/>
      <span className="sr-only">Boo’s Escape Master. Mission completed! 3/3 magic keys.</span>
      <div className="card-number">REWARD CARD № {number}</div>
    </div>
  </div>;
}
