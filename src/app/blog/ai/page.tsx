import Link from "next/link";
import Image from "next/image";
import YoutubeEmbed from "@/components/YouTubeEmbed";

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">Educazione Civica sull&apos;Intelligenza Artificiale</h1>
            <Image
                src="/mind.png"
                alt="Overview of AI"
                width={800}
                height={400}
                className="mb-4"
                priority
            />
            <p className="mb-4">
                Con tutto il clamore suscitato dall&apos;Intelligenza Artificiale - robot, auto a guida autonoma, ecc. - è facile pensare che l&apos;intelligenza artificiale non abbia un impatto sulla nostra vita quotidiana. In realtà, la maggior parte di noi incontra l&apos;intelligenza artificiale in un modo o nell&apos;altro quasi ogni giorno. Dal momento in cui ci si sveglia e si controlla lo smartphone alla visione di un altro film consigliato da Netflix, l&apos;intelligenza artificiale si è fatta rapidamente strada nella nostra vita quotidiana. Secondo uno studio di Statista, il mercato globale dell&apos;IA è destinato a crescere fino al 54% ogni anno. Ma cos&apos;è esattamente l&apos;IA? Sarà davvero utile all&apos;umanità in futuro? Ci sono molti vantaggi e svantaggi dell&apos;Intelligenza Artificiale che discuteremo in questo articolo. Ma prima di addentrarci nei pro e contro dell&apos;IA, diamo una rapida occhiata a cosa sia l&apos;IA.
            </p>
            <h1 className='mb-4 text-xl text-gray-400 font-bold'>
                Che cos&apos;è l&apos;intelligenza artificiale?
            </h1>
            <p className='mb-4'>
                Prima di passare ai vantaggi e agli svantaggi dell&apos;Intelligenza Artificiale, vediamo di capire innanzitutto cos&apos;è l&apos;IA. Da un punto di vista generale, l&apos;IA fornisce a un programma informatico la capacità di pensare e imparare da solo. Si tratta di una simulazione dell&apos;intelligenza umana (quindi artificiale) nelle macchine per fare cose che normalmente si affidano all&apos;uomo. Questa meraviglia tecnologica va oltre la semplice automazione, incorporando un ampio spettro di abilità di IA - abilità che consentono alle macchine di comprendere, ragionare, imparare e interagire in modo simile all&apos;uomo.
            </p>
            <p className='mb-4'>Ti consiglio questo video (in inglese) per capire cos&apos;è l&apos;intelligenza artificiale!</p>
            <div className='mb-4'>
                <YoutubeEmbed embedId={"uMzUB89uSxU"} />
            </div>
            <p className='mb-4 text-gray-400'>Ma... Quali sono i Pro e i Contro?? Clicca i pulsanti sotto per scoprirlo!</p>
            <div className="space-x-4">
                <Link href="ai/pros">
                    <button className="btn btn-primary">Pro dell&apos;IA</button>
                </Link>
                <Link href="ai/cons">
                    <button className="btn btn-secondary">Contro dell&apos;IA</button>
                </Link>
            </div>
        </div>
    );
}
