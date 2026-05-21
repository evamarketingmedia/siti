/* global React, window */
const { useState, useEffect } = React;
const { Icon, Reveal, Brand, SectionKicker } = window;

/* =========================================================
   HEADER
   ========================================================= */
const Header = ({ onContact }) => (
  <header className="site-header">
    <div className="container nav">
      <Brand />
      <nav className="nav-links" aria-label="primary">
        <a href="#problemi">Problemi</a>
        <a href="#come-funziona">Come funziona</a>
        <a href="#cosa-offro">Cosa offro</a>
        <a href="#casi">Casi reali</a>
        <a href="#manifesto">Manifesto</a>
      </nav>
      <div className="nav-cta">
        <button className="btn btn--primary" onClick={onContact}>
          Prenota una call <Icon name="arrow" size={14} className="arrow" />
        </button>
      </div>
    </div>
  </header>
);

/* =========================================================
   1. HERO — masthead + headline + diary
   ========================================================= */
const Hero = ({ onContact }) => {
  const today = new Date().toLocaleDateString("it-IT", { day: "2-digit", month: "long", year: "numeric" });
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-masthead">
          <div className="left">
            <span>Numero 04</span>
            <span className="stamp">Edizione di maggio</span>
          </div>
          <div className="right">
            <span>{today}</span>
            <span>Verona · Italia</span>
          </div>
        </div>

        <div className="hero-grid">
          <Reveal>
            <h1 className="h-display">
              Il tuo sito dovrebbe<br />
              <em>lavorare</em>.<br />
              <span className="neg">Non solo esistere.</span>
            </h1>
            <p className="lead">
              Trasformo siti in <em>sistemi</em> che ricevono richieste, le smistano e
              rispondono al posto tuo — anche di domenica sera. Niente «AI rivoluzionaria»,
              niente dashboard finte. Solo strumenti che già usi, collegati come si deve.
            </p>
            <div className="hero-ctas">
              <button className="btn btn--primary btn--lg" onClick={onContact}>
                Prenota una call gratuita <Icon name="arrow" size={14} className="arrow" />
              </button>
              <a className="btn btn--lg" href="#come-funziona">Vedi come funziona</a>
              <span className="note">↖ 30 min, zero slide</span>
            </div>

            <div className="hero-bottom">
              <div className="hero-fact">
                <strong>2–3 sett.</strong>
                <span>dal sì al sito online</span>
              </div>
              <div className="hero-fact">
                <strong>≈ 5 min</strong>
                <span>tempo medio di risposta al cliente</span>
              </div>
              <div className="hero-fact">
                <strong>1 referente</strong>
                <span>sempre la stessa persona, dall'inizio alla fine</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="diary-wrap">
            <DiaryLog />
            <div className="diary-annot">
              questo è successo ieri,<br />senza che toccassi nulla
              <svg viewBox="0 0 70 36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M2 8 C 22 4, 44 14, 64 26" />
                <path d="M58 18 L 65 27 L 54 28" />
              </svg>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const DiaryLog = () => (
  <div className="diary">
    <div className="diary-head">
      <span className="ttl">Diario di ieri</span>
      <span className="when">Mer · 21 mag · 14:02 → 23:47</span>
    </div>

    <div className="diary-entry">
      <span className="time">14:02</span>
      <div>
        <span className="what">Anna ha lasciato i contatti dalla pagina <em>«Cucina su misura»</em>.</span>
        <span className="meta">arrivata da Google · budget stimato medio</span>
      </div>
      <span className="tool">/lead</span>
    </div>

    <div className="diary-entry">
      <span className="time">14:02</span>
      <div>
        <span className="what">Registrata nel foglio «Lead 2026», riga 184.</span>
        <span className="meta">stato: nuovo · priorità: alta</span>
      </div>
      <span className="tool">Sheets</span>
    </div>

    <div className="diary-entry">
      <span className="time">14:03</span>
      <div>
        <span className="what">Risposta inviata ad Anna: conferma + 3 disponibilità per la call.</span>
        <span className="meta">testo personalizzato sul tipo di richiesta</span>
      </div>
      <span className="tool">Gmail</span>
    </div>

    <div className="diary-entry">
      <span className="time">19:34</span>
      <div>
        <span className="what">Anna ha scelto martedì alle 10:30. Evento creato in calendario.</span>
        <span className="meta">reminder 24h prima · link videocall incluso</span>
      </div>
      <span className="tool">Calendar</span>
    </div>

    <div className="diary-entry">
      <span className="time">23:47</span>
      <div>
        <span className="what">Notifica WhatsApp: <em>«Domani hai una call alle 10:30 con Anna»</em>.</span>
        <span className="meta">solo se richiesta calda · oggi sì</span>
      </div>
      <span className="tool">WhatsApp</span>
    </div>

    <div className="diary-foot">
      <span>Tocchi richiesti</span>
      <strong>zero</strong>
    </div>
  </div>
);

/* =========================================================
   2. CHI SONO — short personal letter (sits inside Hero section visually)
   ========================================================= */
const ChiSono = () => (
  <section className="section section--alt" id="chi-sono" style={{ paddingBlock: "clamp(64px, 7vw, 104px)" }}>
    <div className="container">
      <Reveal>
        <span className="kicker"><span className="n">¶</span> Chi c'è dietro</span>
      </Reveal>
      <Reveal>
        <div className="about">
          <div className="about-portrait" aria-label="Ritratto" />
          <div className="about-text">
            <p className="dropcap">
              Mi chiamo Marco. Faccio siti dal 2017, ma il lavoro vero è un altro:
              capire <em>dove perdi tempo</em> e dove si infilano i clienti che non
              arrivano mai. Lavoro con chi ha un'attività piccola e vera — una
              trattoria, uno studio, una bottega — non con startup che vogliono
              «scalare» qualcosa che ancora non esiste.
            </p>
            <p>
              Non chiamo i miei strumenti «intelligenza artificiale». Non vendo
              «trasformazione digitale». Faccio sistemi che funzionano la domenica
              sera quando tu sei in cucina o in palestra o a cena con tua moglie.
              Il resto è marketing.
            </p>
            <span className="sig">— Marco</span>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* =========================================================
   3. PROBLEMI REALI — editorial list
   ========================================================= */
const Problemi = () => {
  const items = [
    {
      h: "Le richieste arrivano, ma non le vedi in tempo.",
      p: "Email aperta a fine giornata, modulo del sito controllato il giorno dopo, qualcuno aveva già scelto un altro fornitore — e tu nemmeno sai chi era.",
      q: "«Mi sono accorto del messaggio tre giorni dopo.»",
    },
    {
      h: "Messaggi sparsi tra WhatsApp, email, telefono.",
      p: "Tre canali, tre quaderni mentali. Ogni tanto qualcuno cade nel mezzo e te ne accorgi solo settimane dopo.",
      q: "«Ma chi era quella signora di Bovolone?»",
    },
    {
      h: "I preventivi richiedono troppo tempo.",
      p: "Mezz'ora di domande, mezz'ora di scrittura, il cliente intanto ha già chiesto a tre concorrenti e si è dimenticato di te.",
      q: "«Lo faccio domani.» (tradotto: mai)",
    },
    {
      h: "Clienti che non rispondono e non sai cosa fare.",
      p: "Aspettare? Risollecitare? Lasciar perdere? Senza un sistema diventa lotteria — e quasi sempre perdi.",
      q: "«Forse era serio, forse no.»",
    },
    {
      h: "Non hai un sistema. Solo fortuna e improvvisazione.",
      p: "I mesi buoni vanno alla grande. Quelli neutri sembrano un mistero. Non sai cosa funziona davvero e cosa stai pagando per niente.",
      q: "«Boh, dipende dal mese.»",
    },
  ];
  return (
    <section className="section" id="problemi">
      <div className="container">
        <Reveal>
          <SectionKicker n="01" label="Problemi reali" />
        </Reveal>
        <Reveal>
          <h2 className="h-section" style={{ marginTop: 18, maxWidth: "16ch" }}>
            Le richieste si <em>perdono ovunque</em>.<br />Sistemiamolo.
          </h2>
        </Reveal>
        <Reveal>
          <p className="lead" style={{ marginTop: 18 }}>
            Se ti riconosci in uno di questi, non ti serve un sito più bello.
            Ti serve un sito che <em>lavori</em>.
          </p>
        </Reveal>
        <div className="problems">
          {items.map((it, i) => (
            <Reveal key={i} className="problem" delay={i * 30}>
              <span className="pn">0{i + 1}</span>
              <h3>{it.h}</h3>
              <p>{it.p}</p>
              <span className="quote">{it.q}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   4. COME FUNZIONA — vertical timeline w/ artefacts
   ========================================================= */
const ComeFunziona = () => {
  const steps = [
    {
      n: "01",
      h: "Cliente lascia una richiesta",
      p: "Dal sito, da WhatsApp Business o da un modulo dedicato — sceglie il canale che usa di più. Non lo forziamo a creare account.",
      art: (
        <>
          <span className="tag">/sito/contatti — form ricevuto</span>
          <div className="row"><b>nome.</b> Anna Conti</div>
          <div className="row"><b>fonte.</b> google · «cucina su misura verona»</div>
          <div className="row"><b>tipo.</b> richiesta preventivo</div>
        </>
      ),
    },
    {
      n: "02",
      h: "Il sistema registra e organizza",
      p: "Tutto finisce nello stesso foglio: nome, fonte, priorità, data, importo stimato. Senza copia-incolla, senza dimenticanze.",
      art: (
        <>
          <span className="tag">Sheets · Lead 2026 — riga 184</span>
          <div className="row"><b>184</b> Anna Conti · cucina · medio · 21/05 · nuovo</div>
          <div className="row"><b>183</b> Luca Bianchi · bagno · alto · 20/05 · in call</div>
          <div className="row"><b>182</b> Studio Rossi · ufficio · — · 19/05 · chiuso</div>
        </>
      ),
    },
    {
      n: "03",
      h: "Risposta automatica + follow-up",
      p: "Conferma immediata al cliente con tono umano (scritto da me, non da un LLM stordito). Se dopo 48h non risponde, parte un secondo messaggio. Punto.",
      art: (
        <>
          <span className="tag">Gmail · risposta inviata 14:03</span>
          <div className="row"><b>oggetto.</b> Grazie Anna, ti rispondo subito</div>
          <div className="row"><b>allegati.</b> 3 disponibilità per la call</div>
          <div className="row"><b>tono.</b> personale, in italiano vero</div>
        </>
      ),
    },
    {
      n: "04",
      h: "Tu ricevi tutto in ordine",
      p: "Una sola vista in Notion (o dove preferisci). Cosa è caldo, cosa aspetta, cosa hai già chiuso. Niente notifiche urlate ogni 3 minuti.",
      art: (
        <>
          <span className="tag">Notion · Lead in arrivo</span>
          <div className="row"><b>caldi.</b> 3 — da chiamare oggi</div>
          <div className="row"><b>in attesa.</b> 7 — follow-up automatico</div>
          <div className="row"><b>chiusi.</b> 12 — quest'anno</div>
        </>
      ),
    },
    {
      n: "05",
      h: "Cliente diventa appuntamento",
      p: "Sceglie l'orario da sé. Calendario sincronizzato, reminder 24h prima, link videocall già pronto. I no-show crollano del 70%.",
      art: (
        <>
          <span className="tag">Calendar · evento creato</span>
          <div className="row"><b>quando.</b> mar 27 mag · 10:30</div>
          <div className="row"><b>chi.</b> Anna Conti</div>
          <div className="row"><b>reminder.</b> 24h prima · sms + email</div>
        </>
      ),
    },
  ];
  return (
    <section className="section section--alt" id="come-funziona">
      <div className="container">
        <Reveal>
          <SectionKicker n="02" label="Come funziona" />
        </Reveal>
        <div className="flow">
          <div className="flow-side">
            <Reveal>
              <h4>Cinque passi.<br /><em>Sempre gli stessi.</em></h4>
              <p>
                Non è magia. Sono strumenti collegati per bene. Tu vedi solo il
                risultato: meno caos, più clienti già pronti a comprare.
              </p>
            </Reveal>
          </div>
          <div className="flow-steps">
            {steps.map((s, i) => (
              <Reveal key={i} className="flow-step" delay={i * 50}>
                <span className="num">{s.n}</span>
                <div>
                  <h5>{s.h}</h5>
                  <p>{s.p}</p>
                  <div className="flow-art">{s.art}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   5. COSA OFFRO — Siti + Automazioni
   ========================================================= */
const CosaOffro = () => (
  <section className="section" id="cosa-offro">
    <div className="container">
      <Reveal><SectionKicker n="03" label="Cosa offro" /></Reveal>
      <Reveal>
        <h2 className="h-section" style={{ marginTop: 18, maxWidth: "18ch" }}>
          Due cose. Una sola filosofia: <em>meno lavoro</em>, più clienti.
        </h2>
      </Reveal>
      <Reveal>
        <p className="lead" style={{ marginTop: 18 }}>
          Puoi partire dal sito, dalle automazioni o da entrambi. Spesso si parte
          piccolo e si aggiunge col tempo, quando emerge un collo di bottiglia vero.
        </p>
      </Reveal>

      <div className="offer">
        <Reveal className="offer-card">
          <span className="offer-stamp">Servizio 01 · Sito</span>
          <h3>Siti che <em>convertono</em>.<br />Non brochure online.</h3>
          <p className="desc">
            Pagine pensate per portare il visitatore a fare una cosa sola:
            contattarti. Il resto è zavorra.
          </p>
          <ul>
            {[
              "Design pulito, professionale, italiano",
              "Struttura pensata per ottenere richieste, non like",
              "Mobile-first e veloci anche con 3G in campagna",
              "Testi che spiegano. Niente parole vuote",
              "Modulo + WhatsApp + telefono diretto",
              "SEO locale per farti trovare nella tua provincia",
              "Consegna in 2–3 settimane. Sempre.",
            ].map((l) => (
              <li key={l}>
                <span className="li-mark">→</span>
                <span>{l}</span>
              </li>
            ))}
          </ul>
          <div className="offer-art">
            <div className="siteshot">
              <div className="bar"><i /><i /><i /></div>
              <span className="sub">falegnameria-conti.it/cucine</span>
              <span className="ttl">Cucine su misura per la tua casa.</span>
              <span className="sub">Sopralluogo gratuito in zona Verona · consegna in 6 settimane</span>
              <div className="stripes"><span /><span /><span /></div>
              <span className="cta">Richiedi preventivo →</span>
            </div>
          </div>
        </Reveal>

        <Reveal className="offer-card" delay={100}>
          <span className="offer-stamp">Servizio 02 · Sistema</span>
          <h3>Automazioni che <em>fanno risparmiare tempo</em>.</h3>
          <p className="desc">
            Pochi strumenti, collegati bene. Ogni richiesta che arriva viene
            registrata, smistata e seguita — anche di notte e nei weekend.
          </p>
          <ul>
            {[
              "Risposte automatiche, scritte da me (non da GPT)",
              "Gestione lead + follow-up automatici",
              "Promemoria e reminder agli appuntamenti",
              "Preventivi in bozza, pronti da rivedere",
              "Integrazioni: Gmail, WhatsApp, Calendar, Sheets, Notion",
              "Meno caos, più controllo, niente lock-in",
            ].map((l) => (
              <li key={l}>
                <span className="li-mark">→</span>
                <span>{l}</span>
              </li>
            ))}
          </ul>
          <div className="offer-art">
            <div className="autoshot">
              <div className="auto-row">
                <span className="lt">14:02</span>
                <span className="act">Lead ricevuto · Anna Conti</span>
                <span className="ok">ok</span>
              </div>
              <div className="auto-row">
                <span className="lt">14:02</span>
                <span className="act">Riga aggiunta in «Lead 2026»</span>
                <span className="ok">ok</span>
              </div>
              <div className="auto-row">
                <span className="lt">14:03</span>
                <span className="act">Email di conferma + 3 slot</span>
                <span className="ok">ok</span>
              </div>
              <div className="auto-row">
                <span className="lt">19:34</span>
                <span className="act">Slot scelto · evento in Calendar</span>
                <span className="ok">ok</span>
              </div>
              <div className="auto-row">
                <span className="lt">23:47</span>
                <span className="act">Notifica WhatsApp a Marco</span>
                <span className="ok">ok</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* =========================================================
   6. RISULTATI — asymmetric fact sheet
   ========================================================= */
const Risultati = () => {
  return (
    <section className="section" id="risultati">
      <div className="container">
        <Reveal><SectionKicker n="04" label="Risultati reali" /></Reveal>
        <Reveal>
          <h2 className="h-section" style={{ marginTop: 18, maxWidth: "18ch" }}>
            Numeri che si <em>vedono</em><br />nei conti, non nelle dashboard.
          </h2>
        </Reveal>

        <div className="metrics">
          <div className="metric lg">
            <span className="big"><em>−80%</em></span>
            <h4>Tempo perso in attività ripetitive</h4>
            <p>
              Email di conferma, smistamento contatti, copia-incolla tra moduli
              e fogli, follow-up dimenticati. Tutto in automatico.
            </p>
            <span className="src">Media · 6 clienti / 12 mesi</span>
          </div>
          <div className="metric">
            <span className="big">+35%</span>
            <h4>Richieste di contatto generate</h4>
            <p>Sito che spiega + CTA chiari + form veloce.</p>
            <span className="src">Stessa azienda, prima/dopo</span>
          </div>
          <div className="metric">
            <span className="big">24/7</span>
            <h4>Risposta al primo messaggio</h4>
            <p>Anche la domenica alle 23. Parte sempre.</p>
            <span className="src">Tempo medio · 5 minuti</span>
          </div>
          <div className="metric">
            <span className="big"><em>100%</em></span>
            <h4>Contatti organizzati</h4>
            <p>Niente lead persi tra Instagram, email e quaderni di carta.</p>
            <span className="src">Senza eccezioni</span>
          </div>
          <div className="metric">
            <span className="big">€ 0</span>
            <h4>Licenze proprietarie obbligate</h4>
            <p>Lavoro con strumenti che hai già. Niente piattaforma chiusa.</p>
            <span className="src">Promessa per iscritto</span>
          </div>
        </div>

        <p className="metric-note">
          Ogni attività è diversa, i numeri cambiano. Quelli sopra sono medie
          oneste — non «risultati garantiti» fatti col Photoshop.
        </p>
      </div>
    </section>
  );
};

/* =========================================================
   7. CASI — newspaper articles
   ========================================================= */
const Casi = () => {
  const cases = [
    {
      kind: "Trattoria · 28 coperti",
      where: "San Giovanni Lupatoto (VR)",
      n: "I",
      h: "Prenotazioni senza il telefono che squilla.",
      quote: "«Mi stanco a rispondere agli stessi messaggi. Perdo prenotazioni perché di sera sono in cucina.»",
      p: "Sito con menù aggiornabile in 30 secondi, prenotazione via WhatsApp Business e risposte automatiche fuori orario. Tu lavori, il sistema risponde — e ti gira solo le richieste vere.",
      stat: { num: "−40%", label: "chiamate · +25% coperti weekend" },
      art: <CaseArtChat />,
    },
    {
      kind: "Studio commercialista",
      where: "Verona centro",
      n: "II",
      h: "Prima call solo con i clienti giusti.",
      quote: "«Il 70% delle persone che mi chiamava non era nemmeno il mio target. Tempo buttato in onestà professionale.»",
      p: "Form di qualifica leggero prima della call: 4 domande, 90 secondi. Solo se il match è alto si vede il calendario. Conferme e reminder automatici.",
      stat: { num: "−85%", label: "da 3h a 20 min/sett · solo prospect qualificati" },
      art: <CaseArtForm />,
    },
    {
      kind: "Falegname · cucine su misura",
      where: "Bovolone (VR)",
      n: "III",
      h: "Preventivi che partono lo stesso giorno.",
      quote: "«Ricevevo richieste e impiegavo 3-4 giorni a rispondere. Metà clienti sceglieva altro nel frattempo.»",
      p: "Modulo guidato sul sito che raccoglie info utili (misure, materiali, budget). Bozza preventivo già scritta — io rileggo, aggiungo, mando. Follow-up dopo 48h se silenzio.",
      stat: { num: "+22%", label: "lead convertiti in 60 giorni" },
      art: <CaseArtQuote />,
    },
    {
      kind: "Palestra · 180 iscritti",
      where: "Villafranca (VR)",
      n: "IV",
      h: "Iscrizioni gestite senza segreteria.",
      quote: "«Avevo due persone a tempo pieno per abbonamenti e prove. Una se n'è andata e non l'ho sostituita.»",
      p: "Prenotazione lezioni di prova online, reminder WhatsApp 24h prima, scadenze abbonamento in automatico. Nessuno «si dimentica» più.",
      stat: { num: "−30%", label: "no-show · meno uno stipendio in segreteria" },
      art: <CaseArtSchedule />,
    },
  ];
  return (
    <section className="section section--alt" id="casi">
      <div className="container">
        <Reveal><SectionKicker n="05" label="Casi reali" /></Reveal>
        <Reveal>
          <h2 className="h-section" style={{ marginTop: 18, maxWidth: "20ch" }}>
            Quattro storie <em>concrete</em>.<br />Settori diversi, problema simile.
          </h2>
        </Reveal>
        <Reveal>
          <p className="lead" style={{ marginTop: 18 }}>
            Tutti hanno smesso di rincorrere e iniziato a ricevere. Nomi e luoghi
            cambiati su richiesta — i numeri no.
          </p>
        </Reveal>

        <div className="cases">
          {cases.map((c, i) => (
            <Reveal key={i} className="case" delay={i * 40}>
              <div className="case-body">
                <div className="case-byline">
                  <span className="num">Caso {c.n}</span>
                  <span>{c.kind}</span>
                  <span>· {c.where}</span>
                </div>
                <h3>{c.h}</h3>
                <p className="case-quote">{c.quote}</p>
                <p>{c.p}</p>
                <div className="case-stat">
                  <span className="num">{c.stat.num}</span>
                  <span className="lbl">{c.stat.label}</span>
                </div>
              </div>
              <div className="case-art">{c.art}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* artefacts — realistic, not "tech fantasy" */
const CaseArtChat = () => (
  <>
    <div className="head">
      <span>WhatsApp Business · Trattoria</span>
      <span>Ven · 20:34</span>
    </div>
    <div className="bub in"><span className="who">+39 347 ··· · cliente</span>Buonasera, avete posto per 4 venerdì sera?</div>
    <div className="bub auto"><span className="who">auto · 20:34</span>Buonasera! Vediamo subito. Confermo io entro 10 minuti — nel frattempo, può dirmi un orario indicativo?</div>
    <div className="bub in">21:30 se possibile, grazie</div>
    <div className="bub out"><span className="who">marco · 20:39</span>Confermato. Tavolo 12, venerdì 21:30, 4 persone. A presto!</div>
    <p className="marginalia" style={{ marginTop: "auto", paddingTop: 8, borderTop: "1px solid var(--rule)" }}>
      4 messaggi · 3 di sistema · tu hai scritto solo l'ultimo
    </p>
  </>
);

const CaseArtForm = () => (
  <>
    <div className="head">
      <span>Form qualifica · passo 3 di 4</span>
      <span>14:12 · 21 mag</span>
    </div>
    <div className="qf-row"><span>Persona fisica o P. IVA?</span><span className="v">P. IVA</span></div>
    <div className="qf-row"><span>Fatturato annuo</span><span className="v">200k – 500k</span></div>
    <div className="qf-row"><span>Cosa cerchi?</span><span className="v">Consulenza fiscale</span></div>
    <div className="qf-row"><span>Hai già un commercialista?</span><span className="v">Sì, cerco secondo parere</span></div>
    <div className="qf-row match"><span>Compatibilità</span><span className="v">Alta · vedi calendario</span></div>
  </>
);

const CaseArtQuote = () => (
  <>
    <div className="head">
      <span>Gmail · bozza preventivo</span>
      <span>generata 2 min fa</span>
    </div>
    <div className="letter">
      <span className="h">a: Sig.ra Conti · oggetto: stima indicativa</span>
      <p style={{ margin: 0 }}>Gent.le Sig.ra Conti,</p>
      <p style={{ margin: 0 }}>
        come da richiesta del 21/05 le invio una <strong>stima indicativa</strong>{" "}
        per la cucina lineare 3,20 m in rovere massello con isola centrale…
      </p>
      <div className="price-row">
        <span>Totale stimato (IVA incl.)</span>
        <strong>€ 8.400 – 9.200</strong>
      </div>
      <span className="h">→ pronto da rivedere e inviare in 90 secondi</span>
    </div>
  </>
);

const CaseArtSchedule = () => (
  <>
    <div className="head">
      <span>Calendar · settimana 21</span>
      <span>4 prove · 0 no-show</span>
    </div>
    <div className="sched">
      {[
        { d: "L", slots: [{ t: "9:00", k: "" }] },
        { d: "M", slots: [{ t: "11:30", k: "alt" }, { t: "18:00", k: "" }] },
        { d: "M", slots: [{ t: "18:00", k: "" }] },
        { d: "G", slots: [{ t: "9:00", k: "alt" }, { t: "—", k: "empty" }] },
        { d: "V", slots: [{ t: "19:00", k: "" }] },
      ].map((day, i) => (
        <div key={i} className="sched-day">
          <span className="d">{day.d}</span>
          {day.slots.map((s, j) => (
            <span key={j} className={"slot" + (s.k ? " " + s.k : "")}>{s.t}</span>
          ))}
        </div>
      ))}
    </div>
    <p className="marginalia" style={{ marginTop: 8 }}>blu = prova gratuita · contorno = chi non si è presentato</p>
  </>
);

/* =========================================================
   8. MANIFESTO — replaces logo grid
   ========================================================= */
const Manifesto = () => {
  const using = [
    { nm: "WhatsApp Business", why: "Perché i tuoi clienti lo usano già. Più diretto di qualunque CRM.", tag: "Chat" },
    { nm: "Google Sheets",     why: "Non è elegante. Ma è veloce, condivisibile e tutti lo capiscono.",       tag: "Database" },
    { nm: "Gmail + filtri",    why: "Inbox vera, niente piattaforma «proprietaria» che ti tiene in ostaggio.", tag: "Email" },
    { nm: "Google Calendar",   why: "Il calendario che ha già il tuo dentista. Sincronia naturale.",            tag: "Agenda" },
    { nm: "Notion (se serve)", why: "Per chi vuole una vista d'insieme. Altrimenti: non serve.",                tag: "Vista" },
    { nm: "n8n / Zapier",      why: "Le tubature dietro le quinte. Tu non le vedi mai.",                        tag: "Colla" },
  ];
  const avoiding = [
    { nm: "Chatbot «AI» a tutto schermo",     why: "Nessuno vuole parlare con un robot. Cliente perso al primo «Ciao! Sono Aria».", tag: "Slop" },
    { nm: "Dashboard a 47 KPI",                why: "Numeri che nessuno guarda dopo la prima settimana. Bellini, inutili.",     tag: "Vanità" },
    { nm: "Builder bloccati (Wix, Webflow†)",  why: "Comodi finché va. Poi non muovi una virgola senza pagare di nuovo.",          tag: "Lock-in" },
    { nm: "GPT che risponde ai clienti",       why: "Il tuo cliente lo capisce in 3 secondi. E poi non scrive più.",               tag: "Slop" },
    { nm: "App proprietarie «tutto-in-uno»",   why: "Se vai via, perdi 5 anni di dati. Mai più.",                                  tag: "Lock-in" },
    { nm: "Animazioni, gradienti, neon",       why: "Non ti portano clienti. Ti portano commenti su Instagram.",                   tag: "Vanità" },
  ];
  return (
    <section className="section" id="manifesto">
      <div className="container">
        <Reveal><SectionKicker n="06" label="Manifesto · strumenti" /></Reveal>
        <Reveal>
          <h2 className="h-section" style={{ marginTop: 18, maxWidth: "20ch" }}>
            Cosa <em>uso</em>. Cosa <em>non uso</em>, mai.
          </h2>
        </Reveal>
        <Reveal>
          <p className="lead" style={{ marginTop: 18 }}>
            Niente piattaforme proprietarie da imparare. Gli strumenti li conosci già —
            io li metto in dialogo tra loro, dietro le quinte. Quello che evito è
            altrettanto importante.
          </p>
        </Reveal>

        <div className="manifesto">
          <Reveal className="manifesto-col">
            <h4>Cosa <em>uso</em></h4>
            <ul className="manifesto-list">
              {using.map((it) => (
                <li key={it.nm}>
                  <span className="nm">{it.nm}</span>
                  <span className="tag">{it.tag}</span>
                  <span className="why">{it.why}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="manifesto-col bad" delay={80}>
            <h4>Cosa <em>evito</em></h4>
            <ul className="manifesto-list">
              {avoiding.map((it) => (
                <li key={it.nm}>
                  <span className="nm">{it.nm}</span>
                  <span className="tag">{it.tag}</span>
                  <span className="why">{it.why}</span>
                </li>
              ))}
            </ul>
            <p className="marginalia" style={{ marginTop: 14 }}>† Webflow va benissimo, ma non per la maggior parte dei miei clienti.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   9. PROCESSO
   ========================================================= */
const Processo = () => {
  const steps = [
    { n: "01", h: "Analisi della tua attività", p: "Mezz'ora di call. Capiamo cosa fai, dove perdi tempo, dove perdi clienti. Niente «discovery» da 4 ore.", when: "30 minuti · gratis" },
    { n: "02", h: "Progettazione su misura",     p: "Proposta in una pagina: sito, automazioni, tempi, prezzo. Niente PDF da 30 slide con grafici inutili.", when: "Entro 3 giorni" },
    { n: "03", h: "Sviluppo e automazioni",      p: "2–4 settimane di lavoro vero. Ogni venerdì un aggiornamento scritto. Vedi tutto su un link privato.",   when: "2–4 settimane" },
    { n: "04", h: "Lancio e ottimizzazione",     p: "Si va online. Mezz'ora di formazione, video registrato per riferimento. Un mese di supporto incluso.",  when: "1 mese incluso" },
  ];
  return (
    <section className="section section--alt" id="processo">
      <div className="container">
        <Reveal><SectionKicker n="07" label="Processo" /></Reveal>
        <Reveal>
          <h2 className="h-section" style={{ marginTop: 18, maxWidth: "16ch" }}>
            Quattro passi. <em>Nessuna sorpresa.</em>
          </h2>
        </Reveal>
        <Reveal>
          <p className="lead" style={{ marginTop: 18 }}>
            Sai sempre dove siamo, cosa stai pagando, quando arriva il prossimo
            aggiornamento. Se sgarro io di una settimana, sconto del 10%. Per
            iscritto.
          </p>
        </Reveal>
        <div className="process">
          {steps.map((s, i) => (
            <Reveal key={i} className="process-step" delay={i * 50}>
              <span className="num">{s.n}</span>
              <h5>{s.h}</h5>
              <p>{s.p}</p>
              <span className="when">{s.when}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   10. FAQ
   ========================================================= */
const FAQ = () => {
  const faqs = [
    {
      q: "Quanto tempo serve per creare un sito?",
      a: "Per un sito vetrina due settimane, di cui 3–4 giorni in cui ci scambiamo testi e foto. Per un sito + automazioni siamo sulle 3–4 settimane. Se hai fretta vera te lo dico in call, senza promesse vuote.",
    },
    {
      q: "Posso aggiornare il sito in autonomia?",
      a: "Sì. Ti consegno il sito con un piccolo pannello e una mini guida video (15 min). Cambi testi, foto, orari, promo. Se preferisci delegare c'è anche un'opzione manutenzione a forfait.",
    },
    {
      q: "Le automazioni sono complicate?",
      a: "Dal tuo lato no — vedi solo il risultato (un'email che parte, un foglio che si aggiorna, un cliente che prenota). Io progetto e configuro tutto. Tu mi dici cosa deve succedere e quando.",
    },
    {
      q: "Serve avere già testi e immagini?",
      a: "Non sempre. Se hai materiali buoni, li sistemo. Se non li hai, scriviamo i testi insieme (te li mando in bozza, tu correggi) e usiamo foto curate o placeholder onesti finché non avrai le tue.",
    },
    {
      q: "Posso iniziare solo dal sito?",
      a: "Assolutamente. È il percorso più comune: si parte dal sito, lo si fa funzionare, e si aggiungono automazioni quando emerge un collo di bottiglia concreto. Niente AI per il gusto di averla.",
    },
    {
      q: "Quanto costa?",
      a: "Sito da 1.800 €. Sito + sistema di automazioni da 3.500 €. Non c'è un listino fisso, c'è una proposta in una pagina dopo la call. Pagamenti rateizzabili, P. IVA italiana.",
    },
  ];
  return (
    <section className="section" id="faq">
      <div className="container">
        <Reveal><SectionKicker n="08" label="Domande frequenti" /></Reveal>
        <Reveal>
          <h2 className="h-section" style={{ marginTop: 18, maxWidth: "20ch" }}>
            Cose che mi chiedono <em>quasi sempre</em>.
          </h2>
        </Reveal>
        <Reveal>
          <p className="lead" style={{ marginTop: 18 }}>
            Se non trovi la tua, scrivimi su WhatsApp: rispondo personalmente,
            di solito entro un'ora nei giorni feriali.
          </p>
        </Reveal>
        <div className="faq">
          {faqs.map((f, i) => (
            <Reveal as="details" key={i} className="faq-item" delay={i * 25}>
              <summary>
                <span className="q">D.</span>
                <span>{f.q}</span>
                <span className="toggle" />
              </summary>
              <div className="answer">{f.a}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   11. FINAL CTA
   ========================================================= */
const FinalCTA = ({ onContact }) => (
  <section className="final" id="contatti">
    <div className="container">
      <Reveal>
        <div className="final-grid">
          <div>
            <div className="signoff">— Pronto a smettere?</div>
            <h2>
              Smetti di perdere richieste.<br />
              <em>Inizia a lavorare meglio.</em>
            </h2>
            <p>
              Prenota una call gratuita di 30 minuti. Quattro domande, due o tre
              cose concrete che puoi provare già la settimana prossima — anche
              senza lavorare con me. <span className="hand">promesso.</span>
            </p>
            <div className="hero-ctas" style={{ marginTop: 0 }}>
              <button className="btn btn--primary btn--lg" onClick={onContact}>
                Prenota una call gratuita <Icon name="arrow" size={14} className="arrow" />
              </button>
              <a className="btn btn--lg" href="https://wa.me/" target="_blank" rel="noreferrer">
                Scrivimi su WhatsApp
              </a>
            </div>
          </div>
          <div className="final-side">
            <h5>Cosa succede dopo</h5>
            {[
              "Ti rispondo entro 24h, di persona — niente segreteria, niente bot.",
              "Ti mando un link per scegliere giorno e orario che ti tornano.",
              "30 minuti, zero slide, zero impegno. Domande dirette, risposte dirette.",
              "Esci con almeno 2–3 idee concrete da applicare la settimana dopo.",
            ].map((t, i) => (
              <div key={i} className="final-bullet">
                <span className="num">0{i + 1}</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* =========================================================
   12. FOOTER
   ========================================================= */
const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="footer-top">
        <div className="footer-col">
          <Brand />
          <p className="footer-tag">
            Creo siti che lavorano al posto tuo.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram"><Icon name="instagram" size={16} /></a>
            <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={16} /></a>
          </div>
        </div>
        <div className="footer-col">
          <h5>Servizi</h5>
          <ul>
            <li><a href="#cosa-offro">Siti che convertono</a></li>
            <li><a href="#cosa-offro">Automazioni</a></li>
            <li><a href="#come-funziona">Come funziona</a></li>
            <li><a href="#casi">Casi reali</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Link utili</h5>
          <ul>
            <li><a href="#problemi">Problemi</a></li>
            <li><a href="#manifesto">Manifesto</a></li>
            <li><a href="#processo">Processo</a></li>
            <li><a href="#faq">Domande frequenti</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Contatti · legali</h5>
          <ul>
            <li><a href="mailto:ciao@studio-quiet.it">ciao@studio-quiet.it</a></li>
            <li><a href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp diretto</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Cookie policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Studio Quiet · P. IVA in registrazione</span>
        <span className="made">Costruito a mano, sull'Appennino veronese.</span>
      </div>
    </div>
  </footer>
);

/* =========================================================
   WHATSAPP FLOAT + CONTACT DIALOG
   ========================================================= */
const WhatsAppFloat = () => (
  <a className="wa-float" href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="WhatsApp">
    <span className="dot" />
    <span className="txt">WhatsApp · risp. in 1h</span>
  </a>
);

const ContactDialog = ({ open, onClose }) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ name: "", email: "", business: "", interest: "Sito che porta richieste", message: "" });

  useEffect(() => { if (!open) setStep(0); }, [open]);
  if (!open) return null;

  const submit = (e) => { e.preventDefault(); setStep(1); };

  return (
    <div className="dialog-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Chiudi">
          <Icon name="close" size={18} />
        </button>

        {step === 0 ? (
          <>
            <span className="stamp">Call · 30 min · gratis</span>
            <h3>Raccontami il caso.</h3>
            <p className="body" style={{ fontSize: 15, marginTop: 8, fontFamily: "var(--font-text)" }}>
              Quattro campi, niente moduli infiniti. Ti rispondo entro 24h, di persona.
            </p>
            <form onSubmit={submit}>
              <div className="field"><label>Nome</label>
                <input required value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} /></div>
              <div className="field"><label>Email</label>
                <input type="email" required value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} /></div>
              <div className="field"><label>Cosa fai</label>
                <input placeholder="es. trattoria, studio commerciale, palestra…" value={data.business} onChange={(e) => setData({ ...data, business: e.target.value })} /></div>
              <div className="field">
                <label>Da dove partiamo</label>
                <div className="choice">
                  {["Sito che porta richieste", "Automazioni", "Tutti e due"].map((opt) => (
                    <button key={opt} type="button"
                      data-on={data.interest === opt ? "1" : "0"}
                      onClick={() => setData({ ...data, interest: opt })}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div className="field"><label>Due righe sul problema (opzionale)</label>
                <textarea rows={3} value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })} /></div>
              <button className="btn btn--primary" type="submit" style={{ justifyContent: "center", marginTop: 6 }}>
                Invia <Icon name="arrow" size={14} className="arrow" />
              </button>
              <p className="muted" style={{ fontSize: 11, textAlign: "center", margin: 0, fontFamily: "var(--font-mono)", letterSpacing: ".04em" }}>
                Non userò mai i tuoi dati per altro. Promesso.
              </p>
            </form>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <div style={{
              width: 56, height: 56, margin: "0 auto 22px",
              background: "var(--ink)", color: "var(--paper)", display: "grid", placeItems: "center",
              border: "1px solid var(--ink)",
            }}>
              <Icon name="check" size={26} strokeWidth={2.2} />
            </div>
            <h3 style={{ fontSize: 32, margin: "0 0 10px" }}>Ricevuto.</h3>
            <p style={{ fontSize: 15, maxWidth: "36ch", margin: "0 auto 24px", fontFamily: "var(--font-text)", color: "var(--ink-2)" }}>
              Ti rispondo entro 24h via email. Se hai fretta vera, WhatsApp è più veloce.
            </p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <a className="btn" href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp</a>
              <button className="btn btn--primary" onClick={onClose}>Chiudi</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Object.assign(window, {
  Header, Hero, ChiSono,
  Problemi, ComeFunziona, CosaOffro, Risultati, Casi,
  Manifesto, Processo, FAQ, FinalCTA, Footer,
  WhatsAppFloat, ContactDialog,
});
