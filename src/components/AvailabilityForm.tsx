import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const eventTypes = [
  "Casamiento",
  "15 años",
  "Cumpleaños",
  "Infantil",
  "Corporativo",
  "Otro",
] as const;

type EventType = (typeof eventTypes)[number];

export function AvailabilityForm() {
  const [step, setStep] = useState(1);
  const [eventType, setEventType] = useState<EventType | null>(null);
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const goNext = () => setStep((s) => Math.min(s + 1, 4));
  const goBack = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="disponibilidad" className="bg-beige py-24 text-charcoal md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              number="06 — Planificación"
              title="Empecemos a planificar tu evento."
              description="Contanos qué estás imaginando y te ayudamos a encontrar la propuesta ideal."
              light
            />
            <div className="mt-12 hidden space-y-6 border-t border-charcoal/10 pt-10 lg:block">
              {[
                "Descubrí el espacio",
                "Elegí tu tipo de evento",
                "Consultá disponibilidad",
                "Recibí una propuesta a medida",
              ].map((item, i) => (
                <div key={item} className="flex items-baseline gap-4">
                  <span className="font-sans text-[10px] tracking-editorial text-champagne-dim uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-xl text-charcoal/80">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-7">
            <div className="border border-charcoal/10 bg-ivory px-6 py-8 md:px-10 md:py-12">
              {/* Progress */}
              <div className="mb-10 flex items-center justify-between gap-4">
                <p className="font-sans text-[10px] font-medium tracking-editorial text-champagne-dim uppercase">
                  Paso 0{step} — 04
                </p>
                <div className="flex flex-1 justify-end gap-1.5 sm:max-w-[180px]">
                  {[1, 2, 3, 4].map((n) => (
                    <div
                      key={n}
                      className={`h-px flex-1 transition-colors duration-500 ${
                        n <= step ? "bg-champagne" : "bg-charcoal/15"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {submitted ? (
                <div className="step-enter py-10 text-center">
                  <p className="font-sans text-[10px] tracking-editorial text-champagne-dim uppercase">
                    Consulta recibida
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-charcoal md:text-4xl">
                    Gracias por confiar en nosotros.
                  </h3>
                  <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-stone-mid">
                    Te contactaremos para compartirte las propuestas disponibles
                    y acompañarte en la planificación.
                  </p>
                  <a
                    href="https://wa.me/541141703713"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-10 inline-flex border border-charcoal/20 px-6 py-3 font-sans text-[11px] tracking-wide-label text-charcoal uppercase transition-colors hover:border-charcoal"
                  >
                    Escribinos por WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="step-enter" key={step}>
                  {step === 1 && (
                    <div>
                      <h3 className="font-serif text-2xl text-charcoal md:text-3xl">
                        ¿Qué estás celebrando?
                      </h3>
                      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {eventTypes.map((type) => {
                          const selected = eventType === type;
                          return (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setEventType(type)}
                              className={`border px-3 py-5 text-center transition-all duration-500 ${
                                selected
                                  ? "border-charcoal bg-charcoal text-ivory"
                                  : "border-charcoal/15 text-charcoal hover:border-charcoal/40"
                              }`}
                            >
                              <span className="font-serif text-lg md:text-xl">
                                {type}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                      <div className="mt-10 flex justify-end">
                        <button
                          type="button"
                          disabled={!eventType}
                          onClick={goNext}
                          className="border border-charcoal bg-charcoal px-7 py-3.5 font-sans text-[11px] font-medium tracking-wide-label text-ivory uppercase transition-opacity disabled:cursor-not-allowed disabled:opacity-35"
                        >
                          Continuar
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <h3 className="font-serif text-2xl text-charcoal md:text-3xl">
                        ¿Cuándo?
                      </h3>
                      <p className="mt-3 text-[14px] text-stone-mid">
                        Fecha estimada de tu celebración.
                      </p>
                      <label className="mt-8 block">
                        <span className="font-sans text-[10px] font-medium tracking-editorial text-champagne-dim uppercase">
                          Fecha estimada
                        </span>
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="mt-3 w-full border-0 border-b border-charcoal/25 bg-transparent py-3 text-charcoal outline-none transition-colors focus:border-champagne"
                          required
                        />
                      </label>
                      <div className="mt-10 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={goBack}
                          className="font-sans text-[11px] tracking-wide-label text-stone-mid uppercase transition-colors hover:text-charcoal"
                        >
                          ← Volver
                        </button>
                        <button
                          type="button"
                          disabled={!date}
                          onClick={goNext}
                          className="border border-charcoal bg-charcoal px-7 py-3.5 font-sans text-[11px] font-medium tracking-wide-label text-ivory uppercase transition-opacity disabled:cursor-not-allowed disabled:opacity-35"
                        >
                          Continuar
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div>
                      <h3 className="font-serif text-2xl text-charcoal md:text-3xl">
                        ¿Cuántas personas?
                      </h3>
                      <p className="mt-3 text-[14px] text-stone-mid">
                        Una estimación nos ayuda a pensarte mejor el espacio.
                      </p>
                      <label className="mt-8 block">
                        <span className="font-sans text-[10px] font-medium tracking-editorial text-champagne-dim uppercase">
                          Cantidad aproximada de invitados
                        </span>
                        <input
                          type="number"
                          min={1}
                          placeholder="Ej. 120"
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                          className="mt-3 w-full border-0 border-b border-charcoal/25 bg-transparent py-3 text-charcoal outline-none placeholder:text-charcoal/30 transition-colors focus:border-champagne"
                          required
                        />
                      </label>
                      <div className="mt-10 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={goBack}
                          className="font-sans text-[11px] tracking-wide-label text-stone-mid uppercase transition-colors hover:text-charcoal"
                        >
                          ← Volver
                        </button>
                        <button
                          type="button"
                          disabled={!guests}
                          onClick={goNext}
                          className="border border-charcoal bg-charcoal px-7 py-3.5 font-sans text-[11px] font-medium tracking-wide-label text-ivory uppercase transition-opacity disabled:cursor-not-allowed disabled:opacity-35"
                        >
                          Continuar
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div>
                      <h3 className="font-serif text-2xl text-charcoal md:text-3xl">
                        Contanos un poco más
                      </h3>
                      <p className="mt-3 text-[14px] text-stone-mid">
                        {eventType
                          ? `Estás planificando: ${eventType.toLowerCase()}.`
                          : "Dejanos tus datos para continuar."}
                      </p>
                      <div className="mt-8 space-y-6">
                        <label className="block">
                          <span className="font-sans text-[10px] font-medium tracking-editorial text-champagne-dim uppercase">
                            Nombre
                          </span>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-3 w-full border-0 border-b border-charcoal/25 bg-transparent py-3 text-charcoal outline-none transition-colors focus:border-champagne"
                            required
                          />
                        </label>
                        <label className="block">
                          <span className="font-sans text-[10px] font-medium tracking-editorial text-champagne-dim uppercase">
                            WhatsApp
                          </span>
                          <input
                            type="tel"
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                            className="mt-3 w-full border-0 border-b border-charcoal/25 bg-transparent py-3 text-charcoal outline-none transition-colors focus:border-champagne"
                            required
                          />
                        </label>
                        <label className="block">
                          <span className="font-sans text-[10px] font-medium tracking-editorial text-champagne-dim uppercase">
                            Email
                          </span>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-3 w-full border-0 border-b border-charcoal/25 bg-transparent py-3 text-charcoal outline-none transition-colors focus:border-champagne"
                            required
                          />
                        </label>
                      </div>
                      <div className="mt-10 flex items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={goBack}
                          className="font-sans text-[11px] tracking-wide-label text-stone-mid uppercase transition-colors hover:text-charcoal"
                        >
                          ← Volver
                        </button>
                        <button
                          type="submit"
                          className="border border-champagne bg-champagne px-6 py-3.5 font-sans text-[11px] font-medium tracking-wide-label text-charcoal uppercase transition-colors hover:bg-champagne-soft sm:px-7"
                        >
                          Consultar disponibilidad
                        </button>
                      </div>
                      <p className="mt-8 text-center text-[13px] text-stone-mid/80 md:text-left">
                        Te contactaremos para compartirte las propuestas
                        disponibles.
                      </p>
                    </div>
                  )}
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
