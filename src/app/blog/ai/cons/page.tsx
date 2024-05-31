'use client';
import Link from "next/link";
import Image from "next/image";

export default function Cons() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">Contro dell&apos;Intelligenza Artificiale</h1>
            <Image
                src="/1678456683532.png"
                alt="Disadvantages of AI"
                width={800}
                height={400}
                className="mb-4"
            />
            <p className="mb-4">Ecco alcuni svantaggi dell&apos;intelligenza artificiale:</p>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    Perdita di posti di lavoro
                </div>
                <div className="collapse-content">
                    <p>L&apos;automazione potrebbe portare alla perdita di molti posti di lavoro, soprattutto in settori come la produzione e i servizi.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    Problemi di privacy e sicurezza
                </div>
                <div className="collapse-content">
                    <p>L&apos;uso di IA può portare a violazioni della privacy e a preoccupazioni per la sicurezza dei dati personali.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    Discriminazione algoritmica
                </div>
                <div className="collapse-content">
                    <p>Gli algoritmi di IA possono perpetuare o amplificare pregiudizi esistenti, portando a decisioni ingiuste.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    Dipendenza dalla tecnologia
                </div>
                <div className="collapse-content">
                    <p>Un&apos;eccessiva dipendenza dall&apos;IA può ridurre le competenze umane e aumentare la vulnerabilità a guasti tecnologici.</p>
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
