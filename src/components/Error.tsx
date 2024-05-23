'use client';
import Link from 'next/link';

function Error() {
    return (
        <div className="flex items-center justify-center min-h-screen" style={{ backgroundImage: 'url(https://images.rbxcdn.com/c5d9dc67ec813ea8e7e3616c68a34041-maintenance-v2.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Ops, qualcosa è andato storto!</h1>
                <p className="text-lg mb-2">La pagina ha riscontrato un errore.</p>
                <br />
                <p className="text-sm mb-4">Purtroppo questa pagina non potrà essere visitata in quanto c&apos;è una manutenzione in corso.</p>
                <Link href="/">
                    <button className="btn btn-primary">Go back home</button>
                </Link>
            </div>
        </div>
    );
}

export default Error;
