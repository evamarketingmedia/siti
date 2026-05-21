/* global React, ReactDOM, window */
const { useState, useEffect } = React;
const {
  useReveal,
  Header, Hero, ChiSono,
  Problemi, ComeFunziona, CosaOffro, Risultati, Casi,
  Manifesto, Processo, FAQ, FinalCTA, Footer,
  WhatsAppFloat, ContactDialog,
  TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakColor, TweakToggle,
} = window;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "chiaro",
  "accent": "#1F3DB8",
  "pencil": "#B83228",
  "showWhatsApp": true,
  "showAnnotations": true
}/*EDITMODE-END*/;

const ACCENTS  = ["#1F3DB8", "#1A1612", "#2F7D3F", "#B8761A", "#5D3FBE"];
const PENCILS  = ["#B83228", "#1F3DB8", "#1A1612", "#7A5C2E"];

function App() {
  useReveal();
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", t.theme === "scuro" ? "dark" : "light");
    if (t.accent) {
      root.style.setProperty("--accent", t.accent);
      root.style.setProperty("--accent-soft", t.accent + "14");
    }
    if (t.pencil) {
      root.style.setProperty("--pencil", t.pencil);
    }
    document.body.classList.toggle("no-annotations", !t.showAnnotations);
  }, [t.theme, t.accent, t.pencil, t.showAnnotations]);

  const openContact = () => setContactOpen(true);

  return (
    <>
      <Header onContact={openContact} />
      <main>
        <Hero onContact={openContact} />        {/*  1 */}
        <ChiSono />                              {/*  2 */}
        <Problemi />                             {/*  3 */}
        <ComeFunziona />                         {/*  4 */}
        <CosaOffro />                            {/*  5 */}
        <Risultati />                            {/*  6 */}
        <Casi />                                 {/*  7 */}
        <Manifesto />                            {/*  8 */}
        <Processo />                             {/*  9 */}
        <FAQ />                                  {/* 10 */}
        <FinalCTA onContact={openContact} />     {/* 11 */}
      </main>
      <Footer />

      {t.showWhatsApp && <WhatsAppFloat />}
      <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Carta">
          <TweakRadio label="Sfondo" value={t.theme}
            onChange={(v) => setTweak("theme", v)}
            options={["chiaro", "scuro"]} />
        </TweakSection>
        <TweakSection label="Inchiostro">
          <TweakColor label="Accento (blu pensato)" value={t.accent}
            onChange={(v) => setTweak("accent", v)}
            options={ACCENTS} />
          <TweakColor label="Matita (annotazioni)" value={t.pencil}
            onChange={(v) => setTweak("pencil", v)}
            options={PENCILS} />
        </TweakSection>
        <TweakSection label="Extra">
          <TweakToggle label="Annotazioni a mano" value={t.showAnnotations}
            onChange={(v) => setTweak("showAnnotations", v)} />
          <TweakToggle label="Pulsante WhatsApp" value={t.showWhatsApp}
            onChange={(v) => setTweak("showWhatsApp", v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
