/* Little Mandarin: local SVG animation + bundled Mandarin audio. No dependencies. */
(() => {
  'use strict';
  const numbers = [
    { pinyin: 'yī', english: 'one', tone: 'First tone · high and level' },
    { pinyin: 'èr', english: 'two', tone: 'Fourth tone · falling' },
    { pinyin: 'sān', english: 'three', tone: 'First tone · high and level' },
    { pinyin: 'sì', english: 'four', tone: 'Fourth tone · falling' },
    { pinyin: 'wǔ', english: 'five', tone: 'Third tone · down, then up' },
    { pinyin: 'liù', english: 'six', tone: 'Fourth tone · falling' },
    { pinyin: 'qī', english: 'seven', tone: 'First tone · high and level' },
    { pinyin: 'bā', english: 'eight', tone: 'First tone · high and level' },
    { pinyin: 'jiǔ', english: 'nine', tone: 'Third tone · down, then up' },
    { pinyin: 'shí', english: 'ten', tone: 'Second tone · rising' },
  ];
  const $ = id => document.getElementById(id);
  const state = { number: 1, token: 0, active: false, running: false, muted: false,
    speed: 1, audio: null, motion: null, cancelAudio: null, finished: false };
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const palette = ['#39574b', '#7b5147', '#4e6b70', '#776344', '#59667e'];

  function wheels(x1, x2, y, size = 1) {
    return [x1, x2].map(x => `<g transform="translate(${x} ${y}) scale(${size})"><g class="wheel"><use href="#wheel"/></g></g>`).join('');
  }
  function engine(x, color) {
    return `<g transform="translate(${x} 0)">
      <g fill="#f8faf6"><circle class="smoke" cx="164" cy="279" r="14"/><circle class="smoke two" cx="164" cy="276" r="12"/><circle class="smoke three" cx="164" cy="274" r="14"/></g>
      <path d="M-11 418H201" stroke="#28322e" stroke-width="8"/>
      <rect class="train-body" x="4" y="313" width="64" height="102" rx="3" fill="${color}" stroke="#243b32" stroke-width="2"/>
      <path d="M0 316v-10q0-8 10-8h57q8 0 8 8v10Z" fill="#293630"/>
      <path d="M8 301h57" stroke="#64736a" stroke-width="3"/>
      <rect x="13" y="326" width="42" height="42" rx="3" fill="#9cbbbd" stroke="#202f2b" stroke-width="4"/>
      <path d="M16 329h33l-33 30Z" fill="#cee1db" opacity=".45"/>
      <path d="M34 328v39" stroke="#31483c" stroke-width="3"/>
      <rect x="15" y="379" width="37" height="9" rx="2" fill="#b29353"/>
      <path d="M11 400h45M11 407h45" stroke="#20382e" stroke-width="3"/>
      <rect class="train-body" x="59" y="344" width="130" height="72" rx="25" fill="${color}" stroke="#243a31" stroke-width="2"/>
      <rect x="60" y="345" width="125" height="70" rx="24" fill="url(#metal-shade)"/>
      <ellipse cx="185" cy="380" rx="13" ry="34" fill="#2c3530" stroke="#171f1c" stroke-width="3"/>
      <path d="M85 348v63M123 348v64M159 348v64" stroke="#9a9d81" stroke-width="3"/>
      <path d="M75 355h104" stroke="#bec8ae" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M83 345v-13q0-12 10-12t10 12v13" fill="#4e6d56" stroke="#2f4537" stroke-width="2"/>
      <path d="M153 345v-44h22v44" fill="#2b3530" stroke="#1e2823" stroke-width="2"/>
      <path d="M148 299h32v-9h-32Z" fill="#333f35" stroke="#202b24" stroke-width="2"/>
      <path d="M151 303h27" stroke="#808779" stroke-width="3"/>
      <rect x="195" y="350" width="13" height="20" rx="4" fill="#3c4639"/>
      <ellipse cx="207" cy="360" rx="4" ry="7" fill="#ead9a0"/>
      <path d="m197 414 23 22h-30Z" fill="#53564a" stroke="#282f29" stroke-width="2"/>
      <path d="m200 421 8 12m-4-12 8 12" stroke="#9e9c84" stroke-width="2"/>
      <rect x="60" y="414" width="128" height="8" fill="#b19a71"/>
      ${wheels(31, 82, 427, 1.48)}${wheels(130, 176, 427, 1.48)}
      <path d="M31 427H176" stroke="#a9b2a0" stroke-width="7" stroke-linecap="round"/>
      <path d="M31 425H176" stroke="#e0e1cb" stroke-width="2" stroke-linecap="round"/>
      <circle cx="31" cy="427" r="4" fill="#374038"/><circle cx="82" cy="427" r="4" fill="#374038"/><circle cx="130" cy="427" r="4" fill="#374038"/><circle cx="176" cy="427" r="4" fill="#374038"/>
    </g>`;
  }
  function render() {
    const item = numbers[state.number - 1];
    displayNumber(state.number);
    $('number-card').hidden = false;
    $('scene-title').textContent = `${state.number} separate ${state.number === 1 ? 'train' : 'trains'}. ${item.pinyin}, ${item.english}.`;
    // Use separate locomotives, counted left to right, then along the next track.
    // Two tracks keep larger sets from becoming a row of tiny connected cars.
    const rows = state.number <= 4 ? 1 : 2;
    const columns = Math.ceil(state.number / rows);
    const scale = Math.min(rows === 1 ? 1.65 : .85,
      1080 / (columns * 232 + (columns - 1) * 64));
    const baselines = rows === 1 ? [450] : [300, 485];
    $('tracks').innerHTML = `<rect x="0" y="${baselines[0] - 4}" width="1200" height="${514 - baselines[0]}" fill="#e5dbbf"/>` + baselines.map(y => `
      <rect y="${y + 1}" width="1200" height="26" fill="url(#sleepers)"/>
      <path d="M0 ${y + 3}H1200M0 ${y + 20}H1200" stroke="#68746a" stroke-width="5"/>
      <path d="M0 ${y - 1}H1200" stroke="#fcf5e3" stroke-width="3"/>`).join('');
    $('train').innerHTML = Array.from({ length: state.number }, (_, i) => {
      const row = Math.floor(i / columns);
      const column = i % columns;
      const inRow = Math.min(columns, state.number - row * columns);
      const rowWidth = (inRow * 232 + (inRow - 1) * 64) * scale;
      const x = (1200 - rowWidth) / 2 + column * 296 * scale;
      return `<g class="train-slot" transform="translate(${x} ${baselines[row]}) scale(${scale}) translate(0 -450)">
        <g class="counted-train" data-count="${i + 1}">${engine(11, palette[i % palette.length])}</g>
      </g>`;
    }).join('');
    $('number-select').value = String(state.number);
    $('previous').disabled = state.number === 1;
    $('next').disabled = state.number === 10;
  }
  function message(text) {
    $('instruction').textContent = text;
  }
  function displayNumber(number) {
    $('numeral').textContent = number;
    $('number-card').classList.toggle('two-digits', number === 10);
  }
  function updatePlay() {
    $('play-label').textContent = state.active ? (state.running ? 'Pause' : 'Resume') : state.finished ? 'Play again' : 'Play sequence';
    $('play-symbol').textContent = state.running ? 'Ⅱ' : '▶';
    document.body.classList.toggle('is-playing', state.running);
    $('scene').classList.toggle('paused', !state.running);
  }
  function stop() {
    state.token++;
    state.running = false;
    state.active = false;
    if (state.cancelAudio) state.cancelAudio();
    if (state.motion) { state.motion.cancel(); state.motion = null; }
    $('scene').classList.remove('rolling', 'counting');
    updatePlay();
  }
  function pause() {
    state.running = false;
    if (state.audio) state.audio.pause();
    if (state.motion) state.motion.pause();
    updatePlay();
  }
  function resume() {
    state.running = true;
    if (state.audio) state.audio.play().catch(() => { if (state.cancelAudio) state.cancelAudio(); });
    if (state.motion) state.motion.play();
    updatePlay();
  }
  // Waiting advances only during playback, so pauses preserve the current lesson.
  function wait(milliseconds, token) {
    return new Promise(resolve => {
      let elapsed = 0;
      let previous = performance.now();
      function tick(now) {
        if (token !== state.token) return resolve(false);
        if (state.running) elapsed += Math.min(now - previous, 100) * state.speed;
        previous = now;
        if (elapsed >= milliseconds) resolve(true);
        else requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }
  async function playClip(name, token, onStart = null) {
    if (token !== state.token) return;
    // Wait for resume before starting another clip.
    if (!await wait(1, token)) return;
    const audio = new Audio(`audio/${name}.wav?v=san-6`);
    audio.muted = state.muted;
    let failed = false;
    await new Promise(resolve => {
      let settled = false;
      let started = false;
      function startVisual() {
        if (started || token !== state.token) return;
        started = true;
        if (onStart) onStart();
      }
      state.audio = audio;
      function done() {
        if (settled) return;
        settled = true;
        audio.pause();
        audio.onended = null;
        audio.onerror = null;
        audio.onplaying = null;
        if (state.audio === audio) { state.audio = null; state.cancelAudio = null; }
        resolve();
      }
      function error(event) {
        if (settled || token !== state.token) return done();
        failed = true;
        console.warn('Mandarin audio playback:', event?.name || audio.error?.message || 'media error');
        $('audio-notice').hidden = false;
        startVisual();
        done();
      }
      state.cancelAudio = done;
      audio.onended = done;
      audio.onerror = error;
      audio.onplaying = startVisual;
      audio.play().catch(error);
    });
    if (failed) await wait(900, token);
  }
  async function moveTrain(entering, token) {
    if (token !== state.token) return;
    const duration = reducedMotion.matches ? 250 : 1900;
    $('scene').classList.add('rolling');
    if (!reducedMotion.matches) {
      state.motion = $('train').animate(
        [{ transform: entering ? 'translateX(-1250px)' : 'translateX(0)' },
         { transform: entering ? 'translateX(0)' : 'translateX(1250px)' }],
        { duration, easing: entering ? 'cubic-bezier(.15,.7,.35,1)' : 'cubic-bezier(.5,0,.85,.3)', fill: 'forwards' }
      );
      state.motion.playbackRate = state.speed;
      if (!state.running) state.motion.pause();
    }
    const valid = await wait(duration, token);
    if (!valid) return;
    if (entering && state.motion) { state.motion.cancel(); state.motion = null; }
    $('scene').classList.remove('rolling');
  }
  async function lesson(token) {
    const n = state.number;
    message('Arriving');
    $('number-card').hidden = true;
    await moveTrain(true, token);
    if (token !== state.token) return;
    if (!await wait(450, token)) return;
    const trains = [...$('train').querySelectorAll('.counted-train')];
    trains.forEach(train => train.classList.add('pending'));
    $('scene').classList.add('counting');
    for (let i = 0; i < n; i++) {
      if (token !== state.token) return;
      await playClip(i + 1, token, () => {
        trains.forEach(train => train.classList.remove('highlight'));
        trains[i].classList.remove('pending');
        trains[i].classList.add('counted', 'highlight');
        $('number-card').hidden = false;
        displayNumber(i + 1);
        message('Counting');
      });
      if (!await wait(650, token)) return;
    }
    trains.forEach(train => train.classList.remove('highlight', 'counted'));
    $('scene').classList.remove('counting');
    message('Total trains');
    await playClip(`totals/${n}`, token);
    if (!await wait(2700, token)) return;
  }
  async function start(scope = 'tour') {
    stop();
    $('audio-notice').hidden = true;
    if (state.finished && scope === 'tour') { state.number = 1; }
    state.finished = false;
    state.active = true;
    state.running = true;
    const token = state.token;
    render();
    updatePlay();
    try {
      while (token === state.token) {
        await lesson(token);
        if (token !== state.token || scope === 'single' || state.number === 10) break;
        message('Next number');
        await moveTrain(false, token);
        if (token !== state.token) return;
        if (state.motion) { state.motion.cancel(); state.motion = null; }
        state.number++;
        render();
      }
      if (token === state.token && state.number === 10) {
        state.finished = true;
        message('Finished');
        await wait(1000, token);
      } else if (token === state.token) {
        message('Finished');
      }
    } catch (error) {
      if (token === state.token) {
        message('Playback stopped · press Play to restart');
        console.error('Number train:', error);
      }
    } finally {
      if (token === state.token) {
        state.active = false;
        state.running = false;
        $('scene').classList.remove('rolling');
        updatePlay();
      }
    }
  }
  function choose(number) {
    state.number = Math.max(1, Math.min(10, number));
    state.finished = false;
    start('single');
  }
  $('number-select').innerHTML = numbers.map((item, i) => `<option value="${i + 1}">${item.english[0].toUpperCase() + item.english.slice(1)}</option>`).join('');
  $('number-select').addEventListener('change', event => choose(Number(event.target.value)));
  $('play').addEventListener('click', () => {
    if (!state.active) start();
    else if (state.running) pause();
    else resume();
  });
  $('listen').addEventListener('click', () => start('single'));
  $('fullscreen').hidden = !document.fullscreenEnabled;
  $('fullscreen').addEventListener('click', async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.querySelector('.journey').requestFullscreen();
    } catch { message('Full screen is unavailable in this browser'); }
  });
  document.addEventListener('fullscreenchange', () => {
    $('fullscreen').textContent = document.fullscreenElement ? 'Exit full screen' : 'Full screen';
  });
  $('previous').addEventListener('click', () => choose(state.number - 1));
  $('next').addEventListener('click', () => choose(state.number + 1));
  $('sound').addEventListener('click', () => {
    state.muted = !state.muted;
    if (state.audio) state.audio.muted = state.muted;
    $('sound').textContent = state.muted ? 'Sound off' : 'Sound on';
    $('sound').setAttribute('aria-pressed', String(!state.muted));
  });
  $('speed').addEventListener('change', event => {
    state.speed = Number(event.target.value);
    if (state.motion) state.motion.playbackRate = state.speed;
    // Keep audio at its original speed so the Mandarin tones stay natural.
  });
  document.addEventListener('keydown', event => {
    if (event.target.closest('button, select, input, textarea')) return;
    if (event.code === 'Space') { event.preventDefault(); $('play').click(); }
    if (event.code === 'ArrowRight' && state.number < 10) choose(state.number + 1);
    if (event.code === 'ArrowLeft' && state.number > 1) choose(state.number - 1);
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden && state.running) pause(); });
  window.addEventListener('pagehide', stop);
  render();
  updatePlay();
})();
