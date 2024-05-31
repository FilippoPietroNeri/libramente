import Link from 'next/link';
import Image from 'next/image';

export default function Pros() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Pro dell'Intelligenza Artificiale</h1>
      <Image
        src="/1678456683532.png"
        alt="Advantages of AI"
        width={800}
        height={400}
        className="mb-4"
      />
      <p className="mb-4">Ecco alcuni vantaggi dell'intelligenza artificiale:</p>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Automazione di compiti ripetitivi
        </div>
        <div className="collapse-content">
          <p>L&apos;IA può svolgere compiti noiosi e ripetitivi, liberando tempo per attività più creative e strategiche.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Miglioramenti nella diagnosi medica
        </div>
        <div className="collapse-content">
          <p>Gli algoritmi di IA possono analizzare grandi quantità di dati medici per identificare modelli e fare previsioni più accurate.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Efficienza nei processi aziendali
        </div>
        <div className="collapse-content">
          <p>L&apos;IA può ottimizzare le operazioni aziendali, riducendo i costi e migliorando l'efficienza.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Innovazioni nei trasporti
        </div>
        <div className="collapse-content">
          <p>I veicoli autonomi e i sistemi di traffico intelligente possono ridurre gli incidenti e migliorare la mobilità urbana.</p>
        </div>
      </div>
      <div className="mt-4">
        <Link href="/blog/ai">
          <button className="btn btn-primary">Torna alla Home</button>
        </Link>
      </div>
    </div>
  );
}
